/**
 * Gemini AI Service for MT Makina Chatbot
 * Uses secure backend API proxy
 */

export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

/**
 * Send a message to the chat API and get a response
 */
export async function sendMessageToGemini(
    userMessage: string,
    chatHistory: ChatMessage[],
    language: string = 'tr'
): Promise<string> {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: userMessage,
                history: chatHistory,
                language: language
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Chat API error:', response.status, errorData);

            if (response.status === 429) {
                return getRateLimitMessage(language);
            }

            return getErrorMessage(language);
        }

        const data = await response.json();

        if (data.response) {
            return data.response;
        }

        return getErrorMessage(language);
    } catch (error) {
        console.error('Error calling chat API:', error);
        return getErrorMessage(language);
    }
}

function getErrorMessage(language: string): string {
    const messages: Record<string, string> = {
        tr: 'Üzgünüm, şu anda yanıt veremiyorum. Lütfen WhatsApp üzerinden bize ulaşın: +90 542 310 99 30',
        en: 'Sorry, I cannot respond right now. Please contact us via WhatsApp: +90 542 310 99 30',
        ru: 'Извините, я не могу ответить сейчас. Свяжитесь с нами через WhatsApp: +90 542 310 99 30',
        ar: 'عذراً، لا أستطيع الرد الآن. يرجى الاتصال بنا عبر واتساب: +90 542 310 99 30',
    };
    return messages[language] || messages.tr;
}

function getRateLimitMessage(language: string): string {
    const messages: Record<string, string> = {
        tr: 'Çok fazla mesaj gönderdiniz. Lütfen biraz bekleyin veya WhatsApp üzerinden bize ulaşın: +90 542 310 99 30',
        en: 'Too many messages. Please wait a moment or contact us via WhatsApp: +90 542 310 99 30',
        ru: 'Слишком много сообщений. Подождите или свяжитесь с нами через WhatsApp: +90 542 310 99 30',
        ar: 'رسائل كثيرة جداً. يرجى الانتظار أو الاتصال بنا عبر واتساب: +90 542 310 99 30',
    };
    return messages[language] || messages.tr;
}

/**
 * Get welcome message based on language
 */
export function getWelcomeMessage(language: string): string {
    const messages: Record<string, string> = {
        tr: 'Merhaba! 👋 Ben MT Asistan. Size parçalama makineleri hakkında yardımcı olabilirim. Ne sormak istersiniz?',
        en: 'Hello! 👋 I\'m MT Assistant. I can help you with shredding machines. What would you like to know?',
        ru: 'Привет! 👋 Я MT Ассистент. Могу помочь вам с измельчителями. Что вас интересует?',
        ar: 'مرحباً! 👋 أنا مساعد MT. يمكنني مساعدتك في آلات التقطيع. ماذا تريد أن تعرف؟',
    };
    return messages[language] || messages.tr;
}

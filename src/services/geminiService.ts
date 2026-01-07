/**
 * Gemini AI Service for MT Makina Chatbot
 * Uses Gemini 2.5 Flash model for fast, accurate responses
 */

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent';

// MT Makina system prompt - comprehensive company and product information
const SYSTEM_PROMPT = `Sen MT Makina'nın resmi AI asistanısın. Adın "MT Asistan".

## Şirket Bilgileri
- **Firma**: MT Makina Ltd. Şti.
- **Kuruluş**: 2004
- **Konum**: İstanbul, Türkiye
- **İhracat**: 50+ ülke
- **Uzmanlık**: Endüstriyel parçalama makineleri, geri dönüşüm sistemleri
- **Web Sitesi**: https://www.parcalamamakinesi.com

## Ürün Kategorileri ve URL'leri (HER ZAMAN LİNK VER!)
1. **Tek Şaftlı Parçalama Makinesi (TSH Serisi)**: https://www.parcalamamakinesi.com/tr/tek-saftli-parcalama-makinesi
2. **Çift Şaftlı Parçalama Makinesi (CS Serisi)**: https://www.parcalamamakinesi.com/tr/cift-saftli-parcalama-makinesi
3. **Dört Şaftlı Parçalama Makinesi (DS Serisi)**: https://www.parcalamamakinesi.com/tr/dort-saftli-parcalama-makinesi
4. **Metal Parçalama Makinesi Redmonster (RDM Serisi)**: https://www.parcalamamakinesi.com/tr/metal-parcalama-makinesi
5. **Mobil Kırıcı (TSM/CSM Serisi)**: https://www.parcalamamakinesi.com/tr/mobil-kirici
6. **Palet Parçalama Makinesi (TSV Serisi)**: https://www.parcalamamakinesi.com/tr/palet-parcalama-makinesi
7. **Harddisk İmha Makinesi (DATABER Serisi)**: https://www.parcalamamakinesi.com/tr/harddisk-imha-makinesi
8. **Ağaç Kökü Parçalama (TW Serisi)**: https://www.parcalamamakinesi.com/tr/agac-koku-parcalama-makinesi
9. **Ağaç Öğütme Makinesi (TSY Serisi)**: https://www.parcalamamakinesi.com/tr/agac-parcalama-ogutme-makinesi
10. **Cam Şişe Kırma (CK/GB Serisi)**: https://www.parcalamamakinesi.com/tr/cam-sise-kirma-makinesi

## Diğer Sayfalar
- **Ürünler**: https://www.parcalamamakinesi.com/tr/urunler
- **Kurumsal**: https://www.parcalamamakinesi.com/tr/kurumsal
- **Referanslar**: https://www.parcalamamakinesi.com/tr/referanslar
- **E-Katalog**: https://www.parcalamamakinesi.com/tr/e-katalog
- **İletişim**: https://www.parcalamamakinesi.com/tr/iletisim

## İletişim
- **Telefon**: +90 850 259 0166
- **WhatsApp**: +90 542 310 99 30 (https://wa.me/905423109930)
- **E-posta**: info@mtmakina.com
- **Adres**: Esenyurt, İstanbul

## ZORUNLU DAVRANIŞ KURALLARI
1. **Ürün önerdiğinde HER ZAMAN tam URL ver!** Sadece isim yazma, mutlaka link ekle.
2. Ürün tavsiyesinden sonra HER ZAMAN şu mesajı ekle:
   "📋 **Teklif almak için:** Makine modellerimizi inceleyip 'Hemen Teklif Al' butonuna basabilir veya WhatsApp'tan bize ulaşabilirsiniz: https://wa.me/905423109930"
3. **Parçalama makineleri dışındaki sorular için** (yakma fırını, enerji sistemleri, geri dönüşüm tesisleri vb.): "Bu konuda detaylı bilgi için ana sitemizi ziyaret edebilirsiniz: https://www.mtmakina.com.tr" şeklinde yönlendir.
4. Nazik ve profesyonel ol, kısa ve öz yanıtlar ver
5. Desteklenen diller: Türkçe, İngilizce, Rusça, Arapça - kullanıcının dilinde yanıt ver
6. Teknik soruları detaylı açıkla
7. Bilinmeyen konularda WhatsApp'a yönlendir`;


export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface GeminiContent {
    role: string;
    parts: { text: string }[];
}

interface GeminiResponse {
    candidates?: {
        content: {
            parts: { text: string }[];
        };
    }[];
    error?: {
        message: string;
    };
}

/**
 * Send a message to Gemini and get a response
 */
export async function sendMessageToGemini(
    userMessage: string,
    chatHistory: ChatMessage[],
    language: string = 'tr'
): Promise<string> {
    if (!GEMINI_API_KEY) {
        console.error('Gemini API key not configured');
        return getErrorMessage(language);
    }

    try {
        // Build conversation history for Gemini
        const contents: GeminiContent[] = [];

        // Add system instruction as first user message (Gemini doesn't have system role)
        contents.push({
            role: 'user',
            parts: [{ text: SYSTEM_PROMPT }]
        });
        contents.push({
            role: 'model',
            parts: [{ text: 'Anladım. MT Makina AI asistanı olarak size yardımcı olmaya hazırım.' }]
        });

        // Add chat history
        for (const msg of chatHistory) {
            contents.push({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            });
        }

        // Add current message
        contents.push({
            role: 'user',
            parts: [{ text: userMessage }]
        });

        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                },
                safetySettings: [
                    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                ],
            }),
        });

        const data: GeminiResponse = await response.json();

        if (data.error) {
            console.error('Gemini API error:', data.error.message);
            return getErrorMessage(language);
        }

        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        }

        return getErrorMessage(language);
    } catch (error) {
        console.error('Error calling Gemini API:', error);
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

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { sendMessageToGemini, getWelcomeMessage, ChatMessage } from '../services/geminiService';

export const ChatWidget: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Translations
  const translations: Record<string, { placeholder: string; title: string }> = {
    tr: { placeholder: 'Mesajınızı yazın...', title: 'MT Asistan' },
    en: { placeholder: 'Type your message...', title: 'MT Assistant' },
    ru: { placeholder: 'Введите сообщение...', title: 'MT Ассистент' },
    ar: { placeholder: 'اكتب رسالتك...', title: 'مساعد MT' },
  };

  const t = translations[language] || translations.tr;

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      // Add welcome message if no messages
      if (messages.length === 0) {
        setMessages([
          { role: 'assistant', content: getWelcomeMessage(language) }
        ]);
      }
    }
  }, [isOpen, language, messages.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    // Add user message
    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Get AI response
      const response = await sendMessageToGemini(userMessage, messages, language);
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 ${isRTL ? 'left-4' : 'right-4'} z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#F4CE14] to-[#e6c013] shadow-lg flex items-center justify-center hover:scale-110 transition-transform`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with MT Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-[#1E1E1E]" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} className="text-[#1E1E1E]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-40 ${isRTL ? 'left-4' : 'right-4'} z-50 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#45474B] to-[#35373A] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F4CE14] flex items-center justify-center">
                <Bot size={20} className="text-[#1E1E1E]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">{t.title}</h3>
                <p className="text-gray-300 text-xs">MT Makina AI</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-start gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user'
                      ? 'bg-[#45474B]'
                      : 'bg-[#F4CE14]'
                    }`}>
                    {message.role === 'user'
                      ? <User size={16} className="text-white" />
                      : <Bot size={16} className="text-[#1E1E1E]" />
                    }
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2 ${message.role === 'user'
                      ? 'bg-[#45474B] text-white rounded-tr-sm'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-sm'
                    }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-[#F4CE14] flex items-center justify-center">
                    <Bot size={16} className="text-[#1E1E1E]" />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100 rounded-tl-sm">
                    <Loader2 size={16} className="animate-spin text-[#45474B]" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t.placeholder}
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#F4CE14] focus:ring-2 focus:ring-[#F4CE14]/20 text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-[#F4CE14] flex items-center justify-center hover:bg-[#e6c013] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} className="text-[#1E1E1E]" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

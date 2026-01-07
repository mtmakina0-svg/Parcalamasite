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
  const [showNotification, setShowNotification] = useState(false);
  const [isWorkingHours, setIsWorkingHours] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check if current time is within working hours (Mon-Sat 09:00-18:00 Turkey time)
  useEffect(() => {
    const checkWorkingHours = () => {
      const now = new Date();
      const turkeyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
      const day = turkeyTime.getDay(); // 0 = Sunday
      const hour = turkeyTime.getHours();
      // Working hours: Monday(1) to Saturday(6), 09:00-18:00
      const isWorking = day >= 1 && day <= 6 && hour >= 9 && hour < 18;
      setIsWorkingHours(isWorking);
    };
    checkWorkingHours();
    const interval = setInterval(checkWorkingHours, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Show notification bubble after 2 seconds on first visit
  useEffect(() => {
    const hasSeenNotification = sessionStorage.getItem('chatNotificationSeen');
    if (!hasSeenNotification && !isOpen) {
      const timer = setTimeout(() => {
        setShowNotification(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Translations
  const translations: Record<string, { placeholder: string; title: string; notification: string }> = {
    tr: { placeholder: 'Mesajınızı yazın...', title: 'MT Asistan', notification: '👋 Makineler hakkında bana her şeyi sorabilirsiniz!' },
    en: { placeholder: 'Type your message...', title: 'MT Assistant', notification: '👋 Ask me anything about machines!' },
    ru: { placeholder: 'Введите сообщение...', title: 'MT Ассистент', notification: '👋 Спросите меня о машинах!' },
    ar: { placeholder: 'اكتب رسالتك...', title: 'مساعد MT', notification: '👋 اسألني أي شيء عن الآلات!' },
  };

  const t = translations[language] || translations.tr;

  // Theme colors based on working hours
  const themeColor = isWorkingHours ? '#22c55e' : '#F4CE14'; // Green during work hours, yellow otherwise
  const themeColorHover = isWorkingHours ? '#16a34a' : '#e6c013';

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

  // Parse message content and render URLs as clickable links
  const renderMessageContent = (content: string) => {
    // Clean up markdown formatting
    let cleanContent = content
      // Remove markdown bold
      .replace(/\*\*(.*?)\*\*/g, '$1')
      // Remove markdown italic
      .replace(/\*(.*?)\*/g, '$1')
      // Convert markdown links [text](url) to just url
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$2')
      // Remove leftover brackets around URLs
      .replace(/\[?(https?:\/\/[^\s\]]+)\]?/g, '$1');

    // Split content by URLs and render
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = cleanContent.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        // Reset regex lastIndex
        urlRegex.lastIndex = 0;
        // Clean trailing punctuation from URL
        const cleanUrl = part.replace(/[.,;:!?)]+$/, '');
        const trailing = part.slice(cleanUrl.length);
        return (
          <span key={index}>
            <a
              href={cleanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1170B5] hover:text-[#0a5a8f] underline"
            >
              🔗 Ziyaret Et
            </a>
            {trailing}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      {/* Notification Bubble */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`fixed bottom-[7.5rem] ${isRTL ? 'left-20' : 'right-20'} z-50 max-w-[220px] bg-white rounded-2xl shadow-xl p-3 border-2`}
            style={{ borderColor: themeColor }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <button
              onClick={() => {
                setShowNotification(false);
                sessionStorage.setItem('chatNotificationSeen', 'true');
              }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center text-white text-xs"
            >
              ×
            </button>
            <p className="text-sm text-gray-700 leading-snug">{t.notification}</p>
            {/* Pulse indicator */}
            <motion.div
              className="absolute -top-1 -left-1 w-3 h-3 rounded-full"
              style={{ backgroundColor: themeColor }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          if (showNotification) {
            setShowNotification(false);
            sessionStorage.setItem('chatNotificationSeen', 'true');
          }
        }}
        className={`fixed bottom-24 ${isRTL ? 'left-4' : 'right-4'} z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300`}
        style={{ background: `linear-gradient(135deg, ${themeColor}, ${themeColorHover})` }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with MT Assistant"
      >
        {/* Online indicator during working hours */}
        {isWorkingHours && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
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
                    : ''
                    }`}
                    style={message.role !== 'user' ? { backgroundColor: themeColor } : {}}
                  >
                    {message.role === 'user'
                      ? <User size={16} className="text-white" />
                      : <Bot size={16} className="text-[#1E1E1E]" />
                    }
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.role === 'user'
                    ? 'bg-[#45474B] text-white rounded-tr-sm'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-sm'
                    }`}>
                    <div className="text-sm leading-relaxed" style={{ wordBreak: 'normal', overflowWrap: 'break-word', hyphens: 'auto' }}>{renderMessageContent(message.content)}</div>
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
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: themeColor }}>
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
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 text-sm"
                  style={{ '--tw-ring-color': themeColor } as React.CSSProperties}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: themeColor }}
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

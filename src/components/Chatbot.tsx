import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, ChevronDown, RotateCcw } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const predefinedQA = [
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive digital solutions including SEO & Content Marketing, Paid Advertising (PPC), Web Development & Design, Data Analytics & CRO, Social Media Management, and Marketing Automation. Each service is tailored to drive measurable growth for your business.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing is flexible and depends on your specific needs. We offer packages starting from $2,500/month for our Starter plan, up to custom Enterprise solutions. Visit our Pricing page or request a free consultation for a personalized quote.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Results vary by service. SEO typically shows significant improvement in 3-6 months, PPC campaigns can deliver results within weeks, and web development projects are completed in 4-12 weeks depending on complexity. We provide regular performance reports to track progress.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Absolutely! We specialize in creating custom solutions tailored to your unique business needs. Our team works closely with you to understand your goals and design strategies that deliver results. Contact us to discuss your specific requirements.',
  },
  {
    question: 'Can I schedule a demo?',
    answer: 'Yes! We offer free 30-minute consultation calls where we can discuss your business needs and show you how our solutions can help. Click on "Schedule a Demo" or visit our Demo page to book a time that works for you.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work with businesses across various industries including e-commerce, technology, healthcare, finance, education, and professional services. Our data-driven approach allows us to adapt our strategies to any industry vertical.',
  },
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! 👋 How can I help you today? Choose a question below or type your own.',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showQuestions, setShowQuestions] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lock body scroll when chatbot is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const handleQuestionClick = (question: string, answer: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      sender: 'user',
      timestamp: new Date(),
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: answer,
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botMessage]);
    setShowQuestions(false);
  };

  const handleReturnToQuestions = () => {
    setShowQuestions(true);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    // Simple keyword matching for custom questions
    let answer = "Thank you for your question! For detailed information, please contact us at info@hivetechsolutions.com or call +1 (817) 886-6699. We'd be happy to assist you!";

    const lowerInput = inputValue.toLowerCase();
    if (lowerInput.includes('service')) {
      answer = predefinedQA[0].answer;
    } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      answer = predefinedQA[1].answer;
    } else if (lowerInput.includes('result') || lowerInput.includes('time')) {
      answer = predefinedQA[2].answer;
    } else if (lowerInput.includes('custom')) {
      answer = predefinedQA[3].answer;
    } else if (lowerInput.includes('demo') || lowerInput.includes('schedule')) {
      answer = predefinedQA[4].answer;
    } else if (lowerInput.includes('industry') || lowerInput.includes('industries')) {
      answer = predefinedQA[5].answer;
    }

    const botMessage: Message = {
      id: messages.length + 2,
      text: answer,
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue('');
    setShowQuestions(false);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        text: 'Hello! 👋 How can I help you today? Choose a question below or type your own.',
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
    setShowQuestions(true);
  };

  return (
    <>
      {/* Chat Button - TRULY FIXED */}
      <div
        className="fixed"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 9999,
          pointerEvents: 'auto',
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open chat"
          className="block"
        >
          <motion.div
            className="p-3 md:p-4 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-[var(--accent-yellow)] ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Chat Modal - Global overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              style={{
                position: 'fixed',
                zIndex: 10000,
                pointerEvents: 'auto',
              }}
            />

            {/* Chat Window */}
            <div
              className="fixed"
              style={{
                position: 'fixed',
                bottom: '6rem',
                right: '1.5rem',
                zIndex: 10001,
                maxWidth: 'min(400px, calc(100vw - 2rem))',
                width: '100%',
                pointerEvents: 'auto',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative"
              >
                <div className="flex flex-col h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl border-2 border-[var(--accent-yellow)] overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] border-b border-[var(--accent-yellow)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-[var(--accent-yellow)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--bg-dark)] text-sm">Hive Tech Solutions</h3>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-xs text-[var(--bg-dark)]">Online</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleReset}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                        aria-label="Reset chat"
                      >
                        <RotateCcw className="w-4 h-4 text-[var(--bg-dark)]" />
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                        aria-label="Close chat"
                      >
                        <X className="w-4 h-4 text-[var(--bg-dark)]" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--bg-surface)]">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)]'
                              : 'bg-white text-[var(--text-primary)] border border-[var(--border-base)]'
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                          <span className={`text-xs mt-1 block ${
                            message.sender === 'user' ? 'text-[var(--bg-dark)]/70' : 'text-[var(--text-muted)]'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick Questions */}
                  {showQuestions && (
                    <div className="p-4 border-t border-[var(--border-base)] bg-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                          Quick Questions
                        </span>
                        <button
                          onClick={handleReturnToQuestions}
                          className="p-1 hover:bg-[var(--bg-surface)] rounded transition-colors"
                          aria-label="Show questions"
                        >
                          <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
                        </button>
                      </div>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {predefinedQA.map((qa, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuestionClick(qa.question, qa.answer)}
                            className="w-full text-left px-3 py-2 bg-[var(--bg-surface)] hover:bg-[var(--accent-yellow)]/10 hover:border-[var(--accent-yellow)] border border-transparent rounded-lg transition-all text-xs text-[var(--text-secondary)]"
                          >
                            {qa.question}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 border-t border-[var(--border-base)] bg-white">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-lg focus:outline-none focus:border-[var(--accent-yellow)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)] rounded-lg hover:shadow-lg transition-all ring-2 ring-[var(--accent-yellow)] ring-offset-1"
                        aria-label="Send message"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
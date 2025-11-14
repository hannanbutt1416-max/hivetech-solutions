import { motion } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppFloat() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const whatsappNumber = '+1234567890'; // Replace with actual WhatsApp number
  const message = encodeURIComponent('Hi! I\'m interested in Hive Tech Solutions services.');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40"
      style={{ 
        transform: 'translateY(-50%) translateZ(0)',
        willChange: 'transform',
      }}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        {/* Pulsing ring effect - disabled on mobile */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-20"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        {/* WhatsApp button */}
        <motion.div
          className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          animate={!isMobile ? {
            y: [0, -5, 0],
          } : {}}
          transition={!isMobile ? {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          } : {}}
          style={{ 
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <MessageCircle className="w-7 h-7 text-white" fill="currentColor" />
        </motion.div>

        {/* Tooltip */}
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[var(--bg-surface)] text-[var(--text-primary)] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap border border-[var(--border-base)]"
          >
            <div className="flex items-center gap-2">
              <span>Chat with us on WhatsApp</span>
            </div>
            {/* Arrow pointing left */}
            <div className="absolute right-full top-1/2 -translate-y-1/2">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[var(--bg-surface)]" />
            </div>
          </motion.div>
        )}
      </motion.a>
    </div>
  );
}
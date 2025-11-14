import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, DollarSign, Phone, Play, Menu, ArrowRight } from 'lucide-react';
import { ConsultationModal } from './ConsultationModal';

export function StickyArrowSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const actions = [
    {
      icon: Menu,
      label: 'Schedule a Demo',
      description: 'Book a 30-min call',
      iconComponent: Calendar,
      action: () => {
        setIsExpanded(false);
        // Navigate to demo page - keep this as navigation
        window.location.href = '/demo';
      },
    },
    {
      icon: DollarSign,
      label: 'Get Price',
      description: 'View plans & pricing',
      iconComponent: DollarSign,
      action: () => {
        setIsExpanded(false);
        setIsConsultationModalOpen(true);
      },
    },
    {
      icon: ArrowRight,
      label: 'Request a Callback',
      description: "We'll call you back",
      iconComponent: Phone,
      action: () => {
        setIsExpanded(false);
        setIsConsultationModalOpen(true);
      },
    },
    {
      icon: Play,
      label: 'Custom Solutions',
      description: 'Tailored for you',
      iconComponent: Play,
      action: () => {
        setIsExpanded(false);
        setIsConsultationModalOpen(true);
      },
    },
  ];

  return (
    <>
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      <div
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40"
      >
        {/* Expanded Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-l-2xl shadow-2xl border-2 border-r-0 border-[var(--accent-yellow)] overflow-hidden"
              style={{ minWidth: '280px' }}
            >
              <div className="p-6 space-y-3">
                {actions.map((action) => {
                  const IconComp = action.iconComponent;

                  return (
                    <button
                      key={action.label}
                      onClick={action.action}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--accent-yellow)]/10 border border-transparent hover:border-[var(--accent-yellow)] transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] flex items-center justify-center">
                        <IconComp className="w-5 h-5 text-[var(--bg-dark)]" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-[var(--text-primary)]">
                          {action.label}
                        </div>
                        <div className="text-xs text-[var(--text-muted)]">
                          {action.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Trigger Arrow */}
        <motion.div
          className="relative bg-gradient-to-br from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] rounded-l-lg shadow-lg px-3 py-6 cursor-pointer"
          whileHover={{ x: -4 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <motion.div
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight className="w-5 h-5 text-[var(--bg-dark)] rotate-180" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
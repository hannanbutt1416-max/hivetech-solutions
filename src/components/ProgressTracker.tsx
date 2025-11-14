import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Overview' },
  { id: 'benefits', label: 'Key Benefits' },
  { id: 'process', label: 'Our Process' },
  { id: 'cta', label: 'Get Started' },
];

export function ProgressTracker() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 40,
      }}
      className="hidden xl:block"
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-[var(--accent-yellow)] p-4 min-w-[180px]"
      >
        <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3 px-2">
          Quick Nav
        </div>
        <div className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeSection === section.id;
            const isCompleted = sections.findIndex(s => s.id === activeSection) > idx;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-yellow-bright)] text-[var(--bg-dark)]'
                    : 'hover:bg-[var(--bg-surface)] text-[var(--text-secondary)]'
                }`}
              >
                <div className="flex-shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-yellow)]" />
                  ) : (
                    <div className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[var(--bg-dark)]' : 'bg-[var(--border-base)]'
                    }`} />
                  )}
                </div>
                <span className="text-xs font-medium">{section.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

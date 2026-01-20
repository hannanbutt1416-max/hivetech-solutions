import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { ConsultationModal } from './ConsultationModal';
import { LogoImage } from './LogoImage';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', hasMegaMenu: true, path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Top Contact Bar */}
      <div className="bg-[#1A1A1A] border-b border-[#FFD700]/30">
          <div className="container mx-auto px-3 py-1">
            <div className="flex items-center justify-between text-[0.65rem]">
              <div className="flex items-center gap-3">
              <a 
                href="tel:+1234567890" 
                  className="flex items-center gap-1 text-[#D3D3D3] hover:text-[#FFD700] transition-colors"
              >
                  <Phone className="w-2.5 h-2.5" />
                <span className="hidden sm:inline">+1 (817) 886-6699</span>
              </a>
              <a 
                href="mailto:info@hivetechsolutions.com" 
                  className="flex items-center gap-1 text-[#D3D3D3] hover:text-[#FFD700] transition-colors"
              >
                  <Mail className="w-2.5 h-2.5" />
                <span className="hidden sm:inline">info@hivetechsolutions.com</span>
              </a>
            </div>
            <Link
              to="/demo"
                className="px-3 py-1 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-md hover:shadow-lg glow-yellow transition-all duration-300 font-semibold text-[0.65rem]"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white'
      }`}>
          <nav className="container mx-auto px-3 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="hive tech solutions home">
            <LogoImage className="h-7" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-5">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.hasMegaMenu && setActiveMegaMenu(item.label)}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center gap-1 text-[#4A4A4A] hover:text-[#FFD700] transition-colors duration-200 relative group font-medium text-[0.7rem]"
                    >
                      {item.label}
                      {item.hasMegaMenu && <ChevronDown className="w-3 h-3" />}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300" />
                    </Link>
                    {item.hasMegaMenu && activeMegaMenu === item.label && <MegaMenu />}
                  </div>
                ))}
              </div>
              
              {/* Get Price Button */}
              <Link
                to="/pricing"
                 className="px-4 py-1.5 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-[0.7rem] ring-2 ring-[#FFD700] ring-offset-1"
              >
                Get Price
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-[#1A1A1A] p-1.5"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <> 
            {/* Backdrop Overlay - Highest z-index */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-[9998]"
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            />
            
            {/* Mobile Menu Panel - Absolute highest z-index */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl lg:hidden border-l border-[#E0E0E0] overflow-y-auto z-[9999]"
              style={{ position: 'fixed', top: 0, right: 0, bottom: 0, height: '100vh', height: '100dvh' }}
            >
              {/* Close Button */}
              <div className="sticky top-0 bg-white border-b border-[#E0E0E0] p-3 flex items-center justify-between z-10">
                <span className="font-semibold text-[#1A1A1A] text-sm">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[#1A1A1A]" />
                </button>
              </div>

              <div className="p-3 space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.hasMegaMenu ? (
                      <div>
                        <div className="text-sm text-[#1A1A1A] font-semibold py-1.5 border-b border-[#E0E0E0] mb-1.5">
                          {item.label}
                        </div>
                        {/* Mobile Mega Menu Content */}
                        <div className="pl-2 space-y-1.5">
                          <Link
                            to="/service/local-seo"
                            className="block text-xs text-[#4A4A4A] hover:text-[#FFD700] transition-colors py-0.5"
                          >
                            Local SEO
                          </Link>
                          <Link
                            to="/service/technical-seo"
                            className="block text-xs text-[#4A4A4A] hover:text-[#FFD700] transition-colors py-0.5"
                          >
                            Technical SEO
                          </Link>
                          <Link
                            to="/service/webapps"
                            className="block text-xs text-[#4A4A4A] hover:text-[#FFD700] transition-colors py-0.5"
                          >
                            Web Applications
                          </Link>
                          <Link
                            to="/service/automations"
                            className="block text-xs text-[#4A4A4A] hover:text-[#FFD700] transition-colors py-0.5"
                          >
                            Workflow Automation
                          </Link>
                          <Link
                            to="/service/cro"
                            className="block text-xs text-[#4A4A4A] hover:text-[#FFD700] transition-colors py-0.5"
                          >
                            Conversion Optimization
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="block text-sm text-[#1A1A1A] hover:text-[#FFD700] transition-colors duration-200 py-1.5 font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <div className="pt-3 space-y-1.5 border-t border-[#E0E0E0]">
                  <Link
                    to="/pricing"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#1A1A1A] rounded-lg hover:shadow-lg transition-all duration-200 font-semibold text-xs ring-2 ring-[#FFD700] ring-offset-1"
                  >
                    Get Price
                  </Link>
                  <Link
                    to="/demo"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-white border-2 border-[#FFD700] text-[#1A1A1A] rounded-lg hover:bg-[#FFD700]/10 transition-all duration-200 font-semibold text-xs"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </motion.header>
  );
}
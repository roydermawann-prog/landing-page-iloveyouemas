import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Keunggulan', href: '#advantages' },
    { name: 'Layanan', href: '#services' },
    { name: 'Harga', href: '#pricing' },
    { name: 'Kalkulator', href: '#calculator' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Cabang', href: '#branches' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-gold py-3'
            : 'bg-white/95 backdrop-blur-md shadow-sm py-4'
        }`}
      >
        <div className="container-premium px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center shadow-gold">
                <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg sm:text-xl text-charcoal-900">
                  I Love Emas
                </span>
                <span className="text-[10px] sm:text-xs text-charcoal-600">
                  Premium Gold Buyer
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-charcoal-700 hover:text-primary font-medium transition-colors text-sm"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(214, 184, 106, 0.4)' }}
                onClick={() => scrollToSection('#calculator')}
                className="btn-primary text-sm"
              >
                Cek Harga Sekarang
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 sm:p-3 rounded-lg hover:bg-beige-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl"
            >
              <div className="container-premium px-4 py-6">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left px-4 py-3 rounded-lg hover:bg-beige-50 hover:text-primary font-medium text-charcoal-700 text-base"
                    >
                      {link.name}
                    </button>
                  ))}
                  <button
                    className="btn-primary mt-4 text-center"
                    onClick={() => scrollToSection('#calculator')}
                  >
                    Cek Harga Sekarang
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;

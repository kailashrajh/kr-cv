import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-kanagawa-bg/95 backdrop-blur-sm shadow-lg border-b border-kanagawa-wave' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold font-raleway cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={isScrolled ? 'text-kanagawa-fg' : 'text-kanagawa-fg'}>K</span>
            <span className={isScrolled ? 'text-kanagawa-orange' : 'text-kanagawa-yellow'}>R</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 px-4 font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'text-kanagawa-orange'
                      : 'text-kanagawa-yellow'
                    : isScrolled
                    ? 'text-kanagawa-fgDark hover:text-kanagawa-orange'
                    : 'text-kanagawa-fgDark hover:text-kanagawa-fg'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isScrolled ? 'bg-kanagawa-orange' : 'bg-kanagawa-yellow'
                    }`}
                    layoutId="activeSection"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              isScrolled ? 'text-kanagawa-fg' : 'text-kanagawa-fg'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          } transition-all duration-300`}
          initial={false}
        >
          <div className="py-4 space-y-2 bg-kanagawa-bg/95 backdrop-blur-sm rounded-lg shadow-lg mt-2 border border-kanagawa-wave">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-kanagawa-orange bg-kanagawa-bgLight'
                    : 'text-kanagawa-fgDark hover:text-kanagawa-orange hover:bg-kanagawa-bgLight'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

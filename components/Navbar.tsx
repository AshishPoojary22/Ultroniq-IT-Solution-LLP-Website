import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#00C4FF]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="Ultroniq IT Solution LLP - Home"
          >
            <img 
              src="/logo.png" 
              alt="Ultroniq IT Solution LLP Logo" 
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
              onError={(e) => {
                // Fallback to text if image doesn't exist
                const fallback = document.createElement('span');
                fallback.textContent = 'Ultroniq';
                fallback.className = 'text-xl md:text-2xl font-bold text-white hover:text-[#00C4FF] transition-colors';
                e.currentTarget.parentElement?.appendChild(fallback);
                e.currentTarget.style.display = 'none';
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#00C4FF]'
                    : 'text-[#AAB4C3] hover:text-[#00C4FF]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#00C4FF] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#00C4FF]/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'text-[#00C4FF] bg-[#00C4FF]/10'
                      : 'text-[#AAB4C3] hover:text-[#00C4FF] hover:bg-[#00C4FF]/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}




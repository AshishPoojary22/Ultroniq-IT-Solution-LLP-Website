import { Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-[#00C4FF]/20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="Ultroniq IT Solution LLP Logo" 
                className="h-16 w-16 md:h-20 md:w-20 object-contain mb-4"
                onError={(e) => {
                  // Fallback to text if image doesn't exist
                  const fallback = document.createElement('h3');
                  fallback.textContent = 'Ultroniq IT Solution LLP';
                  fallback.className = 'text-xl font-bold text-white mb-4';
                  e.currentTarget.parentElement?.insertBefore(fallback, e.currentTarget.parentElement.firstChild);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-[#AAB4C3] text-sm mb-4">
              Empowering the Future of Technology and Business since 2019.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ultroniq-it-solution-llp-66868138b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAB4C3] hover:text-[#00C4FF] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/ultroniq_uis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAB4C3] hover:text-[#00C4FF] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="text-[#AAB4C3] hover:text-[#00C4FF] transition-colors text-sm"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#AAB4C3] hover:text-[#00C4FF] transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-[#AAB4C3] hover:text-[#00C4FF] transition-colors text-sm"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partners')}
                  className="text-[#AAB4C3] hover:text-[#00C4FF] transition-colors text-sm"
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-[#AAB4C3] text-sm">
                <Mail size={16} />
                <a href="mailto:support@ultroniqitsol.com" className="hover:text-[#00C4FF] transition-colors">
                  support@ultroniqitsol.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-[#AAB4C3] text-sm">
                <Phone size={16} />
                <a href="tel:+919082537935" className="hover:text-[#00C4FF] transition-colors">
                  +91 9082537935
                </a>
              </li>
              <li className="flex items-center space-x-2 text-[#AAB4C3] text-sm">
                <Phone size={16} />
                <a href="tel:+919930340319" className="hover:text-[#00C4FF] transition-colors">
                  +91 9930340319
                </a>
              </li>
              <li className="flex items-start space-x-2 text-[#AAB4C3] text-sm">
                <MapPin size={16} className="mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <p className="text-[#AAB4C3] text-sm mb-4">
              Ready to transform your business?
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2 bg-[#00C4FF] text-black rounded-lg hover:bg-[#00C4FF]/90 transition-colors text-sm font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#00C4FF]/20 pt-8 mt-8">
          <p className="text-center text-[#AAB4C3] text-sm">
            © {currentYear} Ultroniq IT Solution LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}




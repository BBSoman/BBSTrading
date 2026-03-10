import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SocialRibbon() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(1, scrollY / 60);
  const opacity = 1 - progress;
  const maxHeight = `${(1 - progress) * 40}px`;

  return (
    <div style={{ maxHeight, overflow: 'hidden' }}>
      <div
        className="bg-black text-white py-2"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              {/* UPDATED: Changed href to match the visible text */}
              <a href="mailto:info@bbst.global" className="flex items-center hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">info@bbst.global</span>
              </a>
              
              {/* UPDATED: Changed href to match the visible text (removed spaces for better tel compatibility) */}
              <a href="tel:+96892882417" className="flex items-center hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">+968 92882417</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

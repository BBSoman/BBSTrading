import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialRibbon from './SocialRibbon';
import Header from './Header';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="sticky top-0 z-50">
        <SocialRibbon />
        <Header />
      </div>

      {children}

      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src='/BBST_Green.png' alt="BBS Logo" className="h-70 w-44 object-contain" />
              </div>
              <p className="text-slate-400">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/" className="hover:text-white transition-colors">{t.footer.home}</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">{t.footer.productsSection}</Link></li>
                <li><a href="/about" className="hover:text-white transition-colors">{t.footer.about}</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">{t.footer.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.productsSection}</h4>
              <ul className="space-y-2 text-slate-400">
                <li>{t.footer.fertilizers}</li>
                <li>{t.footer.energyProducts}</li>
                <li>{t.footer.petrochemicals}</li>
                <li>{t.footer.metals}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t.footer.connectWithUs}</h4>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

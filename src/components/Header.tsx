import { Search, X, ChevronDown, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { categoryData } from '../data/productData';
import { LANGUAGES } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import AboutModal from './AboutModal';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Close search on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Clear search query when searchOpen becomes false
  useEffect(() => {
    if (!searchOpen) {
      setSearchQuery('');
    }
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = aboutOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [aboutOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === language)!;

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    // Navigate to products page with search query parameter
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <header className="backdrop-blur-lg border-b border-white/10 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src='/BBST_Green.png' alt="BBS Logo" className="h-20 w-auto object-contain" />
              <div></div>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center space-x-8">
                <Link to="/" className="text-black-700 hover:text-blue-600 font-medium transition-colors">{t.nav.home}</Link>
                <div
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    to="/products"
                    className="flex items-center gap-1 text-black-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {t.nav.products}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {productsOpen && (
                    <div className="absolute left-0 top-full pt-2 w-72 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                        <div className="py-1">
                          {categoryData.map((cat) => (
                            <Link
                              key={cat.slug}
                              to={`/products/${cat.slug}`}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-[#013220] hover:text-white transition-colors group"
                              onClick={() => setProductsOpen(false)}
                            >
                              <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-8 h-8 rounded-md object-cover flex-shrink-0"
                              />
                              <span className="font-medium leading-tight">{cat.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setAboutOpen(true)}
                  className="text-black-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {t.nav.about}
                </button>
                <Link to="/contact" className="text-black-700 hover:text-blue-600 font-medium transition-colors">{t.nav.contact}</Link>
                <a href="#News" className="text-black-700 hover:text-blue-600 font-medium transition-colors">{t.nav.news}</a>
              </nav>

              <div className="flex items-center gap-1">
                {searchOpen ? (
                  <div className="flex items-center bg-slate-100 rounded-full px-3 py-1.5 gap-2 transition-all w-64">
                    <Search className="w-4 h-4 text-black-500 flex-shrink-0" />
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearchKeyDown}
                      placeholder={t.search.placeholder}
                      className="bg-transparent text-sm text-black-800 placeholder-slate-400 outline-none w-full"
                    />
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={handleSearch} 
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                        title="Search"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => { setSearchOpen(false); setSearchQuery(''); }} 
                        className="text-black-400 hover:text-slate-600 transition-colors"
                        title="Close"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 rounded-full text-black-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}

                <div ref={langRef} className="relative">
                  <button
                    onClick={() => setLangOpen((v) => !v)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-full text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium"
                  >
                    <Globe className="w-4 h-4 flex-shrink-0" />
                    <span>{currentLang.nativeLabel}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {langOpen && (
                    <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                          className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                            language === lang.code
                              ? 'bg-[#013220] text-white font-semibold'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>{lang.label}</span>
                          <span className={`font-medium ${language === lang.code ? 'text-white/80' : 'text-slate-400'}`}>{lang.nativeLabel}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
}

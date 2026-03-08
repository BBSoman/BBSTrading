import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import WorldMap from '../components/WorldMap';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  const products = [
    {
      category: 'Fertilizers & Agricultural Inputs',
      icon: '🌾',
      items: ['NPK / Urea', 'Potash / DAP', 'Sulphur'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Energy & Petroleum Products',
      icon: '🛢',
      items: ['Crude', 'EN590 (Diesel)', 'Bitumen'],
      color: 'from-slate-600 to-slate-800'
    },
    {
      category: 'Petrochemicals & Industrial Chemicals',
      icon: '🧪',
      items: ['Polymers', 'Resins'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      category: 'Metals & Metallic Ores',
      icon: '⛏',
      items: ['Copper Ore', 'Manganese', 'Ferrochrome', 'Chrome Ore', 'Antimony', 'Bauxite'],
      color: 'from-amber-600 to-orange-700'
    },
    {
      category: 'Industrial Minerals & Construction Materials',
      icon: '🪨',
      items: ['Quartz / Silica', 'Dolomite', 'Limestone', 'Gypsum', 'Aggregate'],
      color: 'from-gray-500 to-gray-700'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="home"
        className="relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-40">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t.hero.exploreProducts}
              </Link>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t.hero.getInTouch}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{t.about.title}</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                {t.about.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t.about.qualityAssurance}</h4>
                    <p className="text-slate-600">{t.about.qaDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t.about.globalNetwork}</h4>
                    <p className="text-slate-600">{t.about.gnDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t.about.competitivePricing}</h4>
                    <p className="text-slate-600">{t.about.cpDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-black-600 mb-2">15+</div>
                <div className="text-slate-700 font-medium">{t.stats.yearsExperience}</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-black-600 mb-2">50+</div>
                <div className="text-slate-700 font-medium">{t.stats.countriesServed}</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-black-600 mb-2">200+</div>
                <div className="text-slate-700 font-medium">{t.stats.happyClients}</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-black-600 mb-2">24/7</div>
                <div className="text-slate-700 font-medium">{t.stats.customerSupport}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.homeContact.title}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t.homeContact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t.homeContact.emailUs}</h3>
              <p className="text-slate-700">info@bbst.global</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t.homeContact.callUs}</h3>
              <p className="text-slate-700">+968 92882417</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{t.homeContact.visitUs}</h3>
              <p className="text-slate-700">123 Trading Street</p>
              <p className="text-slate-700">Business District, City</p>
            </div>
          </div>
        </div>
      </section>

      <WorldMap />
    </Layout>
  );
}

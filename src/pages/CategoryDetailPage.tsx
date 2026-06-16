import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowLeft, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { categoryData } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';
import { productTranslations } from '../data/productTranslations';


export default function CategoryDetailPage() {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const category = categoryData.find((c) => c.slug === slug);

  const toggleCategory = (name: string) => {
    setExpandedCategory(expandedCategory === name ? null : name);
  };

  if (!category) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">{t.products.categoryNotFound}</h2>
          <Link to="/products" className="text-blue-600 hover:underline">{t.products.backToProducts}</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/products" className="hover:text-blue-600 transition-colors">{t.nav.products}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-800 font-medium">{t.categoryNames[category.slug] || category.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t.products.categories}</h3>
                <div className="space-y-2">
                  {categoryData.map((cat) => {
                    const isExpanded = expandedCategory === cat.name;
                    const isActive = cat.slug === slug;

                    return (
                      <div key={cat.name}>
                        <button
                          onClick={() => {
                            toggleCategory(cat.name);
                            navigate(`/products/${cat.slug}`);
                          }}
                          className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            isActive
                              ? 'bg-blue-50 text-blue-700'
                              : 'hover:bg-slate-100 text-slate-700'
                          }`}
                        >
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 mr-2 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
                          )}
                          <span className={`font-medium text-sm ${isActive ? 'text-blue-700' : ''}`}>
                            {t.categoryNames[cat.slug] || cat.name}
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="ml-8 mt-2 space-y-1 mb-2">
                            {cat.products.map((product) =>
                              product.slug ? (
                                <Link
                                  key={product.name}
                                  to={`/products/${cat.slug}/${product.slug}`}
                                  className="block px-3 py-1.5 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
                                >
                                  • {product.name}
                                </Link>
                              ) : (
                                <div key={product.name} className="px-3 py-1 text-sm text-slate-600">
                                  • {product.name}
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">

              {/* Category Header */}
              <div className="relative rounded-2xl overflow-hidden mb-8 h-56 shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center px-8">
                  <button
                    onClick={() => navigate('/products')}
                    className="flex items-center gap-2 text-white/80 hover:text-white text-sm mb-3 transition-colors w-fit"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t.products.allCategories}
                  </button>
                  <h1 className="text-3xl font-bold text-white leading-tight">{t.categoryNames[category.slug] || category.name}</h1>
                  <p className="text-white/80 mt-2 max-w-xl text-sm leading-relaxed">{t.categoryOverviews[category.slug] || category.overview}</p>
                </div>
              </div>

              {/* Product List */}
              <div className="space-y-6">
                {category.products.map((product) => {
                  const hasDetailPage = Boolean(product.slug);
                  const cardContent = (
                    <>
                      {/* Product Image */}
                      <div className="sm:w-64 lg:w-72 flex-shrink-0 h-52 sm:h-auto overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`w-full h-full object-cover ${hasDetailPage ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <h2 className={`text-xl font-bold text-slate-900 ${hasDetailPage ? 'group-hover:text-blue-700 transition-colors' : ''}`}>
                              {product.name}
                            </h2>
                            {product.hsCode ? (
                              <span className="ml-4 flex-shrink-0 text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200 whitespace-nowrap">
                                HS {product.hsCode}
                              </span>
                            ) : (
                              <span className="ml-4 flex-shrink-0 text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
                                {(t.categoryNames[category.slug] || category.name).split(' ')[0]}
                              </span>
                            )}
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
                        </div>

                        {!hasDetailPage && product.specs.length > 0 && (
                          <div className="mt-5 pt-4 border-t border-slate-100">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">{t.products.keySpecs}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {product.specs.map((spec) => (
                                <li key={spec} className="flex items-start gap-2 text-sm text-slate-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {hasDetailPage && (
                          <div className="mt-5 pt-4 border-t border-slate-100">
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                              {t.products.viewSpecs}
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        )}
                      </div>
                    </>
                  );

                  return hasDetailPage ? (
                    <Link
                      key={product.name}
                      to={`/products/${category.slug}/${product.slug}`}
                      className="group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-shadow duration-300"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <div
                      key={product.name}
                      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col sm:flex-row"
                    >
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

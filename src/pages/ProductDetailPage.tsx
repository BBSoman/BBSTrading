import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, CheckCircle, Package } from 'lucide-react';
import Layout from '../components/Layout';
import { categoryData } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';
import { productTranslations } from '../data/productTranslations';

export default function ProductDetailPage() {
  const { t, language } = useLanguage();
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  const navigate = useNavigate();

  const getTranslatedProduct = (p: any) => {
    if (language === 'en') return p;
    const trans = productTranslations[language]?.products?.[p.slug];
    return trans ? { ...p, ...trans } : p;
  };

  const getTranslatedSubProduct = (sub: any) => {
    if (language === 'en') return sub;
    const trans = productTranslations[language]?.subProducts?.[sub.slug];
    return trans ? { ...sub, ...trans } : sub;
  };

  const category = categoryData.find((c) => c.slug === categorySlug);
  const rawProduct = category?.products.find((p) => p.slug === productSlug);

  if (!category || !rawProduct) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">{t.products.notFound}</h2>
          <Link to="/products" className="text-blue-600 hover:underline">{t.products.backToProducts}</Link>
        </div>
      </Layout>
    );
  }

  const product = getTranslatedProduct(rawProduct);
  if (product.subProducts) {
    product.subProducts = product.subProducts.map(getTranslatedSubProduct);
  }

  const translatedCategoryProducts = category.products.map(getTranslatedProduct);
  const translatedOtherProducts = category.products.filter((p) => p.slug !== productSlug).map(getTranslatedProduct);

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
            <Link to="/products" className="hover:text-blue-600 transition-colors">{t.nav.products}</Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link to={`/products/${category.slug}`} className="hover:text-blue-600 transition-colors">{t.categoryNames[category.slug] || category.name}</Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="text-slate-800 font-medium">{product.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <button
                  onClick={() => navigate(`/products/${category.slug}`)}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.products.backTo} {t.categoryNames[category.slug] || category.name}
                </button>

                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">{t.products.inThisCategory}</h3>
                <div className="space-y-1">
                  {translatedCategoryProducts.map((p) => (
                    p.slug ? (
                      <Link
                        key={p.name}
                        to={`/products/${category.slug}/${p.slug}`}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          p.slug === productSlug
                            ? 'bg-blue-50 text-blue-700 font-semibold'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Package className="w-3.5 h-3.5 flex-shrink-0" />
                        {p.name}
                      </Link>
                    ) : (
                      <div key={p.name} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-500">
                        <Package className="w-3.5 h-3.5 flex-shrink-0" />
                        {p.name}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">

              {/* Product Hero */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                <div className="relative h-72 sm:h-96 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block text-xs font-semibold bg-blue-500/90 text-white px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
                      {t.categoryNames[category.slug] || category.name}
                    </span>
                    <h1 className="text-4xl font-bold text-white leading-tight">{product.name}</h1>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-slate-600 text-base leading-relaxed">{product.description}</p>
                  {product.details && (
                    <p className="text-slate-600 text-base leading-relaxed mt-4">{product.details}</p>
                  )}
                </div>
              </div>

              {/* Sub-product grade boxes (e.g. NPK grades) */}
              {product.subProducts && product.subProducts.length > 0 ? (
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-[#013220] rounded-full" />
                    <h2 className="text-xl font-bold text-slate-900">{t.products.availableGrades}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {product.subProducts.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`/products/${category.slug}/${product.slug}/${sub.slug}`}
                        className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100 hover:border-green-200"
                      >
                        <div className="h-44 overflow-hidden">
                          <img
                            src={sub.image}
                            alt={sub.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#013220] transition-colors mb-1.5">{sub.name}</h3>
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 flex-1">{sub.description}</p>
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#013220]/80 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                              {sub.specs[0]}
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#013220] group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : product.specs.length > 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-blue-500 rounded-full" />
                    <h2 className="text-xl font-bold text-slate-900">{t.products.keySpecs}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700 leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Other Products in Category */}
              {translatedOtherProducts.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold text-slate-800 mb-4">{t.products.otherProductsIn} {t.categoryNames[category.slug] || category.name}</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {translatedOtherProducts.map((p) => (
                      p.slug ? (
                        <Link
                          key={p.name}
                          to={`/products/${category.slug}/${p.slug}`}
                          className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-4"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{p.name}</p>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{p.description}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 flex-shrink-0 transition-colors" />
                        </Link>
                      ) : null
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

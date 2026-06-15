import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, CheckCircle, Package } from 'lucide-react';
import Layout from '../components/Layout';
import { categoryData } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

export default function SubProductDetailPage() {
   const { lang, setLang } = useLang();
  const { categorySlug, productSlug, subProductSlug } = useParams<{
    categorySlug: string;
    productSlug: string;
    subProductSlug: string;
  }>();

  const category = categoryData.find((c) => c.slug === categorySlug);
  const product = category?.products.find((p) => p.slug === productSlug);
  const subProduct = product?.subProducts?.find((s) => s.slug === subProductSlug);

  if (!category || !product || !subProduct) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-700 mb-4">{t.products.gradeNotFound}</h2>
          <Link to="/products" className="text-blue-600 hover:underline">{t.products.backToProducts}</Link>
        </div>
      </Layout>
    );
  }

  const otherGrades = product.subProducts?.filter((s) => s.slug !== subProductSlug) ?? [];

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
            <Link to="/products" className="hover:text-blue-600 transition-colors">{t.nav.products}</Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link to={`/products/${category.slug}`} className="hover:text-blue-600 transition-colors">{t.categoryNames[category.slug] || category.name}</Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link to={`/products/${category.slug}/${product.slug}`} className="hover:text-blue-600 transition-colors">{product.name}</Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="text-slate-800 font-medium">{subProduct.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">

            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <Link
                  to={`/products/${category.slug}/${product.slug}`}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.products.backTo} {product.name}
                </Link>

                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">{t.products.availableGrades}</h3>
                <div className="space-y-1">
                  {product.subProducts?.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/products/${category.slug}/${product.slug}/${s.slug}`}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        s.slug === subProductSlug
                          ? 'bg-green-50 text-[#013220] font-semibold border border-green-200'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Package className="w-3.5 h-3.5 flex-shrink-0" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                <div className="relative h-72 sm:h-96 overflow-hidden">
                  <img
                    src={subProduct.image}
                    alt={subProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block text-xs font-semibold bg-[#013220]/90 text-white px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
                      {product.name}
                    </span>
                    <h1 className="text-4xl font-bold text-white leading-tight">{subProduct.name}</h1>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-slate-600 text-base leading-relaxed">{subProduct.description}</p>
                  {subProduct.details && (
                    <p className="text-slate-600 text-base leading-relaxed mt-4">{subProduct.details}</p>
                  )}
                </div>
              </div>

              {subProduct.specs.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-[#013220] rounded-full" />
                    <h2 className="text-xl font-bold text-slate-900">{t.products.keySpecs}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {subProduct.specs.map((spec) => (
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
              )}

              {otherGrades.length > 0 && (
                <div>
                  <h2 className="text-lg font-bold text-slate-800 mb-4">{product.name} — {t.products.otherGrades}</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {otherGrades.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/products/${category.slug}/${product.slug}/${s.slug}`}
                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-4"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={s.image}
                            alt={s.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-slate-800 group-hover:text-[#013220] transition-colors">{s.name}</p>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{s.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#013220] flex-shrink-0 transition-colors" />
                      </Link>
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

import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import { categoryData } from '../data/productData';
import { useLanguage } from '../context/LanguageContext';

export default function ProductsPage() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  // Search filtering logic
  const allProducts = categoryData.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categoryName: category.name,
      categorySlug: category.slug,
    }))
  );

  const filteredProducts = allProducts.filter((product) => {
    if (!searchQuery) return true;
    return (
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.specs.some((spec) => spec.toLowerCase().includes(searchQuery))
    );
  });

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <Layout>
      {/* Hero banner with parallax via background-attachment: fixed */}
      <div
        className="relative w-full h-80"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        <div className="relative h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">{t.products.pageTitle}</h1>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            {t.products.pageIntro}<br />
            <span className="font-semibold">{t.categoryNames['fertilizers-agricultural-inputs']}</span> &bull;{' '}
            <span className="font-semibold">{t.categoryNames['energy-petroleum-products']}</span> &bull;{' '}
            <span className="font-semibold">{t.categoryNames['petrochemicals-industrial-chemicals']}</span> &bull;{' '}
            <span className="font-semibold">{t.categoryNames['metals-metallic-ores']}</span> &bull;{' '}
            <span className="font-semibold">{t.categoryNames['industrial-minerals-construction-materials']}</span>
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar */}
          {searchQuery && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <p className="text-blue-800 font-medium">
                  {t.search.showingResults} <span className="font-bold">"{searchQuery}"</span>
                </p>
                <button
                  onClick={() => navigate('/products')}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {t.search.clearSearch}
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t.products.categories}</h3>
                <div className="space-y-2">
                  {categoryData.map((category) => {
                    const isExpanded = expandedCategory === category.name;

                    return (
                      <div key={category.name}>
                        <div className="flex items-center">
                          <button
                            onClick={() => toggleCategory(category.name)}
                            className="flex items-center w-full text-left px-4 py-3 rounded-lg hover:bg-slate-100 transition-colors"
                          >
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 text-slate-600 mr-2 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-slate-600 mr-2 flex-shrink-0" />
                            )}
                            <span className="font-medium text-sm text-slate-700">{t.categoryNames[category.slug] || category.name}</span>
                          </button>
                        </div>
                        {isExpanded && (
                          <div className="ml-8 mt-2 space-y-1 mb-2">
                            {category.products.map((product) => (
                              <div
                                key={product.name}
                                className="px-3 py-1 text-sm text-slate-600"
                              >
                                - {product.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Category Grid */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                
                {/* Show filtered products if search is active */}
                {searchQuery ? (
                  filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <button
                        key={product.slug}
                        onClick={() => navigate(`/products/${product.categorySlug}/${product.slug}`)}
                        className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-left group relative"
                      >
                        <div className="h-56 overflow-hidden relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white drop-shadow">{product.name}</h3>
                            <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                          </div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-20">
                      <p className="text-slate-600 text-lg">{t.search.noResults} "{searchQuery}"</p>
                    </div>
                  )
                ) : (
                  // Show categories when no search
                  categoryData.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => navigate(`/products/${category.slug}`)}
                      className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-left group relative"
                    >
                      <div className="h-56 overflow-hidden relative">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white drop-shadow">{t.categoryNames[category.slug] || category.name}</h3>
                          <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

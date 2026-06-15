import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '../context/LanguageContext';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import SubProductDetailPage from './pages/SubProductDetailPage';


function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Home & Contact */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* ✅ Product Routes - MOST SPECIFIC FIRST */}
          <Route 
            path="/products/:categorySlug/:productSlug/:subProductSlug" 
            element={<SubProductDetailPage />} 
          />
          <Route 
            path="/products/:categorySlug/:productSlug" 
            element={<ProductDetailPage />} 
          />

          {/* ✅ Product Routes - LESS SPECIFIC LAST */}
          <Route path="/products/:slug" element={<CategoryDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

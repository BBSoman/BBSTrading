import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
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
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<CategoryDetailPage />} />
        <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailPage />} />
        <Route path="/products/:categorySlug/:productSlug/:subProductSlug" element={<SubProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    </LanguageProvider>
  );
}

export default App;

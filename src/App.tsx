import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CategoriesPage from './pages/CategoriesPage';
import WishlistPage from './pages/WishlistPage';
import FAQPage from './pages/FAQPage';
import SellerDashboard from './pages/seller/SellerDashboard';
import ProductForm from './pages/seller/ProductForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/products/new" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
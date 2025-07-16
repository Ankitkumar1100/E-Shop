import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Sun, Moon, Menu, X, Search, User, Heart } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const { mode, toggleTheme } = useThemeStore();
  const { totalItems } = useCartStore();
  const { user, signOut } = useAuthStore();
  
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md dark:bg-gray-900' 
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">ModernShop</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button 
              aria-label="Search" 
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <Search size={20} />
            </button>
            
            <button 
              aria-label="Switch theme" 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {user ? (
              <Link 
                to="/account" 
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <User size={20} />
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
            )}
            
            <Link 
              to="/wishlist" 
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <Heart size={20} />
            </Link>
            
            <Link 
              to="/cart" 
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 relative"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-blue-600 bg-gray-50 dark:text-blue-400 dark:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {user && (
              <button
                onClick={() => signOut()}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
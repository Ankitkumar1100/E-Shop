import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github as GitHub, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">ModernShop</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              ModernShop offers premium products with exceptional customer service. We're committed to quality and satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <GitHub size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/seller/dashboard" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Sell on ModernShop
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer service */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Commerce St, Tech City, TC 12345, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">support@modernshop.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:justify-between">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ModernShop. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <img src="https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=50" alt="Payment methods" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`Added ${product.name} to cart`);
  };
  
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Badge */}
      {!product.inStock && (
        <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Out of Stock
        </div>
      )}
      {product.featured && (
        <div className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Featured
        </div>
      )}
      
      {/* Image container */}
      <Link to={`/products/${product.id}`} className="block relative h-60 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick action buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button 
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="p-2 bg-white dark:bg-gray-900 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
          <Link 
            to={`/products/${product.id}`}
            className="p-2 bg-white dark:bg-gray-900 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-200"
            aria-label="Quick view"
          >
            <Eye size={18} />
          </Link>
          <button 
            className="p-2 bg-white dark:bg-gray-900 rounded-full text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-200"
            aria-label="Add to wishlist"
          >
            <Heart size={18} />
          </button>
        </div>
      </Link>
      
      {/* Product info */}
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 truncate">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mt-1">
          {/* Stars rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({product.reviews})</span>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="p-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
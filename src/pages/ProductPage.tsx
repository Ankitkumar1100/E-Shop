import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, Check, Shield, ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react';
import toast from 'react-hot-toast';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import ProductGrid from '../components/product/ProductGrid';
import { useProduct, useProducts } from '../hooks/useProducts';
import { useCartStore } from '../store/cartStore';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, isLoading, error } = useProduct(id || '');
  const { products: relatedProducts } = useProducts(product?.category);
  const { addItem } = useCartStore();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96"></div>
              <div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (error || !product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {error || 'Product not found'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              We couldn't find the product you're looking for.
            </p>
            <Link to="/shop">
              <Button>
                Back to Shop
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  // Filter out current product from related products
  const filteredRelatedProducts = relatedProducts.filter(p => p.id !== product.id).slice(0, 4);
  
  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart`);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  };
  
  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="text-gray-500 dark:text-gray-400">/</li>
            <li>
              <Link to="/shop" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                Shop
              </Link>
            </li>
            <li className="text-gray-500 dark:text-gray-400">/</li>
            <li>
              <Link 
                to={`/categories/${product.category}`} 
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {product.category}
              </Link>
            </li>
            <li className="text-gray-500 dark:text-gray-400">/</li>
            <li className="text-gray-900 dark:text-white font-medium truncate">
              {product.name}
            </li>
          </ol>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div>
            <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 h-96">
              <img
                src={product.images[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`overflow-hidden rounded-md border-2 ${
                      activeImageIndex === index
                        ? 'border-blue-500 dark:border-blue-400'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="h-16 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                {product.reviews} reviews
              </span>
            </div>
            
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              {!product.inStock && (
                <span className="ml-3 inline-flex items-center rounded-full bg-red-100 dark:bg-red-900 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:text-red-200">
                  Out of stock
                </span>
              )}
              {product.inStock && (
                <span className="ml-3 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-200">
                  In stock
                </span>
              )}
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Description</h3>
              <div className="mt-2 text-base text-gray-700 dark:text-gray-300 space-y-4">
                <p>{product.description}</p>
              </div>
            </div>
            
            {product.inStock && (
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="px-3 py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-12 border-0 text-center text-gray-900 dark:text-white dark:bg-gray-800"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      +
                    </button>
                  </div>
                  
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    fullWidth
                  >
                    Add to Cart
                  </Button>
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <Button
                    variant="outline"
                    leftIcon={<Heart size={18} />}
                  >
                    Add to Wishlist
                  </Button>
                  <Button
                    variant="outline"
                    leftIcon={<Share2 size={18} />}
                  >
                    Share
                  </Button>
                </div>
              </div>
            )}
            
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Truck className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      Free shipping over $100
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Fast delivery within 3-5 business days
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      Easy returns
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      30-day return policy for a full refund
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Shield className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      2-year warranty
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      All our products come with a 2-year warranty
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {filteredRelatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              You may also like
            </h2>
            <ProductGrid products={filteredRelatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;
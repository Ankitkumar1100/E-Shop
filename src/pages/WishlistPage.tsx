import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';
import { mockProducts } from '../data/mockProducts';

const WishlistPage: React.FC = () => {
  const { addItem } = useCartStore();
  // Mock wishlist data - replace with actual wishlist store later
  const wishlistItems = mockProducts.slice(0, 3);

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast.success(`Added ${product.name} to cart`);
  };

  const handleRemoveFromWishlist = (productId: string) => {
    toast.success('Item removed from wishlist');
  };

  if (wishlistItems.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Heart size={64} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Start adding items to your wishlist by browsing our products
            </p>
            <Link to="/shop">
              <Button>Browse Products</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          My Wishlist
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full text-red-500 hover:text-red-600 shadow-sm"
                >
                  <Heart size={20} fill="currentColor" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${item.price.toFixed(2)}
                  </span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    leftIcon={<ShoppingCart size={18} />}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;
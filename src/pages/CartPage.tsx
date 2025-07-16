import React from 'react';
import Layout from '../components/layout/Layout';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { items, clearCart } = useCartStore();
  
  const handleCheckout = () => {
    // Navigate to checkout page
    window.location.href = '/checkout';
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center text-center">
            <ShoppingCart size={64} className="text-gray-400 dark:text-gray-600 mb-4" />
            <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
              Looks like you haven't added any products to your cart yet. Start shopping to add items to your cart.
            </p>
            <Link to="/shop">
              <Button>
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="border-t border-gray-200 dark:border-gray-700">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              <div className="flex justify-end mt-4">
                <Button
                  variant="outline"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 lg:col-span-5">
              <CartSummary onCheckout={handleCheckout} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
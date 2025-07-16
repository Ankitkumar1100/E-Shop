import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import Button from '../ui/Button';

interface CartSummaryProps {
  onCheckout?: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onCheckout }) => {
  const { items, totalPrice } = useCartStore();
  
  // Calculate subtotal
  const subtotal = totalPrice;
  
  // Calculate shipping (free if over $100)
  const shipping = subtotal > 100 ? 0 : 10;
  
  // Calculate tax (assume 7%)
  const tax = subtotal * 0.07;
  
  // Calculate total
  const total = subtotal + shipping + tax;
  
  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }
  };
  
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white">Order Summary</h2>
      
      {/* Summary details */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">Subtotal</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">${subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">Shipping</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">Tax (7%)</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">${tax.toFixed(2)}</p>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex items-center justify-between">
          <p className="text-base font-medium text-gray-900 dark:text-white">Total</p>
          <p className="text-base font-medium text-gray-900 dark:text-white">${total.toFixed(2)}</p>
        </div>
      </div>
      
      {/* Promo code input */}
      <div className="mt-6">
        <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Promo code
        </label>
        <div className="mt-1 flex space-x-2">
          <input
            type="text"
            id="promo-code"
            name="promo-code"
            className="block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 dark:bg-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
            placeholder="Enter code"
          />
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Apply
          </button>
        </div>
      </div>
      
      {/* Checkout button */}
      <div className="mt-6">
        <Button
          onClick={handleCheckout}
          disabled={items.length === 0}
          fullWidth
          size="lg"
        >
          Checkout
        </Button>
      </div>
      
      {/* Continue shopping link */}
      <div className="mt-4 text-center">
        <Link
          to="/shop"
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
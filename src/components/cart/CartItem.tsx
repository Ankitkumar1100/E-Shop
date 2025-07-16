import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore();
  const { product, quantity } = item;
  
  const handleRemove = () => {
    removeItem(product.id);
  };
  
  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };
  
  return (
    <div className="flex py-4 border-b border-gray-200 dark:border-gray-700">
      {/* Product image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      {/* Product details */}
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {product.category}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* Quantity controls */}
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
            <button 
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50"
            >
              <Minus size={16} />
            </button>
            <span className="px-2 text-gray-700 dark:text-gray-300">{quantity}</span>
            <button 
              onClick={handleIncrement}
              className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <Plus size={16} />
            </button>
          </div>
          
          {/* Remove button */}
          <button
            type="button"
            onClick={handleRemove}
            className="font-medium text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 flex items-center"
          >
            <X size={16} className="mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  error?: string | null;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 dark:bg-gray-700 h-60 w-full rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12 px-4 text-center">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Error loading products</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center py-12 px-4 text-center">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No products found</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your filters or search criteria.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
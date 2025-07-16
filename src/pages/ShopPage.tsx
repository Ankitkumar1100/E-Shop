import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sliders, X } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';
import { useProducts } from '../hooks/useProducts';

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'furniture', name: 'Furniture' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'home-decor', name: 'Home Decor' },
];

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
];

const ShopPage: React.FC = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('newest');
  const [filterOpen, setFilterOpen] = useState(false);
  
  const { products, isLoading, error } = useProducts(selectedCategory);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Filter and sort products
  useEffect(() => {
    if (products) {
      let result = [...products];
      
      // Apply price filter
      result = result.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      
      // Apply sorting
      if (sortBy === 'price-low') {
        result.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-high') {
        result.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'popular') {
        result.sort((a, b) => b.rating - a.rating);
      } else {
        // Default sort by newest (date)
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      }
      
      setFilteredProducts(result);
    }
  }, [products, priceRange, sortBy]);
  
  // Check if URL contains category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Shop</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Browse our collection of premium products
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="mr-4">
              <label htmlFor="sort" className="sr-only">Sort by</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <Button
              variant="outline"
              onClick={() => setFilterOpen(true)}
              className="md:hidden"
              leftIcon={<Sliders size={18} />}
            >
              Filters
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        id={`category-${category.id}`}
                        name="category"
                        type="radio"
                        checked={
                          category.id === 'all' 
                            ? selectedCategory === undefined 
                            : selectedCategory === category.id
                        }
                        onChange={() => setSelectedCategory(category.id === 'all' ? undefined : category.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="ml-3 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="price-min" className="block text-sm text-gray-700 dark:text-gray-300">
                      Min Price
                    </label>
                    <input
                      type="number"
                      id="price-min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="price-max" className="block text-sm text-gray-700 dark:text-gray-300">
                      Max Price
                    </label>
                    <input
                      type="number"
                      id="price-max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
              </div>
              
              <Button onClick={() => setPriceRange([0, 1000])} variant="outline" fullWidth>
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 overflow-hidden">
              <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setFilterOpen(false)}></div>
              <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-gray-800 shadow-xl">
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h2>
                  <button
                    type="button"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    onClick={() => setFilterOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-4 overflow-y-auto">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center">
                          <input
                            id={`mobile-category-${category.id}`}
                            name="mobile-category"
                            type="radio"
                            checked={
                              category.id === 'all' 
                                ? selectedCategory === undefined 
                                : selectedCategory === category.id
                            }
                            onChange={() => setSelectedCategory(category.id === 'all' ? undefined : category.id)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
                          />
                          <label
                            htmlFor={`mobile-category-${category.id}`}
                            className="ml-3 text-sm text-gray-700 dark:text-gray-300"
                          >
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Price Range</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="mobile-price-min" className="block text-sm text-gray-700 dark:text-gray-300">
                          Min Price
                        </label>
                        <input
                          type="number"
                          id="mobile-price-min"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="mobile-price-max" className="block text-sm text-gray-700 dark:text-gray-300">
                          Max Price
                        </label>
                        <input
                          type="number"
                          id="mobile-price-max"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setPriceRange([0, 1000]);
                        setSelectedCategory(undefined);
                      }}
                    >
                      Reset
                    </Button>
                    <Button onClick={() => setFilterOpen(false)}>Apply</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} isLoading={isLoading} error={error} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
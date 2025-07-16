import React from 'react';
import { ArrowRight, Package, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';
import { useProducts } from '../hooks/useProducts';

const HomePage: React.FC = () => {
  const { products: featuredProducts, isLoading, error } = useProducts(undefined, true);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Elevate Your Lifestyle with Modern Designs
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                Discover premium products for your home and lifestyle. Quality craftsmanship with elegant design.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button size="lg">
                    Shop Now
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button variant="outline" size="lg">
                    Browse Categories
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern furniture"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Shop by Category</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find exactly what you need across our diverse collection of products
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Furniture"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Furniture</h3>
                <p className="text-sm text-gray-200 mt-1">Modern & comfortable designs</p>
                <Link to="/categories/furniture" className="mt-4 inline-flex items-center text-white hover:text-blue-300 transition-colors">
                  Shop Now <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="https://images.pexels.com/photos/4273440/pexels-photo-4273440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Electronics"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Electronics</h3>
                <p className="text-sm text-gray-200 mt-1">Cutting-edge technology</p>
                <Link to="/categories/electronics" className="mt-4 inline-flex items-center text-white hover:text-blue-300 transition-colors">
                  Shop Now <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Accessories"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Accessories</h3>
                <p className="text-sm text-gray-200 mt-1">Complete your style</p>
                <Link to="/categories/accessories" className="mt-4 inline-flex items-center text-white hover:text-blue-300 transition-colors">
                  Shop Now <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/categories">
              <Button variant="outline">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our handpicked selection of premium products with exceptional quality and design
            </p>
          </div>
          
          <div className="mt-12">
            <ProductGrid products={featuredProducts} isLoading={isLoading} error={error} />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/shop">
              <Button>
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Package className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Premium Quality</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Handcrafted with the finest materials for exceptional durability and style.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Truck className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fast Shipping</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Free shipping on orders over $100 with quick delivery to your doorstep.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Secure Payments</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Your transactions are protected with state-of-the-art encryption technology.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Our customer service team is always available to assist you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates on new products, special offers, and exclusive discounts.
            </p>
          </div>
          
          <div className="mt-10 max-w-xl mx-auto">
            <form className="sm:flex justify-center">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-white px-5 py-3 font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 rounded-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-blue-100 text-center">
              We care about your data. Read our{' '}
              <Link to="/privacy" className="font-medium text-white underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
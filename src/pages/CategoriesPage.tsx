import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'furniture',
    name: 'Furniture',
    description: 'Modern & comfortable designs',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Cutting-edge technology',
    image: 'https://images.pexels.com/photos/4273440/pexels-photo-4273440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Complete your style',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Fashion for everyone',
    image: 'https://images.pexels.com/photos/4971983/pexels-photo-4971983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    description: 'Beautiful home accessories',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    description: 'Cook with style',
    image: 'https://images.pexels.com/photos/6996096/pexels-photo-6996096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const CategoriesPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-sm text-gray-200 mt-1">{category.description}</p>
                  <div className="mt-4 inline-flex items-center text-white hover:text-blue-300 transition-colors">
                    Shop Now <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
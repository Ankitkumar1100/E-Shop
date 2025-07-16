import React from 'react';
import Layout from '../components/layout/Layout';
import { Building2, Users, Globe, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About ModernShop
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're building the future of e-commerce, connecting buyers with talented sellers 
            from around the world.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              To create a vibrant marketplace where sellers can thrive and buyers can discover 
              unique, high-quality products. We believe in empowering entrepreneurs and 
              providing exceptional shopping experiences.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Quality and authenticity in every transaction</li>
              <li>• Supporting independent sellers and artisans</li>
              <li>• Sustainable and responsible commerce</li>
              <li>• Innovation in online shopping experience</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-300">Active Sellers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100K+</div>
            <div className="text-gray-600 dark:text-gray-300">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50K+</div>
            <div className="text-gray-600 dark:text-gray-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
            <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Established Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A trusted marketplace with years of experience in e-commerce
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Seller Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Dedicated support team to help sellers grow their business
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Global Reach
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with customers from around the world
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Quality Assurance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              High standards for product quality and customer service
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
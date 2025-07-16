import React from 'react';
import Layout from '../../components/layout/Layout';
import { Package, DollarSign, Users, TrendingUp } from 'lucide-react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const SellerDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Seller Dashboard</h1>
          <Link to="/seller/products/new">
            <Button>Add New Product</Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Products</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">24</h3>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">$2,415</h3>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Customers</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">156</h3>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Growth</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">+12.5%</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-8">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    #12345
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    Modern Desk Lamp
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    $89.99
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      Completed
                    </span>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellerDashboard;
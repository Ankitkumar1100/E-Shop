import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Upload } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    images: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically upload the product to Supabase
    toast.success('Product added successfully!');
    navigate('/seller/dashboard');
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              <Input
                label="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                fullWidth
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 dark:bg-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <Input
                label="Price"
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                fullWidth
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="home-decor">Home Decor</option>
                  <option value="accessories">Accessories</option>
                  <option value="furniture">Furniture</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Product Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload files</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate('/seller/dashboard')}
            >
              Cancel
            </Button>
            <Button type="submit">
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ProductForm;
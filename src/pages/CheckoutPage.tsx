import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';

interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

const CheckoutPage: React.FC = () => {
  const { items, totalPrice, clearCart } = useCartStore();
  const { user } = useAuthStore();
  
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  
  const updateFormData = (key: keyof CheckoutFormData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  
  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };
  
  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate random order ID
    const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
    setOrderId(randomId);
    
    // Simulate order processing
    setTimeout(() => {
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };
  
  if (items.length === 0 && !orderComplete) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Add some items to your cart before proceeding to checkout.
            </p>
            <Link to="/shop">
              <Button>
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (orderComplete) {
    return (
      <Layout>
        <div className="max-w-lg mx-auto px-4 py-16 text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-4">
              <Check className="h-12 w-12 text-green-600 dark:text-green-300" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Your order #{orderId} has been successfully placed. We've sent a confirmation email to {formData.email}.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Order Details
            </h3>
            <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Shipping Address:
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {formData.address}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {formData.city}, {formData.postalCode}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {formData.country}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Payment Method:
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Credit Card ending in {formData.cardNumber.slice(-4)}
              </p>
            </div>
          </div>
          <div className="flex space-x-4 justify-center">
            <Link to="/">
              <Button>
                Return to Home
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="outline">
                View My Orders
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            {/* Steps */}
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-600'}`}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    step >= 1 
                      ? 'bg-blue-600 dark:bg-blue-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}>
                    1
                  </div>
                  <span className="mt-2 text-sm">Shipping</span>
                </div>
                <div className={`flex-1 border-t-2 mx-4 ${step >= 2 ? 'border-blue-600 dark:border-blue-400' : 'border-gray-200 dark:border-gray-700'}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-600'}`}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    step >= 2 
                      ? 'bg-blue-600 dark:bg-blue-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}>
                    2
                  </div>
                  <span className="mt-2 text-sm">Payment</span>
                </div>
                <div className={`flex-1 border-t-2 mx-4 ${step >= 3 ? 'border-blue-600 dark:border-blue-400' : 'border-gray-200 dark:border-gray-700'}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-600'}`}>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    step >= 3 
                      ? 'bg-blue-600 dark:bg-blue-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}>
                    3
                  </div>
                  <span className="mt-2 text-sm">Confirmation</span>
                </div>
              </div>
            </div>
            
            {step === 1 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Shipping Information
                </h2>
                
                <form onSubmit={handleSubmitShipping} className="space-y-6">
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    required
                    fullWidth
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      required
                      fullWidth
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      required
                      fullWidth
                    />
                  </div>
                  
                  <Input
                    label="Address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    required
                    fullWidth
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="City"
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateFormData('city', e.target.value)}
                      required
                      fullWidth
                    />
                    <Input
                      label="Postal Code"
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => updateFormData('postalCode', e.target.value)}
                      required
                      fullWidth
                    />
                  </div>
                  
                  <Input
                    label="Country"
                    type="text"
                    value={formData.country}
                    onChange={(e) => updateFormData('country', e.target.value)}
                    required
                    fullWidth
                  />
                  
                  <div className="flex justify-end">
                    <Button type="submit">
                      Continue to Payment
                    </Button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 2 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Payment Information
                </h2>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Payment Method
                  </h3>
                  <div className="flex items-center">
                    <input
                      id="card"
                      name="payment-method"
                      type="radio"
                      checked={true}
                      readOnly
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600"
                    />
                    <label htmlFor="card" className="ml-3 flex items-center">
                      <CreditCard size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">Credit Card</span>
                    </label>
                  </div>
                </div>
                
                <form onSubmit={handleSubmitPayment} className="space-y-6">
                  <Input
                    label="Cardholder Name"
                    type="text"
                    value={formData.cardName}
                    onChange={(e) => updateFormData('cardName', e.target.value)}
                    required
                    fullWidth
                  />
                  
                  <Input
                    label="Card Number"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={formData.cardNumber}
                    onChange={(e) => updateFormData('cardNumber', e.target.value)}
                    required
                    fullWidth
                  />
                  
                  <div className="grid grid-cols-2 gap-6">
                    <Input
                      label="Expiry Date"
                      type="text"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={(e) => updateFormData('cardExpiry', e.target.value)}
                      required
                      fullWidth
                    />
                    <Input
                      label="CVC"
                      type="text"
                      placeholder="123"
                      value={formData.cardCvc}
                      onChange={(e) => updateFormData('cardCvc', e.target.value)}
                      required
                      fullWidth
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button type="submit">
                      Place Order
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
          
          <div className="mt-8 lg:mt-0 lg:col-span-5">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>
              
              <div className="max-h-64 overflow-y-auto mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.product.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Subtotal</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Shipping</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {totalPrice > 100 ? 'Free' : '$10.00'}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tax (7%)</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    ${(totalPrice * 0.07).toFixed(2)}
                  </p>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex items-center justify-between">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Total</p>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    ${(totalPrice + (totalPrice > 100 ? 0 : 10) + (totalPrice * 0.07)).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
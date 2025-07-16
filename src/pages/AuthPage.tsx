import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuthStore } from '../store/authStore';

const AuthPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { signIn, signUp, isLoading } = useAuthStore();
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!firstName) {
        newErrors.firstName = 'First name is required';
      }
      
      if (!lastName) {
        newErrors.lastName = 'Last name is required';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          setErrors({ general: error.message });
          return;
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          setErrors({ general: error.message });
          return;
        }
      }
      
      // Redirect to home or previous page
      navigate('/');
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred' });
    }
  };
  
  return (
    <Layout>
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {isLogin 
                ? 'Welcome back! Please sign in to continue.' 
                : 'Create an account to start shopping with us.'
              }
            </p>
          </div>
          
          {errors.general && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md">
              <p className="text-sm text-red-600 dark:text-red-300">{errors.general}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  leftIcon={<User size={18} />}
                  error={errors.firstName}
                  fullWidth
                />
                <Input
                  label="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  leftIcon={<User size={18} />}
                  error={errors.lastName}
                  fullWidth
                />
              </div>
            )}
            
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail size={18} />}
              error={errors.email}
              fullWidth
            />
            
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock size={18} />}
              error={errors.password}
              fullWidth
            />
            
            <Button
              type="submit"
              isLoading={isLoading}
              fullWidth
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {isLogin 
                ? "Don't have an account?" 
                : "Already have an account?"
              }{' '}
              <Link
                to={isLogin ? '/register' : '/login'}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {isLogin ? 'Create one' : 'Sign in'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthPage;
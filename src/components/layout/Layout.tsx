import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './Header';
import Footer from './Footer';
import { useThemeStore } from '../../store/themeStore';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { mode } = useThemeStore();
  
  // Apply theme class to html element
  React.useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(mode);
  }, [mode]);
  
  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200`}>
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'dark:bg-gray-800 dark:text-white',
          duration: 3000,
        }}
      />
    </div>
  );
};

export default Layout;
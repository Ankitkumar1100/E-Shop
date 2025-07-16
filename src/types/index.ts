export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

export type ThemeMode = 'light' | 'dark';
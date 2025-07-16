import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Minimalist Desk Lamp',
    description: 'A sleek, adjustable desk lamp with warm LED lighting perfect for your home office or reading nook. Features touch-sensitive controls and multiple brightness settings.',
    price: 79.99,
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5740009/pexels-photo-5740009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4050390/pexels-photo-4050390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'home-decor',
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 124,
    createdAt: '2023-06-15T12:00:00Z'
  },
  {
    id: '2',
    name: 'Premium Wireless Headphones',
    description: 'Immerse yourself in rich, crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cups.',
    price: 249.99,
    images: [
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'electronics',
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 342,
    createdAt: '2023-05-20T09:30:00Z'
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description: 'Work in comfort with our ergonomic office chair, designed to support proper posture and reduce strain during long working hours. Adjustable height, tilt, and lumbar support.',
    price: 299.99,
    images: [
      'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'furniture',
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 208,
    createdAt: '2023-07-08T11:15:00Z'
  },
  {
    id: '4',
    name: 'Smart Fitness Watch',
    description: 'Track your health and fitness goals with our advanced smart watch. Features heart rate monitoring, sleep tracking, GPS, and 50+ workout modes. Water-resistant up to 50m.',
    price: 199.99,
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'electronics',
    featured: true,
    inStock: true,
    rating: 4.7,
    reviews: 176,
    createdAt: '2023-04-12T10:45:00Z'
  },
  {
    id: '5',
    name: 'Artisan Coffee Table',
    description: 'Elevate your living space with this handcrafted coffee table. Made from sustainable solid oak with a unique mid-century modern design that combines style and functionality.',
    price: 449.99,
    images: [
      'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'furniture',
    featured: false,
    inStock: true,
    rating: 4.9,
    reviews: 82,
    createdAt: '2023-08-03T14:20:00Z'
  },
  {
    id: '6',
    name: 'Premium Leather Wallet',
    description: 'Crafted from full-grain Italian leather, this minimalist wallet offers sleek organization for your essentials with RFID-blocking technology for added security.',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/2252338/pexels-photo-2252338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'accessories',
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 143,
    createdAt: '2023-03-25T16:30:00Z'
  },
  {
    id: '7',
    name: 'Designer Table Lamp',
    description: 'Add sophistication to any room with this designer table lamp. Features a solid brass base with a handcrafted linen shade that casts a warm, inviting glow.',
    price: 159.99,
    images: [
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7217250/pexels-photo-7217250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'home-decor',
    featured: true,
    inStock: true,
    rating: 4.7,
    reviews: 91,
    createdAt: '2023-07-30T13:10:00Z'
  },
  {
    id: '8',
    name: 'Premium Yoga Mat',
    description: 'Enhance your yoga practice with our eco-friendly, non-slip yoga mat. The perfect combination of cushioning and stability with alignment guides for proper positioning.',
    price: 78.99,
    images: [
      'https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'accessories',
    featured: false,
    inStock: false,
    rating: 4.6,
    reviews: 156,
    createdAt: '2023-06-22T09:15:00Z'
  },
  {
    id: '9',
    name: 'Smart Home Hub',
    description: 'Control your entire smart home ecosystem with this intuitive hub. Compatible with over 10,000 devices across all major smart home platforms.',
    price: 149.99,
    images: [
      'https://images.pexels.com/photos/4219883/pexels-photo-4219883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4351600/pexels-photo-4351600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'electronics',
    featured: true,
    inStock: true,
    rating: 4.4,
    reviews: 218,
    createdAt: '2023-05-17T11:45:00Z'
  },
  {
    id: '10',
    name: 'Wool Blend Cardigan',
    description: 'Stay cozy and stylish with this premium wool-blend cardigan. Features a contemporary fit with subtle details that make it perfect for layering in any season.',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/4971983/pexels-photo-4971983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/9833503/pexels-photo-9833503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'clothing',
    featured: false,
    inStock: true,
    rating: 4.8,
    reviews: 75,
    createdAt: '2023-08-18T15:30:00Z'
  },
  {
    id: '11',
    name: 'Modern Storage Cabinet',
    description: 'This versatile storage cabinet combines functionality with modern aesthetics. Perfect for organizing items while enhancing your home\'s decor.',
    price: 379.99,
    images: [
      'https://images.pexels.com/photos/7195771/pexels-photo-7195771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'furniture',
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 63,
    createdAt: '2023-04-05T10:20:00Z'
  },
  {
    id: '12',
    name: 'Portable Bluetooth Speaker',
    description: 'Experience premium sound anywhere with our waterproof, portable Bluetooth speaker. Delivers rich, immersive audio with up to 24 hours of battery life.',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'electronics',
    featured: true,
    inStock: true,
    rating: 4.7,
    reviews: 189,
    createdAt: '2023-07-12T08:15:00Z'
  }
];

// Hook to replace Supabase during development
export const useMockProducts = () => {
  return { products: mockProducts, isLoading: false, error: null };
};

export const useMockProduct = (id: string) => {
  const product = mockProducts.find(p => p.id === id) || null;
  return { product, isLoading: false, error: null };
};
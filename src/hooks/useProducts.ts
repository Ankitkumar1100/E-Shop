import { mockProducts, useMockProduct } from '../data/mockProducts';
// This hook uses mock data to simulate fetching from Supabase
// In production, you would replace this with actual Supabase queries

export function useProducts(category?: string, featured?: boolean) {
  let filteredProducts = [...mockProducts];
  
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }
  
  if (featured !== undefined) {
    filteredProducts = filteredProducts.filter(product => product.featured === featured);
  }
  
  return {
    products: filteredProducts,
    isLoading: false,
    error: null
  };
}

export function useProduct(id: string) {
  return useMockProduct(id);
}
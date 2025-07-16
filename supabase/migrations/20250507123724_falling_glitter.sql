/*
  # Initial Database Schema

  1. New Tables
    - `products` - Stores product information
    - `categories` - Stores category information
    - `orders` - Stores order information
    - `order_items` - Stores items within orders
    - `profiles` - Stores user profile information
    - `wishlists` - Stores user wishlists

  2. Security
    - Enable RLS on all tables
    - Set up policies for authenticated and anonymous users
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL,
  images text[] NOT NULL,
  category text NOT NULL,
  featured boolean DEFAULT false,
  in_stock boolean DEFAULT true,
  rating numeric DEFAULT 0,
  reviews integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text,
  image text
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  total numeric NOT NULL,
  shipping_address jsonb NOT NULL,
  payment_intent_id text,
  created_at timestamptz DEFAULT now()
);

-- Create order items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders NOT NULL,
  product_id uuid REFERENCES products NOT NULL,
  quantity integer NOT NULL,
  price numeric NOT NULL
);

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  first_name text,
  last_name text,
  avatar text,
  email text,
  phone text,
  updated_at timestamptz DEFAULT now()
);

-- Create wishlists table
CREATE TABLE IF NOT EXISTS wishlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  product_id uuid REFERENCES products NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE wishlists ENABLE ROW LEVEL SECURITY;

-- Products policies
CREATE POLICY "Allow anonymous read access to products" 
  ON products FOR SELECT 
  TO anon 
  USING (true);

CREATE POLICY "Allow authenticated read access to products" 
  ON products FOR SELECT 
  TO authenticated 
  USING (true);

-- Categories policies
CREATE POLICY "Allow anonymous read access to categories" 
  ON categories FOR SELECT 
  TO anon 
  USING (true);

CREATE POLICY "Allow authenticated read access to categories" 
  ON categories FOR SELECT 
  TO authenticated 
  USING (true);

-- Orders policies
CREATE POLICY "Allow users to read their own orders" 
  ON orders FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Allow users to insert their own orders" 
  ON orders FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

-- Order items policies
CREATE POLICY "Allow users to read their own order items" 
  ON order_items FOR SELECT 
  TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM orders 
      WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Allow users to insert their own order items" 
  ON order_items FOR INSERT 
  TO authenticated 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders 
      WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid()
    )
  );

-- Profiles policies
CREATE POLICY "Allow users to read their own profile" 
  ON profiles FOR SELECT 
  TO authenticated 
  USING (auth.uid() = id);

CREATE POLICY "Allow users to update their own profile" 
  ON profiles FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = id);

-- Wishlists policies
CREATE POLICY "Allow users to read their own wishlists" 
  ON wishlists FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Allow users to insert to their own wishlists" 
  ON wishlists FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow users to delete from their own wishlists" 
  ON wishlists FOR DELETE 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.create_profile_for_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.create_profile_for_user();
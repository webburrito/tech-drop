import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'smartphones',
    description: 'The most advanced iPhone ever with titanium design and A17 Pro chip.',
    features: ['A17 Pro Chip', '48MP Camera System', 'Titanium Design', '5G Ready'],
    inStock: true,
    rating: 4.8,
    reviews: 1247
  },
  {
    id: '2',
    name: 'MacBook Pro 16"',
    price: 2499,
    originalPrice: 2699,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'laptops',
    description: 'Supercharged by M3 Pro and M3 Max chips for extreme performance.',
    features: ['M3 Pro Chip', '16" Liquid Retina XDR', '22-hour battery', 'Thunderbolt 4'],
    inStock: true,
    rating: 4.9,
    reviews: 892
  },
  {
    id: '3',
    name: 'AirPods Pro (3rd Gen)',
    price: 249,
    originalPrice: 279,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'audio',
    description: 'Active Noise Cancellation with superior sound quality.',
    features: ['Active Noise Cancellation', 'Spatial Audio', 'MagSafe Charging', 'Sweat Resistant'],
    inStock: true,
    rating: 4.7,
    reviews: 2156
  },
  {
    id: '4',
    name: 'Samsung Galaxy Watch 6',
    price: 329,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'wearables',
    description: 'Advanced health monitoring with sleek design.',
    features: ['Health Tracking', 'GPS Built-in', '40mm Display', 'Water Resistant'],
    inStock: true,
    rating: 4.6,
    reviews: 743
  },
  {
    id: '5',
    name: 'PlayStation 5 DualSense',
    price: 69,
    originalPrice: 79,
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'gaming',
    description: 'Next-gen gaming controller with haptic feedback.',
    features: ['Haptic Feedback', 'Adaptive Triggers', 'Built-in Mic', 'USB-C Charging'],
    inStock: true,
    rating: 4.8,
    reviews: 1532
  },
  {
    id: '6',
    name: 'iPad Pro 12.9"',
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'tablets',
    description: 'The ultimate iPad experience with M2 chip.',
    features: ['M2 Chip', '12.9" Liquid Retina XDR', 'Apple Pencil Support', 'Thunderbolt'],
    inStock: true,
    rating: 4.7,
    reviews: 965
  },
  {
    id: '7',
    name: 'Sony WH-1000XM5',
    price: 399,
    originalPrice: 449,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'audio',
    description: 'Industry-leading noise canceling headphones.',
    features: ['Noise Canceling', '30-hour battery', 'Quick Charge', 'Multipoint Connection'],
    inStock: true,
    rating: 4.9,
    reviews: 1876
  },
  {
    id: '8',
    name: 'Tesla Model S Key Fob',
    price: 175,
    image: 'https://images.pexels.com/photos/163125/tesla-auto-model-s-electric-car-163125.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'automotive',
    description: 'Premium key fob for Tesla Model S with advanced features.',
    features: ['Remote Start', 'Trunk Access', 'Premium Build', 'Long Range'],
    inStock: true,
    rating: 4.5,
    reviews: 234
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'smartphones', name: 'Smartphones', count: products.filter(p => p.category === 'smartphones').length },
  { id: 'laptops', name: 'Laptops', count: products.filter(p => p.category === 'laptops').length },
  { id: 'audio', name: 'Audio', count: products.filter(p => p.category === 'audio').length },
  { id: 'wearables', name: 'Wearables', count: products.filter(p => p.category === 'wearables').length },
  { id: 'gaming', name: 'Gaming', count: products.filter(p => p.category === 'gaming').length },
  { id: 'tablets', name: 'Tablets', count: products.filter(p => p.category === 'tablets').length },
  { id: 'automotive', name: 'Automotive', count: products.filter(p => p.category === 'automotive').length }
];
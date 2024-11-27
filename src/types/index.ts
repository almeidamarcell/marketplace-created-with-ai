export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  images?: string[];
  seller: {
    id: string;
    name: string;
    rating: number;
  };
  createdAt: string;
  status: 'active' | 'pending' | 'sold';
  metrics: {
    ttmRevenue: number;
    ttmProfit: number;
    askingPrice: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  favorites: string[];
}

export interface Filter {
  category?: string;
  priceMin?: number;
  priceMax?: number;
  status?: string;
  location?: {
    latitude: number;
    longitude: number;
    radius: number;
  };
}
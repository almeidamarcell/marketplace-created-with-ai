import { Listing, Filter } from '../../types';
import { mockListings } from '../../data/mockListings';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const listingsApi = {
  async getListings(filters: Filter = {}): Promise<Listing[]> {
    await delay(500); // Simulate network request

    return mockListings.filter(listing => {
      if (filters.category && listing.category !== filters.category) return false;
      if (filters.priceMin && listing.price < filters.priceMin) return false;
      if (filters.priceMax && listing.price > filters.priceMax) return false;
      if (filters.status && listing.status !== filters.status) return false;
      if (filters.location) {
        // Basic distance calculation (not accurate for real use)
        const distance = Math.sqrt(
          Math.pow(listing.location.latitude - filters.location.latitude, 2) +
          Math.pow(listing.location.longitude - filters.location.longitude, 2)
        );
        if (distance > filters.location.radius) return false;
      }
      return true;
    });
  },

  async getListing(id: string): Promise<Listing | null> {
    await delay(300);
    return mockListings.find(listing => listing.id === id) || null;
  },

  async createListing(listing: Omit<Listing, 'id' | 'createdAt'>): Promise<Listing> {
    await delay(800);
    const newListing: Listing = {
      ...listing,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    mockListings.push(newListing);
    return newListing;
  },

  async updateListing(id: string, updates: Partial<Listing>): Promise<Listing | null> {
    await delay(500);
    const index = mockListings.findIndex(listing => listing.id === id);
    if (index === -1) return null;
    
    mockListings[index] = { ...mockListings[index], ...updates };
    return mockListings[index];
  },

  async deleteListing(id: string): Promise<boolean> {
    await delay(500);
    const index = mockListings.findIndex(listing => listing.id === id);
    if (index === -1) return false;
    
    mockListings.splice(index, 1);
    return true;
  }
};
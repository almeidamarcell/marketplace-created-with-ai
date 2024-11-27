import { useState, useEffect } from 'react';
import { listingsApi } from '../services/api/listings';
import { useStore } from '../store/useStore';
import type { Listing } from '../types';

export function useListings() {
  const { filters } = useStore();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const data = await listingsApi.getListings(filters);
        setListings(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch listings');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [filters]);

  return { listings, loading, error };
}
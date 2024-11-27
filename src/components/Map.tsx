import { useState } from 'react';
import type { Listing } from '../types';
import { useListings } from '../hooks/useListings';
import MockMap from './map/MockMap';

export default function MapView() {
  const { listings, loading, error } = useListings();
  const [viewport, setViewport] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 11
  });

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-gray-500">Loading listings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <MockMap
      listings={listings}
      onViewportChange={setViewport}
    />
  );
}
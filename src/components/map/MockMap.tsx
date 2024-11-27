import React, { useState } from 'react';
import type { Listing } from '../../types';
import ListingPreview from '../ListingPreview';
import { MapPin } from 'lucide-react';

interface ViewState {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface Props {
  listings: Listing[];
  onViewportChange?: (viewport: ViewState) => void;
}

export default function MockMap({ listings }: Props) {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  return (
    <div className="relative w-full h-full bg-gray-100">
      {/* Mock map background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-50" />

      {/* Mock markers */}
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
          style={{
            left: `${((listing.location.longitude + 74.006) * 1000) % 100}%`,
            top: `${((listing.location.latitude - 40.7128) * 1000) % 100}%`,
          }}
          onClick={() => setSelectedListing(listing)}
        >
          <MapPin
            size={24}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          />
        </div>
      ))}

      {/* Mock popup */}
      {selectedListing && (
        <div
          className="absolute bg-white rounded-lg shadow-lg w-72 z-10"
          style={{
            left: `${((selectedListing.location.longitude + 74.006) * 1000) % 100}%`,
            top: `${((selectedListing.location.latitude - 40.7128) * 1000) % 100}%`,
            transform: 'translate(-50%, -120%)',
          }}
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => setSelectedListing(null)}
          >
            ×
          </button>
          <ListingPreview listing={selectedListing} />
        </div>
      )}
    </div>
  );
}
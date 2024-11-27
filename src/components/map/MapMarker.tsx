import React from 'react';
import { Marker } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import type { Listing } from '../../types';

interface Props {
  listing: Listing;
  onClick: () => void;
}

export default function MapMarker({ listing, onClick }: Props) {
  return (
    <Marker
      latitude={listing.location.latitude}
      longitude={listing.location.longitude}
    >
      <button
        className="text-blue-600 hover:text-blue-800 transition-colors"
        onClick={onClick}
      >
        <MapPin size={24} />
      </button>
    </Marker>
  );
}
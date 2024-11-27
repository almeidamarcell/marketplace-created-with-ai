import { Heart, MapPin, Star } from 'lucide-react';
import type { Listing } from '../types';
import { useStore } from '../store/useStore';

interface Props {
  listing: Listing;
}

export default function ListingPreview({ listing }: Props) {
  const { user, addFavorite, removeFavorite } = useStore();
  const isFavorite = user?.favorites.includes(listing.id);

  return (
    <div className="overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() =>
            isFavorite ? removeFavorite(listing.id) : addFavorite(listing.id)
          }
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-600'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-gray-900">{listing.title}</h3>
            <p className="text-sm text-gray-500">{listing.category}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{listing.seller.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
          <MapPin size={14} />
          <span>{listing.location.address}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">
            ${listing.price.toLocaleString()}
          </p>
          <span className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-800 capitalize">
            {listing.status}
          </span>
        </div>

        {!user && (
          <p className="mt-3 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
            Sign in to contact seller →
          </p>
        )}
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Star, Link as LinkIcon } from 'lucide-react';
import type { Listing } from '../../types';
import { useStore } from '../../store/useStore';

interface Props {
  listing: Listing;
}

export default function ListingCard({ listing }: Props) {
  const { user, addFavorite, removeFavorite } = useStore();
  const isFavorite = user?.favorites.includes(listing.id);

  return (
    <Link to={`/listing/${listing.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
        {/* Image */}
        {listing.images?.[0] ? (
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-t-lg flex items-center justify-center">
            <LinkIcon size={32} className="text-gray-400 dark:text-gray-500" />
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-1">{listing.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{listing.description}</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                isFavorite ? removeFavorite(listing.id) : addFavorite(listing.id);
              }}
              className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <Heart
                size={20}
                className={isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-400 dark:text-gray-500'}
              />
            </button>
          </div>

          <div className="mt-4 space-y-3">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">TTM Revenue</p>
                <p className="font-semibold text-gray-900 dark:text-white">${listing.metrics.ttmRevenue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">TTM Profit</p>
                <p className="font-semibold text-gray-900 dark:text-white">${listing.metrics.ttmProfit.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Asking Price</p>
                <p className="font-semibold text-gray-900 dark:text-white">${listing.metrics.askingPrice.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize
                  ${listing.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' : 
                    listing.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100' : 
                    'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'}`}>
                  {listing.status}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{listing.seller.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin size={14} className="mr-1" />
                {listing.location.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
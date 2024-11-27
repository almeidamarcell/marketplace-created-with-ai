import React, { useState } from 'react';
import { MessageSquare, Heart, Lock } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useAuth } from '../auth/AuthContext';
import AuthModal from '../auth/AuthModal';

interface Props {
  listingId: string;
}

export default function ListingActions({ listingId }: Props) {
  const { user, addFavorite, removeFavorite } = useStore();
  const { isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const isFavorite = user?.favorites.includes(listingId);

  if (!isAuthenticated) {
    return (
      <>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Lock size={20} />
            <div>
              <p className="font-medium text-gray-900">Sign up to contact seller</p>
              <p className="text-sm">
                <button 
                  onClick={() => setShowAuthModal(true)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Create an account
                </button>
                {' '}to send messages and save listings
              </p>
            </div>
          </div>
        </div>

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      </>
    );
  }

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={() => isFavorite ? removeFavorite(listingId) : addFavorite(listingId)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-600'}
          />
          <span>{isFavorite ? 'Saved' : 'Save'}</span>
        </button>

        <button
          onClick={() => console.log('Message seller')}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <MessageSquare size={20} />
          <span>Contact seller</span>
        </button>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
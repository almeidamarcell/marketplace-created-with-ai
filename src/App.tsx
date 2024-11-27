import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import Header from './components/layout/Header';
import ListingsGrid from './components/listings/ListingsGrid';
import ListingDetail from './pages/ListingDetail';
import Map from './components/Map';
import CategoryNav from './components/navigation/CategoryNav';
import { MapIcon } from 'lucide-react';
import { useStore } from './store/useStore';

function App() {
  const [showMap, setShowMap] = useState(false);
  const { darkMode } = useStore();

  return (
    <Router>
      <AuthProvider>
        <div className={`h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
          <Header />
          <CategoryNav />
          <Routes>
            <Route
              path="/"
              element={
                <main className="flex-1 relative bg-gray-50 dark:bg-gray-900">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-end mb-4">
                      <button
                        onClick={() => setShowMap(!showMap)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                      >
                        <MapIcon size={20} />
                        <span>{showMap ? 'Hide map' : 'Show map'}</span>
                      </button>
                    </div>

                    <div className={`grid ${showMap ? 'grid-cols-2 gap-6' : 'grid-cols-1'}`}>
                      <ListingsGrid className={showMap ? 'pr-4' : ''} />
                      {showMap && (
                        <div className="h-[calc(100vh-220px)] sticky top-4">
                          <Map />
                        </div>
                      )}
                    </div>
                  </div>
                </main>
              }
            />
            <Route path="/listing/:id" element={<ListingDetail />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
import { useState } from 'react';
import { Filter as FilterIcon, Search, X } from 'lucide-react';
import { useStore } from '../store/useStore';

const categories = ['Retail', 'Restaurant', 'Office', 'Industrial', 'Other'];
const priceRanges = [
  { label: 'Under $250k', min: 0, max: 250000 },
  { label: '$250k - $500k', min: 250000, max: 500000 },
  { label: '$500k - $1M', min: 500000, max: 1000000 },
  { label: 'Over $1M', min: 1000000, max: null },
];

export default function Filters() {
  const { filters, setFilters } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const clearFilters = () => {
    setFilters({});
    setIsOpen(false);
  };

  return (
    <div className="absolute top-4 left-4 z-10">
      <div className="flex gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow"
        >
          <FilterIcon size={18} />
          <span className="font-medium">Filters</span>
        </button>

        {Object.keys(filters).length > 0 && (
          <button
            onClick={clearFilters}
            className="bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-rose-500 hover:shadow-lg transition-shadow"
          >
            <X size={18} />
            <span className="font-medium">Clear</span>
          </button>
        )}
      </div>

      {isOpen && (
        <div className="mt-2 p-6 bg-white rounded-2xl shadow-xl w-80">
          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Category</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      filters.category === category
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        category: filters.category === category ? undefined : category,
                      })
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Ranges */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    className={`w-full px-4 py-2 rounded-lg border text-sm font-medium text-left transition-colors ${
                      filters.priceMin === range.min && filters.priceMax === range.max
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        priceMin: range.min,
                        priceMax: range.max,
                      })
                    }
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Status</h3>
              <div className="grid grid-cols-2 gap-2">
                {['active', 'pending', 'sold'].map((status) => (
                  <button
                    key={status}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium capitalize transition-colors ${
                      filters.status === status
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        status: filters.status === status ? undefined : status,
                      })
                    }
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
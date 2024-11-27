import React from 'react';
import { useStore } from '../../store/useStore';
import { Store, Coffee, Building2, Warehouse } from 'lucide-react';

const categories = [
  { id: 'retail', label: 'Retail', icon: Store },
  { id: 'restaurant', label: 'Restaurant', icon: Coffee },
  { id: 'office', label: 'Office', icon: Building2 },
  { id: 'industrial', label: 'Industrial', icon: Warehouse },
];

export default function CategoryNav() {
  const { filters, setFilters } = useStore();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 h-16">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`flex items-center gap-2 px-1 border-b-2 text-sm font-medium transition-colors ${
                filters.category === id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() =>
                setFilters({
                  ...filters,
                  category: filters.category === id ? undefined : id,
                })
              }
            >
              <Icon size={20} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { Search, Menu, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { user } = useStore();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-rose-500 hover:text-rose-600 transition-colors">
              businessplace
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search businesses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 hover:shadow-md focus:shadow-md focus:border-gray-400 dark:focus:border-gray-500 transition-shadow"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
              List your business
            </button>
            <ThemeToggle />
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-full p-1 hover:shadow-md cursor-pointer">
              <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div className="mx-2 border-l border-gray-300 dark:border-gray-600 h-6"></div>
              {user ? (
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
              ) : (
                <User className="h-8 w-8 p-1 bg-gray-500 text-white rounded-full" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
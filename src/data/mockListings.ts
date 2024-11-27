import { Listing } from '../types';

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'SEO Plugin for WordPress',
    description: 'SEO plugin for WordPress that helps businesses create 1000+ local landing pages for SEO purposes',
    price: 202000,
    category: 'SaaS',
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
      address: 'New York, NY'
    },
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    seller: {
      id: 'seller1',
      name: 'John Smith',
      rating: 4.8
    },
    createdAt: '2024-03-15',
    status: 'active',
    metrics: {
      ttmRevenue: 60000,
      ttmProfit: 55000,
      askingPrice: 202000
    }
  },
  {
    id: '2',
    title: 'Learning Management Platform',
    description: 'Creating a Hands-On Learning solution for Prospects, Customers or Employees',
    price: 1000000,
    category: 'SaaS',
    location: {
      latitude: 40.7112,
      longitude: -74.0055,
      address: 'San Francisco, CA'
    },
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    seller: {
      id: 'seller2',
      name: 'Sarah Johnson',
      rating: 4.9
    },
    createdAt: '2024-03-14',
    status: 'active',
    metrics: {
      ttmRevenue: 1100000,
      ttmProfit: 87000,
      askingPrice: 1000000
    }
  },
  {
    id: '3',
    title: 'Real Estate Transaction Software',
    description: 'US real estate transaction coordination & task management software for agents, TCs, & brokerages',
    price: 150000,
    category: 'SaaS',
    location: {
      latitude: 40.7225,
      longitude: -73.9989,
      address: 'Austin, TX'
    },
    images: [
      'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    seller: {
      id: 'seller3',
      name: 'Michael Chen',
      rating: 4.7
    },
    createdAt: '2024-03-13',
    status: 'active',
    metrics: {
      ttmRevenue: 56000,
      ttmProfit: 31000,
      askingPrice: 150000
    }
  },
  {
    id: '4',
    title: 'Student Housing Platform',
    description: 'Platform connecting international students with verified housing options',
    price: 180000,
    category: 'SaaS',
    location: {
      latitude: 40.7005,
      longitude: -73.9897,
      address: 'Boston, MA'
    },
    seller: {
      id: 'seller4',
      name: 'Robert Wilson',
      rating: 4.6
    },
    createdAt: '2024-03-12',
    status: 'pending',
    metrics: {
      ttmRevenue: 63000,
      ttmProfit: 42000,
      askingPrice: 180000
    }
  },
  {
    id: '5',
    title: 'Healthcare Scheduling System',
    description: 'Automated scheduling and patient management system for healthcare providers',
    price: 275000,
    category: 'SaaS',
    location: {
      latitude: 40.7589,
      longitude: -73.9851,
      address: 'Chicago, IL'
    },
    seller: {
      id: 'seller5',
      name: 'Emily Rodriguez',
      rating: 5.0
    },
    createdAt: '2024-03-11',
    status: 'active',
    metrics: {
      ttmRevenue: 95000,
      ttmProfit: 68000,
      askingPrice: 275000
    }
  },
  {
    id: '6',
    title: 'E-commerce Analytics Tool',
    description: 'Advanced analytics and reporting platform for e-commerce businesses',
    price: 320000,
    category: 'SaaS',
    location: {
      latitude: 40.7589,
      longitude: -73.9851,
      address: 'Seattle, WA'
    },
    seller: {
      id: 'seller6',
      name: 'David Kim',
      rating: 4.8
    },
    createdAt: '2024-03-10',
    status: 'active',
    metrics: {
      ttmRevenue: 112000,
      ttmProfit: 78000,
      askingPrice: 320000
    }
  }
];
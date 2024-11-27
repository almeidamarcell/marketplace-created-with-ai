import { User } from '../../types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Marcell Almeida',
    email: 'almeidamarcell@gmail.com',
    role: 'buyer',
    favorites: []
  }
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const authApi = {
  async login(email: string, password: string): Promise<User | null> {
    await delay(500);
    // For demo purposes, we'll accept any password for the mock user
    return mockUsers.find(user => user.email === email) || null;
  },

  async register(userData: Omit<User, 'id'>): Promise<User> {
    await delay(800);
    const newUser: User = {
      ...userData,
      id: Math.random().toString(36).substr(2, 9)
    };
    mockUsers.push(newUser);
    return newUser;
  },

  async getCurrentUser(): Promise<User | null> {
    await delay(300);
    // For demo purposes, always return the mock user
    return mockUsers[0];
  },

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    await delay(500);
    const index = mockUsers.findIndex(user => user.id === id);
    if (index === -1) return null;
    
    mockUsers[index] = { ...mockUsers[index], ...updates };
    return mockUsers[index];
  }
};
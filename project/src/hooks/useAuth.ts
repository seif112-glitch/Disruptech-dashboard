import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate authentication check
    const checkAuth = () => {
      const storedUser = localStorage.getItem('disruptech_user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error parsing stored user:', error);
          localStorage.removeItem('disruptech_user');
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const loginAsAdmin = () => {
    const mockUser: User = {
      id: '1',
      email: 'admin@disruptech.com',
      name: 'Admin User',
      role: 'admin',
      twoFactorEnabled: false,
      lastLogin: new Date(),
      avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400`
    };
    
    localStorage.setItem('disruptech_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const loginAsInvestor = () => {
    const mockUser: User = {
      id: '2',
      email: 'investor@disruptech.com',
      name: 'John Investor',
      role: 'investor',
      twoFactorEnabled: false,
      lastLogin: new Date(),
      avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400`
    };
    
    localStorage.setItem('disruptech_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        name: email.toLowerCase().includes('admin') ? 'Admin User' : 'John Investor',
        role: email.toLowerCase().includes('admin') ? 'admin' : 'investor',
        twoFactorEnabled: false,
        lastLogin: new Date(),
        avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400`
      };
      
      localStorage.setItem('disruptech_user', JSON.stringify(mockUser));
      setUser(mockUser);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('disruptech_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    loginAsAdmin,
    loginAsInvestor,
    logout
  };
};
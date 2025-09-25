import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEMO_USERS } from '../types/auth.js';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('binderUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (credentials) => {
    const foundUser = DEMO_USERS.find(
      u => u.email === credentials.email && u.password === credentials.password
    );
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('binderUser', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('binderUser');
  };

  const signup = (userData) => {
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      role: 'company_admin'
    };
    setUser(newUser);
    localStorage.setItem('binderUser', JSON.stringify(newUser));
    return newUser;
  };

  const value = {
    user,
    login,
    logout,
    signup,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
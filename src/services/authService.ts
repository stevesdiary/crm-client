import { api } from './api';
import { User, LoginResponse } from '../types/auth';

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await api.post('/api/v1/auth/login', { email, password });
    return {
      user: response.data.user,
      token: response.data.access_token,
    };
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get('/api/v1/auth/me');
    return response.data;
  },

  async signup(email: string, password: string, fullName: string): Promise<User> {
    const response = await api.post('/api/v1/auth/signup', {
      email,
      password,
      fullName,
    });
    return response.data;
  },
};
import { api } from './api';
import { User, LoginResponse } from '../types/auth';

export const authService = {
  async login(email: string, password: string, tenantId: string = 'default'): Promise<LoginResponse> {
    const response = await api.post('/auth/login', { email, password, tenantId });
    return {
      user: response.data.user,
      token: response.data.access_token,
    };
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get('/auth/me');
    return response.data;
  },

  async signup(email: string, password: string, name: string, tenantId: string = 'default'): Promise<User> {
    const response = await api.post('/auth/signup', {
      email,
      password,
      name,
      tenantId,
    });
    return response.data;
  },
};
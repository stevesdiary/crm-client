import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';

interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
}

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation<AuthResponse, Error, any>({
    mutationFn: async (credentials) => {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.accessToken);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      // Optionally redirect or update UI
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  return useMutation<AuthResponse, Error, any>({
    mutationFn: async (userData) => {
      const response = await api.post('/auth/signup', userData);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('authToken', data.accessToken);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      // Optionally redirect or update UI
    },
  });
};

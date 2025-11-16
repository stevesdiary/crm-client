import { api } from './api';
import { Task } from '../types/api';

export const tasksService = {
  async getTasks(): Promise<Task[]> {
    const response = await api.get('/api/v1/tasks');
    return response.data;
  },

  async createTask(task: Partial<Task>): Promise<Task> {
    const response = await api.post('/api/v1/tasks', task);
    return response.data;
  },

  async updateTask(id: string, task: Partial<Task>): Promise<Task> {
    const response = await api.put(`/api/v1/tasks/${id}`, task);
    return response.data;
  },

  async deleteTask(id: string): Promise<void> {
    await api.delete(`/api/v1/tasks/${id}`);
  }
};
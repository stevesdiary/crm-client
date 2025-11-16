import { api } from './api';
import { Opportunity } from '../types/api';

export const opportunitiesService = {
  async getOpportunities(): Promise<Opportunity[]> {
    const response = await api.get('/api/v1/opportunities');
    return response.data;
  },

  async createOpportunity(opportunity: Partial<Opportunity>): Promise<Opportunity> {
    const response = await api.post('/api/v1/opportunities', opportunity);
    return response.data;
  },

  async updateOpportunity(id: string, opportunity: Partial<Opportunity>): Promise<Opportunity> {
    const response = await api.put(`/api/v1/opportunities/${id}`, opportunity);
    return response.data;
  },

  async deleteOpportunity(id: string): Promise<void> {
    await api.delete(`/api/v1/opportunities/${id}`);
  }
};
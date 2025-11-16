import { api } from './api';
import { Lead } from '../types/api';

export const leadsService = {
  async getLeads(): Promise<Lead[]> {
    const response = await api.get('/api/v1/leads');
    return response.data;
  },

  async createLead(lead: Partial<Lead>): Promise<Lead> {
    const response = await api.post('/api/v1/leads', lead);
    return response.data;
  },

  async updateLead(id: string, lead: Partial<Lead>): Promise<Lead> {
    const response = await api.put(`/api/v1/leads/${id}`, lead);
    return response.data;
  },

  async deleteLead(id: string): Promise<void> {
    await api.delete(`/api/v1/leads/${id}`);
  }
};
import { api } from './api';
import { Ticket } from '../types/api';

export const ticketsService = {
  async getTickets(): Promise<Ticket[]> {
    const response = await api.get('/api/v1/tickets');
    return response.data;
  },

  async createTicket(ticket: Partial<Ticket>): Promise<Ticket> {
    const response = await api.post('/api/v1/tickets', ticket);
    return response.data;
  },

  async updateTicket(id: string, ticket: Partial<Ticket>): Promise<Ticket> {
    const response = await api.put(`/api/v1/tickets/${id}`, ticket);
    return response.data;
  },

  async deleteTicket(id: string): Promise<void> {
    await api.delete(`/api/v1/tickets/${id}`);
  }
};
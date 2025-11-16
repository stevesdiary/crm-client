import React, { useState, useEffect } from 'react';
import MetricCard from '../components/MetricCard';
import RevenueChart from '../components/RevenueChart';
import ActivityTimeline from '../components/ActivityTimeline';
import {
  UserOutlined,
  TeamOutlined,
  DollarCircleOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button } from '@mui/material';
import { contactsService } from '../services/contactsService';
import { leadsService } from '../services/leadsService';
import { opportunitiesService } from '../services/opportunitiesService';
import { tasksService } from '../services/tasksService';
import { ticketsService } from '../services/ticketsService';

interface DashboardStats {
  totalContacts: number;
  totalLeads: number;
  totalOpportunities: number;
  totalRevenue: number;
  openTasks: number;
  openTickets: number;
}

export const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    totalLeads: 0,
    totalOpportunities: 0,
    totalRevenue: 0,
    openTasks: 0,
    openTickets: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [contacts, leads, opportunities, tasks, tickets] = await Promise.all([
          contactsService.getContacts({}),
          leadsService.getLeads(),
          opportunitiesService.getOpportunities(),
          tasksService.getTasks(),
          ticketsService.getTickets(),
        ]);

        const totalRevenue = opportunities.reduce((sum, opp) => sum + (opp.amount || 0), 0);

        setStats({
          totalContacts: contacts.length,
          totalLeads: leads.length,
          totalOpportunities: opportunities.length,
          totalRevenue,
          openTasks: tasks.length,
          openTickets: tickets.length,
        });
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <Button variant="contained" color="primary" startIcon={<PlusOutlined />}>
          Create New
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard title="Total Contacts" value={stats.totalContacts} icon={<UserOutlined />} color="#0288d1" />
        <MetricCard title="Active Leads" value={stats.totalLeads} icon={<TeamOutlined />} color="#388e3c" />
        <MetricCard title="Opportunities" value={stats.totalOpportunities} icon={<DollarCircleOutlined />} color="#f57c00" />
        <MetricCard title="Open Tasks" value={stats.openTasks} icon={<CheckCircleOutlined />} color="#d32f2f" />
        <MetricCard title="Open Tickets" value={stats.openTickets} icon={<CustomerServiceOutlined />} color="#00796b" />
        <MetricCard title="Total Revenue" value={stats.totalRevenue} icon={<DollarCircleOutlined />} color="#7b1fa2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* TODO: Replace with real data when available */}
          <RevenueChart />
        </div>
        <div>
          {/* TODO: Replace with real data when available */}
          <ActivityTimeline />
        </div>
      </div>
    </div>
  );
};
import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { contactsService } from '../services/contactsService';
import { leadsService } from '../services/leadsService';
import { opportunitiesService } from '../services/opportunitiesService';
import { tasksService } from '../services/tasksService';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    contacts: 0,
    leads: 0,
    opportunities: 0,
    tasks: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contacts, leads, opportunities, tasks] = await Promise.all([
          contactsService.getContacts({}),
          leadsService.getLeads(),
          opportunitiesService.getOpportunities(),
          tasksService.getTasks()
        ]);
        
        setStats({
          contacts: contacts.length || 0,
          leads: leads.length || 0,
          opportunities: opportunities.length || 0,
          tasks: tasks.length || 0
        });
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Contacts
              </Typography>
              <Typography variant="h5" component="h2">
                {stats.contacts}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Leads
              </Typography>
              <Typography variant="h5" component="h2">
                {stats.leads}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Opportunities
              </Typography>
              <Typography variant="h5" component="h2">
                {stats.opportunities}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tasks
              </Typography>
              <Typography variant="h5" component="h2">
                {stats.tasks}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

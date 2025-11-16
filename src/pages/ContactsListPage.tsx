import React, { useEffect, useState } from 'react';
import { Typography, Box, CircularProgress, Button } from '@mui/material';
import EnhancedTable from '../components/EnhancedTable';
import { contactsService } from '../services/contactsService';
import { Contact } from '../types/api';

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone' },
  { id: 'company', label: 'Company' },
  { id: 'status', label: 'Status' },
];

export default function ContactsListPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState('name');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await contactsService.getContacts({});
        const formattedData = data.map(c => ({ ...c, name: `${c.firstName} ${c.lastName}` }));
        setContacts(formattedData);
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedContacts = React.useMemo(() => {
    return [...contacts].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
      if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }, [contacts, order, orderBy]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ my: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Contacts
        </Typography>
        <Button variant="contained" color="primary">
          Add Contact
        </Button>
      </Box>
      <EnhancedTable
        columns={columns}
        data={sortedContacts}
        order={order}
        orderBy={orderBy}
        onRequestSort={handleRequestSort}
      />
    </Box>
  );
}
import React, { useState, useEffect } from 'react';
import FloatingLabelInput from '../components/FloatingLabelInput';
import EnhancedTable from '../components/EnhancedTable';
import { Button, Box, Typography } from '@mui/material';
import { contactsService } from '../services/contactsService';
import { Contact } from '../types/api';

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'company', label: 'Company' },
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone' },
  { id: 'actions', label: 'Actions' },
];

export const ContactManagement: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const data = await contactsService.getContacts({});
      setContacts(data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingContact) {
        await contactsService.updateContact(editingContact.id, formData);
      } else {
        await contactsService.createContact(formData);
      }
      resetForm();
      fetchContacts();
    } catch (error) {
      console.error('Failed to save contact:', error);
    }
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setFormData({
      firstName: contact.firstName,
      lastName: contact.lastName,
      company: contact.company || '',
      email: contact.email || '',
      phone: contact.phone || '',
    });
    setShowCreateForm(true);
  };

  const handleDelete = async (contactId: string) => {
    try {
      await contactsService.deleteContact(contactId);
      fetchContacts();
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  const resetForm = () => {
    setFormData({ firstName: '', lastName: '', company: '', email: '', phone: '' });
    setEditingContact(null);
    setShowCreateForm(false);
  };

  if (loading) return <div>Loading...</div>;

  const contactsWithActions = contacts.map(c => ({
    ...c,
    name: `${c.firstName} ${c.lastName}`,
    actions: (
      <>
        <Button onClick={() => handleEdit(c)} size="small">
          Edit
        </Button>
        <Button onClick={() => handleDelete(c.id)} size="small" color="error">
          Delete
        </Button>
      </>
    ),
  }));

  return (
    <Box sx={{ my: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Contact Management
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setShowCreateForm(true)}>
          Add Contact
        </Button>
      </Box>

      {showCreateForm && (
        <Box sx={{ mb: 3, p: 2, border: '1px solid #ddd', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>
            {editingContact ? 'Edit Contact' : 'Create New Contact'}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <FloatingLabelInput label="First Name" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} required />
              <FloatingLabelInput label="Last Name" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} required />
              <FloatingLabelInput label="Company" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              <FloatingLabelInput label="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              <FloatingLabelInput label="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </Box>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              <Button type="submit" variant="contained">
                {editingContact ? 'Update' : 'Create'}
              </Button>
              <Button onClick={resetForm} variant="outlined">
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      )}

      <EnhancedTable
        columns={columns}
        data={contactsWithActions}
        order="asc"
        orderBy="name"
        onRequestSort={() => {}}
      />
    </Box>
  );
};
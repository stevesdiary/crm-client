import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to the CRM
      </Typography>
      <Typography variant="h5" component="p" paragraph>
        Manage your customer relationships efficiently and effectively.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/signup"
          sx={{ mr: 2 }}
        >
          Sign Up
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          component={Link}
          to="/login"
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;

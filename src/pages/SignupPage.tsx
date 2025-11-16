import { Button, TextField, Typography, Box, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

interface SignupForm {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupForm>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const password = watch('password');

  const onSubmit = async (data: SignupForm) => {
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    setError('');
    try {
      await authService.signup(data.email, data.password, data.fullName);
      navigate('/login');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Signup failed';
      setError(typeof errorMessage === 'string' ? errorMessage : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Sign Up
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Full Name"
          {...register('fullName', { required: 'Full name is required' })}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          type="password"
          {...register('confirmPassword', { 
            required: 'Please confirm your password',
            validate: value => value === password || 'Passwords do not match'
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          fullWidth
          margin="normal"
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </Button>
      </form>
    </Box>
  );
}

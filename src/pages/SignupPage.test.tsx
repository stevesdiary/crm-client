import { render, screen } from '@testing-library/react';
import SignupPage from './SignupPage';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('SignupPage', () => {
  it('renders the signup form', () => {
    render(
      <BrowserRouter>
        <SignupPage />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
  });
});

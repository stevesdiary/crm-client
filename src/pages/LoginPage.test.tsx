import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('LoginPage', () => {
  it('renders the login form', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { describe, it, expect } from 'vitest';

describe('HomePage', () => {
  it('renders the welcome message', () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to the CRM/i)).toBeInTheDocument();
  });
});
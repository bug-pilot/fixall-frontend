import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from '../pages/Services';

describe('Services Page', () => {
  it('renders services page heading', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument();
  });

  it('renders all three service sections', () => {
    render(<Services />);
    expect(screen.getByText(/plumbing services/i)).toBeInTheDocument();
    expect(screen.getByText(/electrical services/i)).toBeInTheDocument();
    expect(screen.getByText(/handyman services/i)).toBeInTheDocument();
  });

  it('renders plumbing service cards', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /leak repair/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /drain cleaning/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /fixture installation/i })).toBeInTheDocument();
  });

  it('renders electrical service cards', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /circuit installation/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /outlet & switch repair/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /lighting solutions/i })).toBeInTheDocument();
  });

  it('renders handyman service cards', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /drywall & painting/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /door & window repair/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /general repairs/i })).toBeInTheDocument();
  });

  it('renders all service descriptions', () => {
    render(<Services />);
    expect(screen.getByText(/fast diagnosis and repair/i)).toBeInTheDocument();
    expect(screen.getByText(/safe installation of new circuits/i)).toBeInTheDocument();
    expect(screen.getByText(/wall repair, patching/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Services />);
    expect(container).toMatchSnapshot();
  });
});

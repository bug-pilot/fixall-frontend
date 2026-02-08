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
    const headings = screen.getAllByRole('heading', { level: 2 });
    const sectionHeadings = headings.map((h) => h.textContent);
    expect(sectionHeadings.some((h) => /plumbing/i.test(h))).toBe(true);
    expect(sectionHeadings.some((h) => /electrical/i.test(h))).toBe(true);
    expect(sectionHeadings.some((h) => /handyman/i.test(h))).toBe(true);
  });

  it('renders plumbing service cards', () => {
    render(<Services />);
    const allHeadings = screen.getAllByRole('heading', { level: 3 });
    const headings = allHeadings.map((h) => h.textContent);
    expect(headings.some((h) => /leak repair/i.test(h))).toBe(true);
    expect(headings.some((h) => /fixture installation/i.test(h))).toBe(true);
  });

  it('renders electrical service cards', () => {
    render(<Services />);
    const allHeadings = screen.getAllByRole('heading', { level: 3 });
    const headings = allHeadings.map((h) => h.textContent);
    expect(headings.some((h) => /outlet & switch repair/i.test(h))).toBe(true);
    expect(headings.some((h) => /lighting solutions/i.test(h))).toBe(true);
  });

  it('renders handyman service cards', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /interior & exterior painting/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /general handyman work/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /door & window repair/i })).toBeInTheDocument();
  });

  it('renders all service descriptions', () => {
    render(<Services />);
    expect(screen.getByText(/fast diagnosis and repair/i)).toBeInTheDocument();
    expect(screen.getByText(/expert electrical work/i)).toBeInTheDocument();
    expect(screen.getByText(/transform your home with professional painting/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Services />);
    expect(container).toMatchSnapshot();
  });
});

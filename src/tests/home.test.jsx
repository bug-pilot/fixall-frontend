import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Page', () => {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
  ];

  it('renders hero section with headline', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /one call for all your home fixes/i })
    ).toBeInTheDocument();
  });

  it('renders hero subheadline', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/professional handyman.*electrical services/i)
    ).toBeInTheDocument();
  });

  it('renders "Why Choose FixAll?" section', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /why choose fixall/i })
    ).toBeInTheDocument();
  });

  it('renders all four service summary items', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading', { name: /fast response/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /experienced team/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /fair pricing/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /quality guaranteed/i })
    ).toBeInTheDocument();
  });

  it('renders testimonials section', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /what our customers say/i })
    ).toBeInTheDocument();
  });

  it('renders three testimonial cards', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/lovely simon/i)).toBeInTheDocument();
    expect(screen.getByText(/hi hi/i)).toBeInTheDocument();
    expect(screen.getByText(/josh seiden/i)).toBeInTheDocument();
  });

  it('renders testimonial service types', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    // Check that testimonial cards with service types exist
    expect(screen.getByText(/lovely simon/i)).toBeInTheDocument();
    const plumbingService = screen.queryAllByText(/plumbing/i);
    const electricalService = screen.queryAllByText(/electrical/i);
    const handymanService = screen.queryAllByText(/handyman/i);
    expect(plumbingService.length).toBeGreaterThan(0);
    expect(electricalService.length).toBeGreaterThan(0);
    expect(handymanService.length).toBeGreaterThan(0);
  });

  it('renders CTA buttons in hero', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    const buttons = screen.getAllByRole('link', { name: /request a quote/i });
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders "View Services" link', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('link', { name: /view services/i })).toBeInTheDocument();
  });

  it('uses semantic HTML with sections', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(3);
  });
});

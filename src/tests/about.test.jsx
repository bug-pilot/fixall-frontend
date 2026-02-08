import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import About from '../pages/About';

describe('About Page', () => {
  const routes = [
    {
      path: '/',
      element: <About />,
    },
  ];

  it('renders about page heading', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /about fixall home service/i })
    ).toBeInTheDocument();
  });

  it('renders Edison, NJ in tagline', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/edison.*nj.*home repairs/i)
    ).toBeInTheDocument();
  });

  it('renders "Our Story" section', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /our story/i })
    ).toBeInTheDocument();
  });

  it('renders company narrative in "Our Story"', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/we started fixall.*edison.*nj/i)
    ).toBeInTheDocument();
  });

  it('renders "Our Values" section with four value cards', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /our values/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^integrity$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^excellence$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^reliability$/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /^community focus$/i })
    ).toBeInTheDocument();
  });

  it('renders service area section with Edison, NJ mention', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /serving edison.*nj/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/we proudly serve edison.*new jersey/i)
    ).toBeInTheDocument();
  });

  it('uses "we" voice throughout content', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    const pageText = screen.getByRole('heading', { name: /about fixall/i }).closest('.page-about').textContent;
    expect(pageText).toMatch(/we/i);
  });

  it('uses semantic HTML with sections', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(4);
  });

  it('renders responsive layout with value cards grid', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    const valuesGrid = container.querySelector('.values-grid');
    expect(valuesGrid).toBeInTheDocument();
    const valueCards = container.querySelectorAll('.value-card');
    expect(valueCards.length).toBe(4);
  });
});

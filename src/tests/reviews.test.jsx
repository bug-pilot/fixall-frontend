import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Reviews from '../pages/Reviews';

describe('Reviews Page', () => {
  const routes = [
    {
      path: '/',
      element: <Reviews />,
    },
  ];

  it('renders reviews page heading', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /customer reviews/i })
    ).toBeInTheDocument();
  });

  it('renders reviews tagline', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/see what our satisfied customers have to say/i)
    ).toBeInTheDocument();
  });

  it('renders "What Our Customers Say" section heading', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /what our customers say/i })
    ).toBeInTheDocument();
  });

  it('renders four testimonial cards', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/sarah m\./i)).toBeInTheDocument();
    expect(screen.getByText(/james k\./i)).toBeInTheDocument();
    expect(screen.getByText(/maria l\./i)).toBeInTheDocument();
    expect(screen.getByText(/robert t\./i)).toBeInTheDocument();
  });

  it('renders testimonial quotes', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/fixall came out on short notice/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/highly professional electrical work/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/best handyman service we've found/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/we've used fixall multiple times/i)
    ).toBeInTheDocument();
  });

  it('renders testimonial service types', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/plumbing services/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/electrical services/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/handyman services/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/multiple services/i)
    ).toBeInTheDocument();
  });

  it('renders testimonial cards with semantic HTML', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    const articles = container.querySelectorAll('article.testimonial-card');
    expect(articles.length).toBe(4);
    // Check for blockquote elements
    const blockquotes = container.querySelectorAll('blockquote.testimonial-quote');
    expect(blockquotes.length).toBe(4);
  });

  it('uses semantic HTML with sections', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(2);
  });

  it('renders reviews grid for responsive layout', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    const reviewsGrid = container.querySelector('.reviews-grid');
    expect(reviewsGrid).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });
});

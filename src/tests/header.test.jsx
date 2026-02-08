import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <Services /> },
      { path: '/about', element: <About /> },
      { path: '/reviews', element: <Reviews /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
];

describe('Navigation Header', () => {
  it('renders all navigation links', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /reviews/i })).toBeInTheDocument();
  });

  it('renders "Request a Quote" CTA button', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const ctaButton = screen.getByRole('link', {
      name: /request a quote/i,
    });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/contact');
  });

  it('renders logo linking to home', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const logo = screen.getByRole('link', { name: /fixall/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '/');
  });

  it('marks home link as active on home page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const homeLink = screen.getByRole('link', { name: /^home$/i });
    expect(homeLink).toHaveClass('active');
  });

  it('marks services link as active on services page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/services'],
    });
    render(<RouterProvider router={router} />);

    const servicesLink = screen.getByRole('link', { name: /^services$/i });
    expect(servicesLink).toHaveClass('active');
  });

  it('marks about link as active on about page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });
    render(<RouterProvider router={router} />);

    const aboutLink = screen.getByRole('link', { name: /^about$/i });
    expect(aboutLink).toHaveClass('active');
  });

  it('marks reviews link as active on reviews page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/reviews'],
    });
    render(<RouterProvider router={router} />);

    const reviewsLink = screen.getByRole('link', { name: /^reviews$/i });
    expect(reviewsLink).toHaveClass('active');
  });

  it('allows navigation from home to services', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const servicesLink = screen.getByRole('link', { name: /^services$/i });
    await user.click(servicesLink);

    expect(
      screen.getByRole('heading', { name: /^services$/i })
    ).toBeInTheDocument();
  });

  it('allows navigation to contact page via CTA button', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const ctaButton = screen.getByRole('link', {
      name: /request a quote/i,
    });
    await user.click(ctaButton);

    expect(
      screen.getByRole('heading', { name: /^contact$/i })
    ).toBeInTheDocument();
  });

  it('CTA button visible on all pages', () => {
    const pages = ['/', '/services', '/about', '/reviews', '/contact'];

    pages.forEach((page) => {
      const router = createMemoryRouter(routes, {
        initialEntries: [page],
      });
      const { unmount } = render(<RouterProvider router={router} />);

      expect(
        screen.getByRole('link', { name: /request a quote/i })
      ).toBeInTheDocument();
      unmount();
    });
  });
});

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

    // Check header nav specifically
    const navLinks = screen.getAllByRole('link', { name: /services/i });
    expect(navLinks.length).toBeGreaterThan(0);

    // Check for other nav links
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it('renders "Request a Quote" CTA button', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const ctaButtons = screen.getAllByRole('link', {
      name: /request a quote/i,
    });
    expect(ctaButtons.length).toBeGreaterThan(0);
    const headerCtaButton = ctaButtons.find((btn) =>
      btn.classList.contains('cta-button')
    );
    expect(headerCtaButton).toHaveAttribute('href', '/contact');
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

    const homeLinks = screen.getAllByRole('link', { name: /^home$/i });
    const navHomeLink = homeLinks.find((link) =>
      link.classList.contains('nav-link')
    );
    expect(navHomeLink).toHaveClass('active');
  });

  it('marks services link as active on services page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/services'],
    });
    render(<RouterProvider router={router} />);

    // Get the nav link specifically (not page links)
    const serviceLinks = screen.getAllByRole('link', { name: /^services$/i });
    const activeLink = serviceLinks.find((link) =>
      link.classList.contains('nav-link')
    );
    expect(activeLink).toHaveClass('active');
  });

  it('marks about link as active on about page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });
    render(<RouterProvider router={router} />);

    const aboutLinks = screen.getAllByRole('link', { name: /^about$/i });
    const navAboutLink = aboutLinks.find((link) =>
      link.classList.contains('nav-link')
    );
    expect(navAboutLink).toHaveClass('active');
  });

  it('marks reviews link as active on reviews page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/reviews'],
    });
    render(<RouterProvider router={router} />);

    const reviewsLinks = screen.getAllByRole('link', { name: /^reviews$/i });
    const navReviewsLink = reviewsLinks.find((link) =>
      link.classList.contains('nav-link')
    );
    expect(navReviewsLink).toHaveClass('active');
  });

  it('allows navigation from home to services', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    const serviceLinks = screen.getAllByRole('link', { name: /^services$/i });
    const navServiceLink = serviceLinks.find((link) =>
      link.classList.contains('nav-link')
    );
    await user.click(navServiceLink);

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

    const ctaButtons = screen.getAllByRole('link', {
      name: /request a quote/i,
    });
    const headerCtaButton = ctaButtons.find((btn) =>
      btn.classList.contains('cta-button')
    );
    await user.click(headerCtaButton);

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

      const ctaButtons = screen.queryAllByRole('link', {
        name: /request a quote/i,
      });
      expect(ctaButtons.length).toBeGreaterThan(0);
      unmount();
    });
  });
});

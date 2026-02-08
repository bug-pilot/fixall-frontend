import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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

describe('Routing', () => {
  it('renders home page at /', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /one call for all your home fixes/i })
    ).toBeInTheDocument();
  });

  it('renders services page at /services', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/services'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /our services/i })
    ).toBeInTheDocument();
  });

  it('renders about page at /about', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /about fixall home service/i })
    ).toBeInTheDocument();
  });

  it('renders reviews page at /reviews', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/reviews'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /customer reviews/i })
    ).toBeInTheDocument();
  });

  it('renders contact page at /contact', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/contact'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /request a quote/i })
    ).toBeInTheDocument();
  });

  it('renders layout with header and footer on all routes', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('link', { name: /fixall/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });
});

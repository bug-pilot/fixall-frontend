import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Contact from '../pages/Contact';

describe('Contact Page', () => {
  const routes = [
    {
      path: '/',
      element: <Contact />,
    },
  ];

  it('renders contact page heading', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /request a quote/i })
    ).toBeInTheDocument();
  });

  it('renders contact tagline', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/let us know what you need.*free estimate/i)
    ).toBeInTheDocument();
  });

  it('renders "Get in Touch" section', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole('heading', { name: /get in touch/i })
    ).toBeInTheDocument();
  });

  it('renders service area information', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/service areas/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/edison.*nj.*surrounding communities/i)
    ).toBeInTheDocument();
  });

  it('renders response time information', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/response time/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/usually within 24 hours/i)
    ).toBeInTheDocument();
  });

  it('renders quote form', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('uses semantic HTML with sections', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(2);
  });

  it('renders responsive layout', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    const contactContent = container.querySelector('.contact-content');
    expect(contactContent).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });
});

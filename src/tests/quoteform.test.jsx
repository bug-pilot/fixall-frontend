import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuoteForm from '../components/QuoteForm';

describe('QuoteForm Component', () => {
  it('renders all form fields', () => {
    render(<QuoteForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<QuoteForm />);
    expect(screen.getByRole('button', { name: /request a quote/i })).toBeInTheDocument();
  });

  it('validates required name field', async () => {
    render(<QuoteForm />);
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.blur(nameInput);
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
  });

  it('validates name minimum length', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'A');
    fireEvent.blur(nameInput);
    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'invalid-email');
    fireEvent.blur(emailInput);
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });
  });

  it('accepts valid email', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'test@example.com');
    fireEvent.blur(emailInput);
    await waitFor(() => {
      expect(screen.queryByText(/please enter a valid email address/i)).not.toBeInTheDocument();
    });
  });

  it('validates required email field', async () => {
    render(<QuoteForm />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.blur(emailInput);
    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });
  });

  it('validates phone number format', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    const phoneInput = screen.getByLabelText(/phone number/i);
    await user.type(phoneInput, '123');
    fireEvent.blur(phoneInput);
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument();
    });
  });

  it('accepts valid phone number', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    const phoneInput = screen.getByLabelText(/phone number/i);
    await user.type(phoneInput, '(123) 456-7890');
    fireEvent.blur(phoneInput);
    await waitFor(() => {
      expect(screen.queryByText(/please enter a valid phone number/i)).not.toBeInTheDocument();
    });
  });

  it('validates required phone field', async () => {
    render(<QuoteForm />);
    const phoneInput = screen.getByLabelText(/phone number/i);
    fireEvent.blur(phoneInput);
    await waitFor(() => {
      expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
    });
  });

  it('validates service type selection', async () => {
    render(<QuoteForm />);
    const serviceSelect = screen.getByLabelText(/service type/i);
    fireEvent.blur(serviceSelect);
    await waitFor(() => {
      expect(screen.getByText(/please select a service type/i)).toBeInTheDocument();
    });
  });

  it('allows service type selection', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    const serviceSelect = screen.getByLabelText(/service type/i);
    await user.selectOptions(serviceSelect, 'Plumbing');
    expect(serviceSelect).toHaveValue('Plumbing');
  });

  it('validates required message field', async () => {
    render(<QuoteForm />);
    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.blur(messageInput);
    await waitFor(() => {
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it('validates message minimum length', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    const messageInput = screen.getByLabelText(/message/i);
    await user.type(messageInput, 'short');
    fireEvent.blur(messageInput);
    await waitFor(() => {
      expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
    });
  });

  it('clears errors when user starts typing', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    const nameInput = screen.getByLabelText(/name/i);
    
    // Trigger error
    fireEvent.blur(nameInput);
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });

    // Error should clear when user types
    await user.type(nameInput, 'John');
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log');
    
    render(<QuoteForm />);
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '(123) 456-7890');
    await user.selectOptions(screen.getByLabelText(/service type/i), 'Plumbing');
    await user.type(screen.getByLabelText(/message/i), 'I need my kitchen sink fixed');
    
    const submitBtn = screen.getByRole('button', { name: /request a quote/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Form is valid:',
        expect.objectContaining({
          name: 'John Doe',
          email: 'john@example.com',
          phone: '(123) 456-7890',
          serviceType: 'Plumbing',
          message: 'I need my kitchen sink fixed',
        })
      );
    });
    
    consoleSpy.mockRestore();
  });

  it('prevents form submission with invalid data', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log');
    
    render(<QuoteForm />);
    
    const submitBtn = screen.getByRole('button', { name: /request a quote/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(consoleSpy).not.toHaveBeenCalled();
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
    
    consoleSpy.mockRestore();
  });

  it('displays all service options', () => {
    render(<QuoteForm />);
    const serviceSelect = screen.getByLabelText(/service type/i);
    const options = serviceSelect.querySelectorAll('option');
    // +1 for the default "Select a service..." option
    expect(options).toHaveLength(5);
    expect(options[1]).toHaveTextContent('Plumbing');
    expect(options[2]).toHaveTextContent('Electrical');
    expect(options[3]).toHaveTextContent('Handyman');
    expect(options[4]).toHaveTextContent('Multiple Services');
  });

  it('uses semantic HTML form structure', () => {
    const { container } = render(<QuoteForm />);
    const form = container.querySelector('form.quote-form');
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute('novalidate');
  });
});

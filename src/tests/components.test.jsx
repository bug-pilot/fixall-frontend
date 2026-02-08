import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';
import CTAButton from '../components/CTAButton';
import TestimonialCard from '../components/TestimonialCard';

describe('Hero Component', () => {
  it('renders headline', () => {
    render(<Hero headline="Test Headline" />);
    expect(screen.getByRole('heading', { name: /test headline/i })).toBeInTheDocument();
  });

  it('renders subheadline when provided', () => {
    render(<Hero headline="Test" subheadline="Test Sub" />);
    expect(screen.getByText(/test sub/i)).toBeInTheDocument();
  });

  it('does not render subheadline when not provided', () => {
    const { container } = render(<Hero headline="Test" />);
    expect(container.querySelector('.hero-subheadline')).not.toBeInTheDocument();
  });

  it('renders children actions', () => {
    render(
      <Hero headline="Test">
        <button>Action Button</button>
      </Hero>
    );
    expect(screen.getByRole('button', { name: /action button/i })).toBeInTheDocument();
  });
});

describe('CTAButton Component', () => {
  it('renders as button when no href provided', () => {
    render(<CTAButton>Click Me</CTAButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('renders as link when href provided', () => {
    render(<CTAButton href="/test">Click Me</CTAButton>);
    const link = screen.getByRole('link', { name: /click me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies primary variant class by default', () => {
    render(<CTAButton>Click Me</CTAButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('cta-button--primary');
  });

  it('applies secondary variant class when specified', () => {
    render(<CTAButton variant="secondary">Click Me</CTAButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('cta-button--secondary');
  });

  it('calls onClick handler when clicked', async () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    render(<CTAButton onClick={handleClick}>Click Me</CTAButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    await button.click();
    expect(clicked).toBe(true);
  });
});

describe('TestimonialCard Component', () => {
  it('renders quote', () => {
    render(
      <TestimonialCard quote="Great service!" author="John" />
    );
    expect(screen.getByText(/great service/i)).toBeInTheDocument();
  });

  it('renders author', () => {
    render(
      <TestimonialCard quote="Great service!" author="John Doe" />
    );
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });

  it('renders service when provided', () => {
    render(
      <TestimonialCard
        quote="Great service!"
        author="John"
        service="Plumbing"
      />
    );
    expect(screen.getByText(/plumbing/i)).toBeInTheDocument();
  });

  it('does not render service when not provided', () => {
    const { container } = render(
      <TestimonialCard quote="Great!" author="John" />
    );
    expect(container.querySelector('.testimonial-service')).not.toBeInTheDocument();
  });

  it('uses semantic HTML blockquote element', () => {
    const { container } = render(
      <TestimonialCard quote="Great!" author="John" />
    );
    expect(container.querySelector('blockquote')).toBeInTheDocument();
  });

  it('uses semantic HTML article element', () => {
    const { container } = render(
      <TestimonialCard quote="Great!" author="John" />
    );
    expect(container.querySelector('article')).toBeInTheDocument();
  });
});

import TestimonialCard from '../components/TestimonialCard';
import './Reviews.css';

function Reviews() {
  const testimonials = [
    {
      quote: 'FixAll came out on short notice and fixed our plumbing issue immediately. Great service and very professional!',
      author: 'Sarah M.',
      service: 'Plumbing Services',
      rating: 5,
      daysAgo: '3 months',
    },
    {
      quote: 'Highly professional electrical work. They explained everything clearly, answered all my questions, and cleaned up after themselves.',
      author: 'James K.',
      service: 'Electrical Services',
      rating: 5,
      daysAgo: '2 months',
    },
    {
      quote: 'Best handyman service we\'ve found. Reliable, courteous, affordable, and they get the job done right the first time.',
      author: 'Maria L.',
      service: 'Handyman Services',
      rating: 5,
      daysAgo: '1 month',
    },
    {
      quote: 'We\'ve used FixAll multiple times for different projects. They\'re always punctual, professional, and deliver excellent results.',
      author: 'Robert T.',
      service: 'Multiple Services',
      rating: 5,
      daysAgo: '2 weeks',
    },
  ];

  return (
    <div className="page page-reviews">
      <section className="reviews-hero">
        <div className="reviews-hero-container">
          <h1>Customer Reviews</h1>
          <p className="reviews-tagline">See what our satisfied customers have to say</p>
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-container">
          <h2>What Our Customers Say</h2>
          <div className="reviews-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                service={testimonial.service}
                rating={testimonial.rating}
                daysAgo={testimonial.daysAgo}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;

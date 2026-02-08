import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CTAButton from '../components/CTAButton';
import TestimonialCard from '../components/TestimonialCard';
import './Home.css';

function Home() {
  return (
    <div className="page page-home">
      <Hero
        headline="One Call for All Your Home Fixes"
        subheadline="Professional handyman, plumbing, and electrical services right when you need them."
      >
        <Link to="/contact">
          <CTAButton>Request a Quote</CTAButton>
        </Link>
        <Link to="/services">
          <CTAButton variant="secondary">View Services</CTAButton>
        </Link>
      </Hero>

      <section className="services-summary">
        <div className="services-container">
          <h2>Why Choose FixAll?</h2>
          <div className="summary-grid">
            <div className="summary-item">
              <h3>Fast Response</h3>
              <p>
                We respond quickly to your service requests and schedule appointments
                that work with your busy schedule.
              </p>
            </div>
            <div className="summary-item">
              <h3>Experienced Team</h3>
              <p>
                Our certified technicians bring years of experience in plumbing,
                electrical work, and general handyman services.
              </p>
            </div>
            <div className="summary-item">
              <h3>Fair Pricing</h3>
              <p>
                Transparent pricing with no hidden fees. Get a detailed estimate before
                work begins.
              </p>
            </div>
            <div className="summary-item">
              <h3>Quality Guaranteed</h3>
              <p>
                We stand behind our work. All services include our satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <TestimonialCard
              quote="FixAll came out on short notice and fixed our plumbing issue immediately. Great service!"
              author="Sarah M."
              service="Plumbing"
            />
            <TestimonialCard
              quote="Highly professional electrical work. They explained everything clearly and cleaned up after."
              author="James K."
              service="Electrical"
            />
            <TestimonialCard
              quote="Best handyman service we've found. Reliable, courteous, and affordable."
              author="Maria L."
              service="Handyman"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;


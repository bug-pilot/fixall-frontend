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

      <section className="areas-serve-section">
        <div className="areas-serve-container">
          <h2>Areas We Serve</h2>
          <p className="areas-serve-subtitle">Serving Edison, NJ and surrounding communities with professional home services</p>
          
          <div className="areas-serve-content">
            <div className="areas-serve-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.8849633989007!2d-74.41347932346045!3d40.516496271441056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c5f5c5c5c5c5%3A0xc5c5c5c5c5c5c5c5!2sEdison%2C%20NJ!5e0!3m2!1sen!2sus!4v1707400000000"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Areas We Serve Map"
              ></iframe>
            </div>
            
            <div className="areas-serve-list">
              <h3>Cities We Service</h3>
              <div className="cities-grid">
                <div className="city-item">
                  <span className="city-marker">📍</span>
                  <span>Edison</span>
                </div>
                <div className="city-item">
                  <span className="city-marker">📍</span>
                  <span>Metuchen</span>
                </div>
                <div className="city-item">
                  <span className="city-marker">📍</span>
                  <span>Iselin</span>
                </div>
                <div className="city-item">
                  <span className="city-marker">📍</span>
                  <span>Carteret</span>
                </div>
                <div className="city-item">
                  <span className="city-marker">📍</span>
                  <span>Rahway</span>
                </div>
                <div className="city-item">
                  <span className="city-marker">📍</span>
                  <span>Woodbridge</span>
                </div>
                <div className="city-item">
                  <span className="city-marker">📍</span>
                  <span>Perth Amboy</span>
                </div>
                <div className="city-item">
                  <span className="city-marker">📍</span>
                  <span>Colonia</span>
                </div>
              </div>
              <p className="service-availability">
                <strong>Available for emergency calls 24/7!</strong> Contact us for service availability in your area.
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
              quote="Excellent work, and time management. I will recommend this company for my friends and family."
              author="Lovely Simon"
              service="Plumbing"
              rating={5}
              daysAgo="2 months"
            />
            <TestimonialCard
              quote="Quick and professional,get the job done"
              author="Hi Hi"
              service="Electrical"
              rating={5}
              daysAgo="2 months"
            />
            <TestimonialCard
              quote="Super reliable—arrived on time, worked professionally, did a perfect job, and left everything clean. I'd definitely hire him again."
              author="Josh seiden"
              service="Handyman"
              rating={5}
              daysAgo="2 months"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;


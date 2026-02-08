import QuoteForm from '../components/QuoteForm';
import './Contact.css';

function Contact() {
  return (
    <div className="page page-contact">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1>Request a Quote</h1>
          <p className="contact-tagline">Let us know what you need, and we'll provide a free estimate</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Fill out the form below with details about your project. We'll review your request and get back to you within 24 hours with a free quote.
              </p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <h3>Service Areas</h3>
                  <p>Edison, NJ and surrounding communities</p>
                </div>
                <div className="contact-detail-item">
                  <h3>Response Time</h3>
                  <p>Usually within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

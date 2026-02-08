import './TestimonialCard.css';

function TestimonialCard({ quote, author, service }) {
  return (
    <article className="testimonial-card">
      <blockquote className="testimonial-quote">"{quote}"</blockquote>
      <footer className="testimonial-footer">
        <p className="testimonial-author">{author}</p>
        {service && <p className="testimonial-service">{service}</p>}
      </footer>
    </article>
  );
}

export default TestimonialCard;

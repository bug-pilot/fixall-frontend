import './TestimonialCard.css';

function TestimonialCard({ quote, author, service, rating = 5, daysAgo = '2 months' }) {
  const renderStars = (rating) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? 'filled' : 'empty'}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <article className="testimonial-card">
      <div className="testimonial-header">
        <div className="author-info">
          <div className="author-avatar">{author.charAt(0)}</div>
          <div className="author-details">
            <p className="testimonial-author">{author}</p>
            <p className="testimonial-time">{daysAgo} ago</p>
          </div>
        </div>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctext x='2' y='20' font-size='20' fill='%234285F4'%3EG%3C/text%3E%3C/svg%3E" alt="Google" className="google-logo" />
      </div>
      
      {renderStars(rating)}
      
      <blockquote className="testimonial-quote">{quote}</blockquote>
      
      {service && <p className="testimonial-service">{service}</p>}
    </article>
  );
}

export default TestimonialCard;

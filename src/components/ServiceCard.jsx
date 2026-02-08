import './ServiceCard.css';

function ServiceCard({ title, description, icon, image, tags = [] }) {
  return (
    <article className="service-card">
      <div className="service-card-image">
        {image && <img src={image} alt={title} />}
        {icon && <div className="service-card-icon">{icon}</div>}
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        {tags.length > 0 && (
          <div className="service-card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="service-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ServiceCard;

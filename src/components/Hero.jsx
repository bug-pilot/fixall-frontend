import './Hero.css';

function Hero({ headline, subheadline, children }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2 className="hero-headline">{headline}</h2>
        {subheadline && (
          <p className="hero-subheadline">{subheadline}</p>
        )}
        {children && <div className="hero-actions">{children}</div>}
      </div>
    </section>
  );
}

export default Hero;

import './CTAButton.css';

function CTAButton({ children, onClick, href, variant = 'primary' }) {
  if (href) {
    return (
      <a href={href} className={`cta-button cta-button--${variant}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={`cta-button cta-button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CTAButton;

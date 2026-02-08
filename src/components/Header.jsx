import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <h1>FixAll</h1>
        </Link>
        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className={`nav-link ${isActive('/reviews') ? 'active' : ''}`}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/contact" className="cta-button">
          Request a Quote
        </Link>
      </div>
    </header>
  );
}

export default Header;

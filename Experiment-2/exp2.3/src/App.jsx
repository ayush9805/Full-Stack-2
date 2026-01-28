import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarCollapsed(!isNavbarCollapsed);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar shadow-sm">
        <div className="container">
          {/* Brand with icon or bold text */}
          <a className="navbar-brand fw-bold fs-4" href="#">
             ✈️ TravelSite
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavbarCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Destinations</a>
              </li>

              <li className="nav-item dropdown position-relative">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  onClick={toggleDropdown}
                  style={{ cursor: 'pointer' }}
                >
                  More
                </span>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''} custom-dropdown`}>
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                  <li><a className="dropdown-item" href="#">Contact Support</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                </ul>
              </li>
            </ul>

            <form className="d-flex ms-lg-3">
              <input
                className="form-control me-2 rounded-pill border-0 bg-light-opacity"
                type="search"
                placeholder="Search places..."
                aria-label="Search"
              />
              <button className="btn btn-outline-light rounded-pill px-4" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Hero Section to demonstrate transparency */}
      <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
        <div>
          <h1 className="display-3 fw-bold">Explore the World</h1>
          <p className="lead">Your adventure begins here.</p>
        </div>
      </div>
      
      
    </>
  );
}

export default App;
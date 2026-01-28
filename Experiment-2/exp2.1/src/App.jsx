import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Required for Navbar toggler to work
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* 1. NAVIGATION BAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">UI Experiment</a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            {/* Optional: Add a button in navbar */}
            <button className="btn btn-light text-primary fw-bold ms-lg-3 rounded-pill px-4">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* 2. FORM SECTION (Centered) */}
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <h3 className="fw-bold text-center mb-4 text-primary">Contact Us</h3>
                <form>
                  {/* Name Input */}
                  <div className="mb-3">
                    <label className="form-label fw-bold small text-muted">Full Name</label>
                    <input type="text" className="form-control bg-light border-0 py-2" placeholder="John Doe" />
                  </div>
                  
                  {/* Email Input */}
                  <div className="mb-3">
                    <label className="form-label fw-bold small text-muted">Email Address</label>
                    <input type="email" className="form-control bg-light border-0 py-2" placeholder="name@example.com" />
                  </div>

                  {/* Message Input */}
                  <div className="mb-4">
                    <label className="form-label fw-bold small text-muted">Message</label>
                    <textarea className="form-control bg-light border-0" rows="4" placeholder="How can we help you?"></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill shadow-sm">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
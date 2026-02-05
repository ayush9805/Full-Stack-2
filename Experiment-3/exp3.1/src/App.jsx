import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css'; // Import the styles we just wrote

// Simple placeholders so the new links work immediately

const Contact = () => <div className="page-content"><h1>Contact Me</h1><p>Email: student@example.com</p></div>;

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
     
          
          <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
          </div>
       

        {/* Main Content Area */}
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import ProfileInfo from './ProfileInfo'; // New Component for Dashboard
import Skills from './Skills';           // New Component for Dashboard
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* TOP NAVBAR (From Code 1) */}
        <nav className="navbar">
          <Link to="/" className="logo">MyPortfolio</Link>
          <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/dashboard" className="nav-item">Dashboard</Link>
            <Link to="/about" className="nav-item">About</Link>
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        <div className="content-wrapper">
          <Routes>
            {/* Route 1: Home (Contains the Button Navigation from Code 2) */}
            <Route path="/" element={<Home />} />

            {/* Route 2: Dashboard (Contains Nested Routes from Code 3) */}
            <Route path="/dashboard" element={<Dashboard />}>
              {/* Redirect /dashboard to /dashboard/info automatically */}
              <Route index element={<Navigate to="info" replace />} />
              <Route path="info" element={<ProfileInfo />} />
              <Route path="skills" element={<Skills />} />
            </Route>

            {/* Route 3: Standard Page */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
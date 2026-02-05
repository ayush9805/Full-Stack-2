import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ProfilePic from './photo.jpg.jpeg'; 

function Dashboard() {
  const location = useLocation();

  return (
    <div className="dashboard-layout">
      {/* Sidebar / Top Section of Dashboard */}
      <div className="dashboard-header">
        <img 
        src={ProfilePic} 
         
          alt="Profile" 
          className="profile-pic"
        />
        <h2>Student Dashboard</h2>
        
        {/* Dashboard Internal Navigation */}
        <div className="dash-tabs">
          <Link 
            to="info" 
            className={`dash-tab ${location.pathname.includes('info') ? 'active' : ''}`}
          >
            Profile Info
          </Link>
          <Link 
            to="skills" 
            className={`dash-tab ${location.pathname.includes('skills') ? 'active' : ''}`}
          >
            Skills
          </Link>
        </div>
      </div>

      {/* This is where ProfileInfo or Skills will appear */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
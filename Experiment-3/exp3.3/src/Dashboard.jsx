import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

const Dashboard = () => {
  return (
    <div className="app-container">
      <header className="navbar-stack">
        <h1>MyPortfolio</h1>
        <nav>
          <ul className="nav-tabs">
            <li>
              <NavLink to="/dashboard/info" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/skills" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Skills
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-view">
        <div className="tab-card">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
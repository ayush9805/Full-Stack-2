import React, { useState } from "react";
import ProfilePic from "../image.png";
// Dummy Components (you can replace these with your real ones)
function ProfileInfo() {
  return (
    <div>
      <h3 className="section-title">About Me</h3>

      <div className="info-line">
        <span>Full Name</span>
        <p>Ayush Choudhary</p>
      </div>

      <div className="info-line">
        <span>Professional Role</span>
        <p>Full Stack Developer</p>
      </div>

      <div className="info-line">
        <span>Primary Focus</span>
        <p>Data Structures, Algorithms & System Design</p>
      </div>
    </div>
  );
}
function Skills() {
  return (
    <div>
      <h3>Technical Skills</h3>
      <ul>
        <li>Java</li>
        <li>React</li>
        <li>Node.js</li>
        <li>SQL</li>
      </ul>
    </div>
  );
}

function Dashboard() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="dashboard-layout">

      {/* Header Section */}
      <div className="dashboard-header">
        <img 
          src={ProfilePic}
          alt="Profile"
          className="profile-pic"
        />

        <h2>Student Dashboard</h2>

        {/* Tabs */}
        <div className="dash-tabs">
          <button
            className={`dash-tab ${activeTab === "info" ? "active" : ""}`}
            onClick={() => setActiveTab("info")}
          >
            Profile Info
          </button>

          <button
            className={`dash-tab ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="dashboard-content">
        {activeTab === "info" && <ProfileInfo />}
        {activeTab === "skills" && <Skills />}
      </div>

    </div>
  );
}

export default Dashboard;

import React from 'react';
import profilePic from './photo.jpg.jpeg'; 

const ProfileInfo = () => (
  <div>
    <img src={profilePic} alt="Profile" className="profile-img" />
    <h2 style={{ fontSize: '1.8rem', color: '#1e293b', marginBottom: '0.5rem' }}>Ayush Choudhary</h2>
    <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '1.5rem' }}>AIML CSE Student</p>
    <p style={{ lineHeight: '1.6', color: '#475569' }}>
      Focused on building full-stack applications like <strong></strong> and exploring Machine Learning models.
    </p>
  </div>
);

export default ProfileInfo;
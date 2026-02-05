import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <h1>Welcome Home</h1>
      <p style={{ color: '#aaa', marginBottom: '40px' }}>
        Use the buttons below to navigate 
      </p>

      {/* Button Navigation Container */}
      <div className="nav-button-container">
        <button className="nav-btn" onClick={() => navigate('/dashboard')}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Dashboard" />
          <span>Go to Dashboard</span>
        </button>

        <button className="nav-btn" onClick={() => navigate('/about')}>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828466.png" alt="About" />
          <span>Go to About</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MuscleGroups() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Navigate to home or login page
  };

  const buttonStyle = {
    backgroundColor: '#d6e6e0',
    color: '#0d0000',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '12px',
    transition: 'background-color 0.3s ease',
    alignSelf: 'flex-end', // Ensures it aligns to the bottom if using flexbox
    marginTop: 'auto', // Pushes the button to the bottom of the container
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>Muscle Groups</h2>
        <ul>
          <li><Link to="/muscle/chest">Chest</Link></li>
          <li><Link to="/muscle/back">Back</Link></li>
          <li><Link to="/muscle/biceps">Biceps</Link></li>
          <li><Link to="/muscle/triceps">Triceps</Link></li>
          <li><Link to="/muscle/shoulders">Shoulders</Link></li>
          <li><Link to="/muscle/abs">Abs</Link></li>
          <li><Link to="/muscle/legs">Legs</Link></li>
        </ul>
      </div>

      {/* Log Out button at the bottom */}
      <button
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = '#e6e9ec'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#d6e6e0'}
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
}

export default MuscleGroups;

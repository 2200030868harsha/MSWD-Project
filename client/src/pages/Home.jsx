import React from 'react';

const Home = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f0f0f0', // Light gray background color
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '2em', // Larger font size
    color: '#333', // Darker text color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Text shadow for emphasis
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Hello, Welcome to Real Estate Management System</h1>
    </div>
  );
};

export default Home;

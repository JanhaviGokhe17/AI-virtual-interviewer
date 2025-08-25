// components/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user?.name || 'User'}!</h2>
      <p>This is your AI Interview Dashboard.</p>
      <button onClick={() => {
        localStorage.removeItem('user');
        window.location.href = '/login';
      }}>Logout</button>
    </div>
  );
};

export default Dashboard;

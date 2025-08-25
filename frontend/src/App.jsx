import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/Register';
import Login from './pages/Login';
import Dashboard from './components/dashboard';

const App = () => {
  const user = localStorage.getItem('user'); // check if user exists

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

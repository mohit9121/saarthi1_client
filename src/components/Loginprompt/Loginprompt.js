// LoginPrompt.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Loginprompt.css';

const LoginPrompt = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login Required</h5>
        <p className="card-text">You must be logged in to access this page.</p>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default LoginPrompt;

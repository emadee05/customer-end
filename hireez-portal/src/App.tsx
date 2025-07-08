// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Upload from './Upload';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="logo-container">
        <img src="/assets/hireez_logo.jpg" alt="Hireez Logo" />
      </div>
      <div className="profile-container">
        <img src="/assets/me_picture.jpg" alt="Profile" />
      </div>
      <div className="container">
        <div className="button" onClick={() => navigate('/upload')}>
          <div>Upload</div>
          <small>Upload your resume to find matching jobs</small>
        </div>
        <div className="button">
          <div>Connect</div>
          <small>Draft and send cold emails to recruiters</small>
        </div>
        <div className="button">
          <div>Manage</div>
          <small>View the progress of your applications</small>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;

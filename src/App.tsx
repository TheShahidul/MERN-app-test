import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import DashboardPage from './pages/DashboardPage';
import ShopDashboard from './pages/ShopDashboard';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  const hostname = window.location.hostname;
  const isSubdomain = hostname.split('.').length > 2;

  return (
    <Router>
      <Routes>
        {isSubdomain ? (
          <Route path="/" element={<ShopDashboard />} />
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;

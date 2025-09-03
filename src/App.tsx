import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import DashboardPage from './pages/DashboardPage';
import ShopDashboard from './pages/ShopDashboard';
import HomePage from './pages/HomePage';
import CartSidebar from './pages/HomePage/components/CartSidebar';

const App: React.FC = () => {
  const hostname = window.location.hostname;
  const isSubdomain = hostname.split('.').length > 2;
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          {isSubdomain ? (
            <Route path="/" element={<ShopDashboard />} />
          ) : (
            <>
              <Route path="/" element={<HomePage setIsCartOpen={setIsCartOpen} />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </>
          )}
        </Routes>
      </Router>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </React.Fragment>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { getProfile } from '../api';
import LoadingSpinner from '../components/LoadingSpinner';

const ShopDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [shopName, setShopName] = useState('');

  useEffect(() => {
    const subdomain = window.location.hostname.split('.')[0];
    setShopName(subdomain);

    const verifySession = async () => {
      try {
        await getProfile();
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!isAuthorized) {
    const loginUrl = `http://localhost:5173/signin`;
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-2xl font-bold">Unauthorized Access</h1>
        <p className="mt-2">You must be logged in to view this shop.</p>
        <a href={loginUrl} className="px-4 py-2 mt-4 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700">
          Go to Login
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">This is the <span className="text-indigo-600">{shopName}</span> shop dashboard</h1>
    </div>
  );
};

export default ShopDashboard;
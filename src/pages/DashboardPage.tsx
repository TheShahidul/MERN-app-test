import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, logoutUser } from '../api';
import LoadingSpinner from '../components/LoadingSpinner'; // Assuming you have this component

interface UserProfile {
  username: string;
  shops: string[];
}

const DashboardPage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (_error) { // eslint-disable-line @typescript-eslint/no-unused-vars
        navigate('/signin');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      try {
        await logoutUser();
        navigate('/signin');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white shadow-lg">
        <h1 className="text-2xl font-bold">Welcome, {user?.username}</h1>
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="p-2 bg-gray-200 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 w-48 py-1 mt-2 bg-white rounded-md shadow-lg">
              {user?.shops.map(shop => (
                <a
                  key={shop}
                  href={`http://${shop}.localhost:5173`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {shop}
                </a>
              ))}
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="p-4">
        <h2 className="text-xl font-semibold">Your Shops</h2>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3">
          {user?.shops.map(shop => (
            <a 
              key={shop} 
              href={`http://${shop}.localhost:5173`} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 text-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-bold text-indigo-600">{shop}</h3>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;


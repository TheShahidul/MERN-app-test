import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome!</h1>
        <div className="flex justify-center space-x-4">
          <Link to="/signin">
            <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import Sidebar from './Sidebar';
import ShopLogo from '../../../assets/shop-logo/Shop-logo.jpg';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';

interface NavBarProps {
  setIsCartOpen: (isOpen: boolean) => void; // Add setIsCartOpen prop
}

const NavBar: React.FC<NavBarProps> = ({ setIsCartOpen }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40 border-b-2 border-red-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* 1. Left: Sidebar Menu with Logo */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="text-gray-600 hover:text-red-600">
              <FaBars className="w-6 h-6" />
            </button>
            <a href="/" className="text-2xl font-bold text-gray-800 hover:text-red-600 transition-colors duration-300 flex items-center space-x-2">
              <img src={ShopLogo} alt="Shop Logo" className=" w-12 h-8 border-solid" />
              <span className='text-4xl'>Bazar</span>
            </a>
          </div>

          {/* 2. Middle: Search Bar */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* 3. Right: Icons - Cart, Wishlist, Login/Register */}
          <div className="flex items-center space-x-6">
            <button onClick={() => setIsCartOpen(true)} className="relative flex items-center text-gray-600 hover:text-red-600 space-x-1">
              <FaShoppingCart className="w-6 h-6" />
              <span className="text-sm">Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <a href="/wishlist" className="flex items-center text-gray-600 hover:text-red-600 space-x-1">
              <FaHeart className="w-6 h-6" />
              <span className="text-sm">Wishlist</span>
            </a>
            <div className="relative">
              <button onClick={() => setLoginOpen(!isLoginOpen)} className="flex items-center text-gray-600 hover:text-red-600 space-x-1">
                <FaUser className="w-6 h-6" />
                <span className="text-sm">Login/Register</span>
              </button>
              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white">Login</a>
                  <a href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white">Register</a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  );
};

export default NavBar;

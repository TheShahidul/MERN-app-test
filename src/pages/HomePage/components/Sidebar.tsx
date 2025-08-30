
import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-red-600">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4">
          <a href="/" className="block py-2 px-4 hover:bg-red-50 hover:text-red-600 rounded-lg">Home</a>
          <a href="/products" className="block py-2 px-4 hover:bg-red-50 hover:text-red-600 rounded-lg">All Products</a>
          <h3 className="font-bold text-gray-800 mt-4 mb-2">Home Decor</h3>
          <a href="/category/living-room" className="block py-2 px-4 hover:bg-red-50 hover:text-red-600 rounded-lg">Living Room</a>
          <a href="/category/bedroom" className="block py-2 px-4 hover:bg-red-50 hover:text-red-600 rounded-lg">Bedroom</a>
          <a href="/category/kitchen-dining" className="block py-2 px-4 hover:bg-red-50 hover:text-red-600 rounded-lg">Kitchen & Dining</a>
          <a href="/category/bathroom" className="block py-2 px-4 hover:bg-red-50 hover:text-red-600 rounded-lg">Bathroom</a>
          <a href="/category/outdoor" className="block py-2 px-4 hover:bg-red-50 hover:text-red-600 rounded-lg">Outdoor</a>
          <h3 className="font-bold text-gray-800 mt-4 mb-2">Other</h3>
          <a href="/about" className="block py-2 px-4 hover:bg-red-50 hover:text-red-600 rounded-lg">About Us</a>
          <a href="/contact" className="block py-2 px-4 hover:bg-red-50 hover:text-red-600 rounded-lg">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

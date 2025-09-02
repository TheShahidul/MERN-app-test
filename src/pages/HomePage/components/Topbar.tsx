import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Assuming react-icons is installed

const Topbar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-2 text-sm">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <a href="tel:+1234567890" className="flex items-center hover:text-gray-300">
            <FaPhone className="mr-1" />
            <span>+8801886755066</span>
          </a>
          <a href="mailto:info@example.com" className="flex items-center hover:text-gray-300">
            <FaEnvelope className="mr-1" />
            <span>shahidul@bpbazar.com</span>
          </a>
          <a href="/track-order" className="hover:text-gray-300">
            Track Your Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

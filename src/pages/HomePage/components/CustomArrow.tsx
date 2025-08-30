
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CustomArrowProps {
  direction: 'prev' | 'next';
  onClick?: () => void;
}

const CustomArrow: React.FC<CustomArrowProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${direction === 'prev' ? '-left-4' : '-right-4'} z-10 bg-white bg-opacity-50 rounded-full p-2 shadow-md hover:bg-opacity-75 transition`}
  >
    {direction === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
  </button>
);

export default CustomArrow;

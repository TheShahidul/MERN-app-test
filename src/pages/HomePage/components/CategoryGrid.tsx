
import React from 'react';
import { FaCouch, FaBed, FaUtensils, FaBath, FaTree } from 'react-icons/fa';

import pic1 from '../../../assets/products/pic (1).jpg';
import pic2 from '../../../assets/products/pic (2).jpg';
import pic3 from '../../../assets/products/pic (3).jpg';
import pic4 from '../../../assets/products/pic (4).jpg';
import pic5 from '../../../assets/products/pic (5).jpg';

interface Category {
  title: string;
  link: string;
  image: string;
  icon: React.ElementType;
}

const categories: Category[] = [
  {
    title: 'Living Room',
    link: '/category/living-room',
    image: pic1,
    icon: FaCouch,
  },
  {
    title: 'Bedroom',
    link: '/category/bedroom',
    image: pic2,
    icon: FaBed,
  },
  {
    title: 'Kitchen & Dining',
    link: '/category/kitchen-dining',
    image: pic3,
    icon: FaUtensils,
  },
  {
    title: 'Bathroom',
    link: '/category/bathroom',
    image: pic4,
    icon: FaBath,
  },
  {
    title: 'Outdoor',
    link: '/category/outdoor',
    image: pic5,
    icon: FaTree,
  },
];

const CategoryGrid: React.FC = () => (
  <section className=" md:p-8 bg-gray-50">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {categories.map((cat) => (
        <a
          key={cat.title}
          href={cat.link}
          className="relative rounde p-5 bg-cover bg-center rounded-3xl overflow-hidden text-white font-bold flex flex-col items-center justify-center transition-transform transform hover:scale-105 group"
          style={{ backgroundImage: `url(${cat.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-red-600 group-hover:bg-opacity-70 transition-colors"> </div>
          <cat.icon className="relative z-10 text-4xl mb-2" />
          <span className="relative z-10 text-xl text-center">{cat.title}</span>
        </a>
      ))}
    </div>
  </section>
);

export default CategoryGrid;

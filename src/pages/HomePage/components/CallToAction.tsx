import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Aarong1 from '../../../assets/products/Aarong-1.jpeg';

const CallToAction: React.FC = () => (
    <section 
        className="relative bg-cover bg-center text-white p-20 md:p-32"
        style={{ backgroundImage: `url(${Aarong1})` }}
    >
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))'}}></div>
        <div className="relative z-10 flex flex-col items-center gap-y-16">
            <h2 className="text-4xl text-center md:text-4xl font-bold max-w-4xl mx-auto">
                Discover Unique Pieces to Beautify Your Home – Your Ultimate Destination for Home Decor!
            </h2>
            <Link to={"/products"} className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-500 transition-colors flex items-center gap-x-2">
                Shop Now <FaArrowRight />
            </Link>
        </div>
    </section>
);

export default CallToAction;
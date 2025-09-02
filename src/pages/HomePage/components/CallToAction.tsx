import React from 'react';
import { Link } from 'react-router-dom';
import Aarong1 from '../../../assets/products/Aarong-1.jpeg';

const CallToAction: React.FC = () => (
    <section 
        className="relative bg-cover bg-center text-white p-16 md:p-24"
        style={{ backgroundImage: `url(${Aarong1})` }}
    >
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))'}}></div>
        <div className="relative z-10 flex flex-col items-center gap-y-4">
            <h2 className="text-xl md:text-3xl font-bold max-w-4xl mx-auto">
                Discover Unique Pieces to Beautify Your Home – Your Ultimate Destination for Home Decor!
            </h2>
            <Link to={"/products"} className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-500 transition-colors">
                Shop Now
            </Link>
        </div>
    </section>
);

export default CallToAction;
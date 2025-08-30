import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => (
    <section className="text-center p-8 md:p-16 bg-gray-50">
        <h2 className="text-xl md:text-3xl font-bold max-w-4xl mx-auto text-gray-800">
            Explore Trendy Fashion Finds at Online Shopping BD Marketplace – Your Ultimate Fashion & Lifestyle destination in Bangladesh!
        </h2>
        <Link to={"/signup"} className="mt-6 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-500 transition-colors">
            Shop Now
        </Link>
    </section>
);

export default CallToAction;
import React from 'react';

const BannerCarousel: React.FC = () => {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto  py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Discover Trendy Styles & Home Comfort
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your one-stop shop for the latest fashion trends and cozy home essentials. Quality you can trust, at prices you'll love.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a href="#" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition-shadow shadow-lg">Shop Now</a>
              <a href="#" className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">Explore Categories</a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" 
              alt="Product Showcase" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BannerCarousel;
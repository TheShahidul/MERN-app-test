import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomArrow from './CustomArrow'; // Assuming CustomArrow is in the same directory

// Import the existing BannerCarousel content
import BannerCarousel from './BannerCarousel';

// Placeholder images for other slides
import wideView1 from '../../../assets/products/Aarong-Bedsheet (1).webp';
import wideView2 from '../../../assets/products/Aarong-window-curtain (1).webp';

const HeroSlider: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // We'll use CustomArrow
    fade: true, // For a smooth transition between slides
  };

  return (
    <section className="relative">
      <Slider ref={sliderRef} {...settings}>
        {/* Slide 1: Existing BannerCarousel content */}
        <div>
          <BannerCarousel />
        </div>

        {/* Slide 2: Placeholder wide view image */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          <img src={wideView1} alt="Wide View Product 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Explore Our New Collection</h2>
              <p className="text-lg md:text-xl mb-6">Discover unique designs and elevate your home decor.</p>
              <a href="#" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">Shop Trending Products</a>
            </div>
          </div>
        </div>

        {/* Slide 3: Placeholder wide view image */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          <img src={wideView2} alt="Wide View Product 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Unbeatable Deals Await!</h2>
              <p className="text-lg md:text-xl mb-6">Don't miss out on our limited-time offers.</p>
              <a href="#" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">View Deals</a>
            </div>
          </div>
        </div>
      </Slider>
      <CustomArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
      <CustomArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
    </section>
  );
};

export default HeroSlider;

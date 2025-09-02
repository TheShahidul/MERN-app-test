
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CustomArrow from './CustomArrow';

import pic1 from '../../../assets/products/pic (1).jpg';
import pic2 from '../../../assets/products/pic (2).jpg';
import pic3 from '../../../assets/products/pic (3).jpg';
import pic4 from '../../../assets/products/pic (4).jpg';
import pic5 from '../../../assets/products/pic (5).jpg';
import pic6 from '../../../assets/products/pic (6).jpg';
import pic7 from '../../../assets/products/pic (7).jpg';
import pic8 from '../../../assets/products/pic (8).jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  offer?: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    offer: '20% off',
    image: pic1,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 120,
    offer: 'Buy 1 Get 1',
    image: pic2,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 80,
    image: pic3,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 150,
    offer: 'Save $25',
    image: pic4,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 200,
    offer: '30% off',
    image: pic5,
  },
  {
    id: 6,
    name: 'Product 6',
    price: 220,
    image: pic6,
  },
  {
    id: 7,
    name: 'Product 7',
    price: 250,
    offer: 'Flash Sale',
    image: pic7,
  },
  {
    id: 8,
    name: 'Product 8',
    price: 180,
    offer: 'Limited Stock',
    image: pic8,
  },
];



const OfferCarousel: React.FC = () => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="p-4 md:p-8 bg-gray-50">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border border-red-600 rounded-full px-4 py-2 inline-block">Hot Offers</h2>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate text-gray-800">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-xl text-gray-800">${product.price}</span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
                      Add to Cart
                    </button>
                  </div>
                  {product.offer && (
                    <span className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                      {product.offer}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <CustomArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
        <CustomArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </section>
  );
};

export default OfferCarousel;

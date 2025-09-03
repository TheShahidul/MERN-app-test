import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

interface Product {
  id: number;
  name: string;
  image: string;
  price?: number; // Made optional
  offer?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate text-gray-800">{product.name}</h3>
        <div className="flex items-center justify-between mt-4">
          {product.price !== undefined && (
            <span className="font-bold text-xl text-gray-800">BDT {product.price.toFixed(2)}</span>
          )}
          {product.offer && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {product.offer}
            </span>
          )}
        </div>
        {product.price !== undefined && (
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-x-2"
          >
            <FaCartPlus /> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

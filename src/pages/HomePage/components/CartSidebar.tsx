import React from 'react';
import { FaTimes, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../../features/cart/cartSlice';
import type { RootState } from '../../../app/store';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getCartTotal = () => {
    return cartItems.reduce((total: number, item: { price?: number; quantity: number }) => total + (item.price ?? 0) * item.quantity, 0);
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FaTimes size={20} />
        </button>
      </div>
      <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 120px)' }}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item: { id: number; image: string; name: string; quantity: number; price?: number }) => (
            <div key={item.id} className="flex items-center justify-between mb-4 pb-4 border-b last:border-b-0">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                  <p className="text-gray-800 font-bold">${(item.price ?? 0) * item.quantity}</p>
                </div>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">
                <FaTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold">${getCartTotal().toFixed(2)}</span>
        </div>
        <button
          onClick={handleClearCart}
          className="w-full bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors mb-2"
        >
          Clear Cart
        </button>
        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;

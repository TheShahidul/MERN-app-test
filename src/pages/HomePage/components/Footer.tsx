
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 className="font-bold mb-4">Contact Us</h3>
                <p>Address: 123 Fashion St, Dhaka</p>
                <p>Phone: +880 123 456 789</p>
                <p>Email: support@myshop.com</p>
                <p>DBID: 123456789</p>
                <p>D-U-N-S: 987654321</p>
            </div>
            <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul>
                    <li><a href="/about" className="hover:text-red-400">About Us</a></li>
                    <li><a href="/careers" className="hover:text-red-400">Careers</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-4">Customer</h3>
                <ul>
                    <li><a href="/account" className="hover:text-red-400">My Account</a></li>
                    <li><a href="/orders" className="hover:text-red-400">My Orders</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-4">Help</h3>
                <ul>
                    <li><a href="/faq" className="hover:text-red-400">FAQ</a></li>
                    <li><a href="/contact" className="hover:text-red-400">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <div className="flex justify-center space-x-4 mb-4">
                <a href="#" className="hover:text-red-400"><FaFacebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-red-400"><FaInstagram className="w-6 h-6" /></a>
                <a href="#" className="hover:text-red-400"><FaTwitter className="w-6 h-6" /></a>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
                 <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <FaGooglePlay className="w-6 h-6" />
                    <span>Google Play</span>
                 </a>
                 <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <FaApple className="w-6 h-6" />
                    <span>Apple Store</span>
                </a>
            </div>
            <p>&copy; ${new Date().getFullYear()} MyShop. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;


import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowCircleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Area: Shop Info & Social Media */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-5xl font-bold text-white mb-4">BP Bazar</h3>
                <p className="text-base mb-4 max-w-xs">
                    Your ultimate destination for exquisite home decor. Discover unique pieces that transform your living space into a haven of style and comfort.
                </p>
                <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-lg">Contact us for order</h4>
                    <div className="flex items-center mb-2">
                        <FaPhone className="w-5 h-5 mr-3 text-gray-400" />
                        <a href="tel:+8801712345678" className="hover:text-red-400 transition-colors duration-300">+8801886755066</a>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="w-5 h-5 mr-3 text-gray-400" />
                        <a href="mailto:info@bpbazar.com" className="hover:text-red-400 transition-colors duration-300">shahidul@bpbazar.com</a>
                    </div>
                </div>
                <div className="flex space-x-4 mb-6">
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                        <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                        <FaTwitter className="w-6 h-6" />
                    </a>

                    

                </div>

                <h4 className="font-semibold text-white mb-3 text-lg">Secure Payments</h4>
                <div className="flex space-x-3 mb-6">
                    <FaCcVisa className="w-8 h-8 text-gray-400" />
                    <FaCcMastercard className="w-8 h-8 text-gray-400" />
                    <FaCcPaypal className="w-8 h-8 text-gray-400" />
                    {/* Add more payment icons as needed */}
                </div>
            </div>

            {/* Middle Area: Quick Links */}
            <div className="flex flex-col items-center py-16 text-center">
                <h4 className="font-semibold text-white mb-4 text-lg">Quick Links</h4>
                <ul className="space-y-2">
                    <li><Link to="/about" className="hover:text-red-400 transition-colors duration-300">About Us</Link></li>
                    <li><Link to="/contact" className="hover:text-red-400 transition-colors duration-300">Contact Us</Link></li>
                    <li><Link to="/faq" className="hover:text-red-400 transition-colors duration-300">FAQ</Link></li>
                    <li><Link to="/shipping-returns" className="hover:text-red-400 transition-colors duration-300">Shipping & Returns</Link></li>
                    <li><Link to="/privacy-policy" className="hover:text-red-400 transition-colors duration-300">Privacy Policy</Link></li>
                    <li><Link to="/terms-of-service" className="hover:text-red-400 transition-colors duration-300">Terms of Service</Link></li>
                </ul>
            </div>

           
            {/* Right Area: Find Our Store*/}
            <div className="flex flex-col items-center py-16 md:items-start text-center md:text-left">
                <h4 className="font-semibold text-white mb-4 text-lg flex items-center">
                    <FaMapMarkerAlt className="h-6 w-6 mr-2" />
                    Find Our Store
                </h4>
                <p className="text-base font-bold mb-4 hover:text-red-400 transition-colors duration-300">Mirpur 13 number mosjid market. Dhaka. Dhaka Division. Bangladesh.</p>
                <div className="border-2 hover:border-red-400 transition-colors duration-300 p-2 rounded-xl mb-6">
                    <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0000000000005!2d90.36800000000001!3d23.800000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e000000001%3A0x0!2sMirpur%2013%20Number%20Mosjid%20Market!5e0!3m2!1sen!2sbd!4v1678888888888!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map of Mirpur 13 Number Mosjid Market"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>

        <div className="max-w-6xl mx-auto flex justify-end">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-red-500 hover:text-red-700 transition-colors duration-300"
                aria-label="Go to top"
            >
                <FaArrowCircleUp className="w-10 h-10" />
            </button>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-auto pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>SHAHIDUL. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;

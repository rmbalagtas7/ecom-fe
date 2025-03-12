import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-3xl text-yellow-600">💎</span>
          </div>
          <p className="text-gray-600 mb-4">
            Discover the finest gold jewelry, crafted with elegance and precision. Shop now for timeless beauty.
          </p>
          <div className="flex space-x-4 text-gray-500">
            <FaFacebookF className="hover:text-yellow-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaGithub className="hover:text-gray-900 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Shop</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Necklaces</li>
            <li>Rings</li>
            <li>Bracelets</li>
            <li>Earrings</li>
            <li>Custom Jewelry</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Customer Service</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">About Us</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Our Story</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Legal</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Warranty</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600 text-sm">
        © 2024 Gold Luxe, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

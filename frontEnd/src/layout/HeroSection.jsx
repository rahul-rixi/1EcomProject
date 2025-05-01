import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const HeroSection = () => {
  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="w-[90%] max-w-7xl grid grid-cols-1 md:grid-cols-2 bg-white border">
        
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="flex items-center space-x-4">
            <div className="h-px w-10 bg-gray-500"></div>
            <p className="text-sm font-semibold text-gray-600">OUR BESTSELLERS</p>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-semibold mt-4">Latest Arrivals</h1>

          <div className="mt-8 flex items-center space-x-4">
            <button className="text-md font-semibold text-gray-800">SHOP NOW</button>
            <div className="h-px w-10 bg-gray-500"></div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="bg-pink-200 flex items-center justify-center p-0 m-0">
          <img src={assets.hero_img} alt="Hero" className="" />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;

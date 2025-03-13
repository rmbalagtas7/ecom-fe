import React from "react";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Left Side - Images */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://theworldofglitters.com/ph/wp-content/uploads/2024/06/iStock-494833184-gold-jewelry.jpg"
            alt="Gold Jewelry Collection"
            className="rounded-lg shadow-md w-full"
          />
          <div className="absolute bottom-[-20px] right-4 md:right-[-30px] bg-white p-2 rounded-full shadow-md">
            <img
              src="https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/daffney1-n/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/stone3/diamond-Brillant_AAA/alloycolour/yellow.jpg"
              alt="Ring Detail"
              className="rounded-full w-20 md:w-24"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            New Collection Is Out Now!
          </h2>
          <p className="text-gray-600 mt-4">
            The origins of the first constellations date back to prehistoric
            times. Their purpose was to tell stories of their beliefs,
            experiences, creation, or mythology.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-2 text-gray-800 border border-gray-800 rounded-full hover:bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:text-white transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

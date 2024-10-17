import React from 'react';
import law from '../assets/images/law.png';

const Hero = () => {
  return (
    <section className="relative bg-neutral-200">
      {/* Full width, fixed height for rectangle shape */}
      <div className="w-full h-[60vh]">
        {/* Background image */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${law})` }}
        >
          {/* Text on top of the image */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
              EXPERT LEGAL SOLUTIONS FOR YOUR NEEDS
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

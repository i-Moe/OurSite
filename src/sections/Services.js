import React from 'react';
import { FaPaintBrush, FaCode, FaLanguage } from 'react-icons/fa';
import HalfMoonDivider2 from '../assets/something/half-moon2.svg' // Example icons from react-icons

const Services = () => {
  return (
    <>
    <section id="services" className="pt-40 pb-16 bg-lemon relative z-[-110] mt-[-150px]">
      <div className="container-max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Graphic Design Card */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-cream p-6 rounded-xl shadow-solid border border-choco text-center">
              <FaPaintBrush className="text-4xl text-mint mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-gray-600">Creating visually stunning graphics to represent your brand and ideas effectively.</p>
            </div>
          </div>

          {/* Web Development/Coding Card */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-cream p-6 rounded-xl shadow-solid border border-choco text-center">
              <FaCode className="text-4xl text-mint mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Building responsive and interactive websites to enhance your online presence.</p>
            </div>
          </div>

          {/* Translation Card */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-cream p-6 rounded-xl shadow-solid border border-choco text-center">
              <FaLanguage className="text-4xl text-mint mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Translation</h3>
              <p className="text-gray-600">Providing accurate and reliable translation services for various languages.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <img
        src={HalfMoonDivider2}
        alt="Half Moon divider"
        className="block w-full 
        
        
        relative mt-[-3px]
          h-[40px] sm:h-[60px] lg:h-[100px]"
      />

      </>
  );
};

export default Services;

import React from 'react';
import { FaPaintBrush, FaCode, FaLanguage } from 'react-icons/fa'; // Example icons from react-icons

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Graphic Design Card */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaPaintBrush className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
              <p className="text-gray-600">Creating visually stunning graphics to represent your brand and ideas effectively.</p>
            </div>
          </div>

          {/* Web Development/Coding Card */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaCode className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Building responsive and interactive websites to enhance your online presence.</p>
            </div>
          </div>

          {/* Translation Card */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaLanguage className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Translation</h3>
              <p className="text-gray-600">Providing accurate and reliable translation services for various languages.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

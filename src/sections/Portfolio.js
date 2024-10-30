import React from 'react';
import WavyMirroredDivider from '../assets/something/wavy-steps-mirrored.svg'
import Dashboard from '../assets/images/monthlyRep.png'
import Onsite from '../assets/images/onsite.png'
import Website from '../assets/images/website.png'
import HisRep from '../assets/images/hisRep.png'
// Sample portfolio items
const portfolioItems = [
  {
    title: 'Automated Dashboard',
    description: 'A creative and innovative design for a modern application.',
    image: Dashboard,
  },
  {
    title: 'On-site Consultancy',
    description: 'A visually appealing website with a focus on user experience.',
    image: Onsite,
  },
  {
    title: 'Website',
    description: 'An elegant and functional e-commerce platform.',
    image: Website,
  },
  {
    title: 'Historical Analysis',
    description: 'An elegant and functional e-commerce platform.',
    image: HisRep,
  }
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <>
    
    <section id="portfolio" className="py-40 bg-vitamin relative z-[-105] mt-[-145px]">
      <div className="container-max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-choco">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-cream shadow-solid border border-choco rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <img
        src={WavyMirroredDivider}
        alt="Wavy Mirrored divider"
        className="block w-full mt-[-3px]"
      />
    </>
  );
};

export default Portfolio;

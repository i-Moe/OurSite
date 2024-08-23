import React from 'react';

// Sample portfolio items
const portfolioItems = [
  {
    title: 'Project One',
    description: 'A creative and innovative design for a modern application.',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Project Two',
    description: 'A visually appealing website with a focus on user experience.',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Project Three',
    description: 'An elegant and functional e-commerce platform.',
    image: 'https://via.placeholder.com/600x400',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-40 bg-vitamin relative z-[-100] mt-[-120px]">
      <div className="container-max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-choco">Portfolio</h2>
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
  );
};

export default Portfolio;

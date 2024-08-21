// components/Homepage.js
import React from 'react';
import Hero from '../sections/Hero';      // Import your Hero section component
import About from '../sections/About';    // Import your About section component
import Portfolio from '../sections/Portfolio'; // Import your Portfolio section component
import Services from '../sections/Services';   // Import your Services section component
import Contact from '../sections/Contact';     // Import your Contact section component

const Homepage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  );
};

export default Homepage;
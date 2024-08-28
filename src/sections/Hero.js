import React from "react";
import HalfMoonDivider from "../assets/something/half-moon.svg";

const Hero = () => {
  return (
    <>
      <section className="bg-mint min-h-screen flex items-center justify-center">
        <div className="container-max-w-5xl text-center">
          <h1 className="text-cream text-7xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-cream text-lg mb-8">
            Discover my work and skills in design, web development, and more.
          </p>
          <a
            href="#contact"
            className="bg-vitamin text-cream border border-vitamin px-6 py-3 rounded-lg font-semibold hover:bg-cream hover:text-vitamin transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
      
      <img
        src={HalfMoonDivider}
        alt="Half Moon divider"
        className="block w-full 
        
        
        relative mt-[-3px]
          h-[40px] sm:h-[60px] lg:h-[100px]"
      />

      {/* <img
        src={WavyDivider}
        alt="Wavy divider"
        className="block w-full mt-[-3px]"
      /> */}
    </>
  );
};

export default Hero;

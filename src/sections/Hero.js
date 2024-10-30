import React from "react";
import CatImage from "../assets/images/cat_no_bg.png";
import HalfMoonDivider from "../assets/something/half-moon.svg";

const Hero = () => {
  return (
    <>
      <section className="bg-mint min-h-screen flex items-center justify-center">
        <div className="container-max-w-5xl flex flex-col sm:flex-row items-center sm:items-start justify-between text-center sm:text-left sm:px-10">
          <div className="sm:w-2/3 mb-8 sm:mb-0">
            <h1 className="text-cream text-stroke text-stroke-choco text-shadow-choco text-7xl font-bold mb-4">
              Hello, my friends!
              <br />This is Theo & Moe!
            </h1>
            <p className="text-cream text-lg mb-8">
              Discover my work and skills in design, web development, and more.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-vitamin text-cream border border-vitamin px-6 py-3 rounded-full font-semibold hover:bg-cream hover:text-vitamin transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="sm:w-1/3">
            <img src={CatImage} alt="Cat" className="w-3/5 sm:w-full h-auto mx-auto rotate-3" />
          </div>
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

// components/Hero.js
import React from "react";
import WavyDivider from "../assets/something/wavy-steps.svg";
import HalfMoonDivider from "../assets/something/half-moon.svg";


const Hero = () => {
  return (
    <>
      <section className="bg-blue-500 min-h-screen flex items-center justify-center">
        <div className="container-max-w-5xl text-center">
          <h1 className="text-white text-7xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-white text-lg mb-8">
            Discover my work and skills in design, web development, and more.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>

      <img
        src={WavyDivider}
        alt="Wavy divider"
        className="block w-full mt-[-3px]"
      />
    </>
  );
};

export default Hero;

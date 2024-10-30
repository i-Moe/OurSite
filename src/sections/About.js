import React from "react";
import profileImage from "../assets/images/giphy.webp";
import WavyDivider from "../assets/something/wavy-steps.svg";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-40 bg-cream relative z-[-100] mt-[-120px]"
      >
        <div className="container-max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            {/* Profile Image (Optional) */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-auto rounded-full shadow-lg"
              />
            </div>
            {/* About Me Text */}
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold text-mint mb-4">
                About Us
              </h2>
              <p className="text-lg text-choco mb-4">
                Hello! I’m [Your Name], a passionate [Your Profession] based in
                [Your Location]. I love creating beautiful and functional
                designs that make a difference.
              </p>
              <p className="text-lg text-choco">
                With a background in [Your Background or Experience], I
                specialize in [Your Specialization or Skills]. When I’m not
                working, you can find me [Your Hobbies or Interests]. Feel free
                to connect with me on [Your Social Media or Contact
                Information].
              </p>
            </div>
          </div>
        </div>
      </section>


      <img
        src={WavyDivider}
        alt="Wavy divider"
        className="block w-full mt-[-3px]"
      />


      {/* <img
        src={HalfMoonDivider}
        alt="Half Moon divider"
        className="block w-full relative 
          top-[-90px] sm:top-[-75px] lg:top-[-40px]
          h-[40px] sm:h-[60px] lg:h-[100px]"
      /> */}


      {/* <img
        src={HalfMoonDivider}
        alt="Half Moon divider"
        className="block w-full relative top-[-60px] mt-[-3px]
          h-[40px]       // Default height for small screens
          sm:h-[60px]    // Height for medium screens and up (md breakpoint)
          lg:h-[100px]    // Height for large screens and up (lg breakpoint)
        "
      /> */}
    </>
  );
};

export default About;

import React from 'react';
import profile from '../assets/profile.jpg'; // Correct import

const Hero = () => {
  return (
    <section className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Radith Yugan Wijerathna</h1>
          <p className="text-lg mb-6">
            A Passionate Full-Stack Developer, Ready to build amazing web applications!
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            See My Work
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={profile} 
            alt="Radith Yugan Wijerathna"
            className="w-64 h-64 object-cover rounded-lg mx-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

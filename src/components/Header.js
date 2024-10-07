// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-gray-200 text-black p-4 fixed w-full top-0">
      <nav className="container mx-auto flex justify-between">
        <div className='leading-[20px]'>
          <h1 className="text-2xl font-bold">Radith Yugan Wijerathna</h1>
        </div>
        
        <div className='menu justify-between' >
        <ul className="flex space-x-20  text-xl font-semibold">
          <li><a href="#about" className="hover:text-red-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
        </div>

        <div className="hidden md:block">
          <button className="flex items-center justify-center font-bold text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-3xl transition-all duration-300 ease-in-out">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> {/* Icon */}
            Message 
          </button>
        </div>

        
      </nav>
    </header>
  );
};

export default Header;

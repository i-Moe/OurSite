import React, { useState, useEffect } from 'react';
// import { bubble as Menu } from 'react-burger-menu';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

     // Close the dropdown menu when scrolling
     useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                closeMenu();
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);


    return (
        <header className="bg-purple-600 text-white sticky top-0 z-50">
            <div className="container-max-w-5xl mx-auto px-4 flex justify-between items-center h-16 relative">
                {/* Logo */}
                <div className="text-2xl font-bold">My Logo</div>

                {/* Hamburger Menu (Mobile) */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>

                {/* Menu (Desktop) */}
                <nav className="hidden sm:flex space-x-6">
                    <a href="#about" className="hover:text-gray-300">About</a>
                    <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
                    <a href="#services" className="hover:text-gray-300">Services</a>
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                </nav>
            </div>


<div
    className={`absolute top-0 left-0 w-full z-[-10] bg-purple-500 transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
    }`}
>
    <nav className="flex flex-col items-center pt-16 pb-5">
        <a
            href="#about"
            className={`block px-4 py-2 hover:bg-purple-400 w-full text-center transform transition duration-300 hover:text-white ${isOpen ? 'animate-scale-up-and-shake' : ''}`}
        >
            About
        </a>
        <a
            href="#portfolio"
            className={`block px-4 py-2 hover:bg-purple-400 w-full text-center transform transition duration-300 hover:text-white ${isOpen ? 'animate-scale-up-and-shake' : ''}`}
        >
            Portfolio
        </a>
        <a
            href="#services"
            className={`block px-4 py-2 hover:bg-purple-400 w-full text-center transform transition duration-300 hover:text-white ${isOpen ? 'animate-scale-up-and-shake' : ''}`}
        >
            Services
        </a>
        <a
            href="#contact"
            className={`block px-4 py-2 hover:bg-purple-400 w-full text-center transform transition duration-300 hover:text-white ${isOpen ? 'animate-scale-up-and-shake' : ''}`}
        >
            Contact
        </a>
    </nav>
</div>

        </header>
    );
};

export default Navbar;

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <div className="mt-2">
                    <a href="#about" className="text-gray-400 hover:text-gray-300 mx-2">About</a>
                    <a href="#portfolio" className="text-gray-400 hover:text-gray-300 mx-2">Portfolio</a>
                    <a href="#services" className="text-gray-400 hover:text-gray-300 mx-2">Services</a>
                    <a href="#contact" className="text-gray-400 hover:text-gray-300 mx-2">Contact</a>
                </div>
                <p className="text-sm my-2">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
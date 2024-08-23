import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-choco text-cream py-4">
            <div className="container mx-auto text-center">
                <div className="mt-2">
                    <a href="#about" className="text-cream hover:text-lemon mx-2">About</a>
                    <a href="#portfolio" className="text-cream hover:text-vitamin mx-2">Portfolio</a>
                    <a href="#services" className="text-cream hover:text-lemon mx-2">Services</a>
                    <a href="#contact" className="text-cream hover:text-vitamin mx-2">Contact</a>
                </div>
                <p className="text-sm my-2">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
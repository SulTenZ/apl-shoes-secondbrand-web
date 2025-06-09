// src/sections/Navbar.jsx
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-colors duration-500 ${
        isScrolled ? 'bg-black' : 'bg-black/5 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="APL Shoes Logo" className="w-10 h-10 rounded-lg shadow-inner object-cover" />
          <span className="font-main font-black text-xl text-white tracking-wide">APL Shoes Secondbrand</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 font-semibold text-sm tracking-widest">
          <Link
            to="/"
            className={`text-white hover:text-gray-300 transition-colors duration-300 ${
              location.pathname === '/' ? 'underline underline-offset-4' : ''
            }`}
          >
            HOME
          </Link>
          <Link
            to="/products"
            className={`text-white hover:text-gray-300 transition-colors duration-300 ${
              location.pathname === '/products' ? 'underline underline-offset-4' : ''
            }`}
          >
            PRODUCTS
          </Link>
        </div>
      </div>
    </nav>
  );
}

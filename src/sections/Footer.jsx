// src/sections/Footer.jsx
import logo from '../assets/logo.png';
import ShinyText from './components/ShinyText';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-950 to-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">

          {/* Logo + Brand Name with ShinyText */}
          <div className="flex justify-center items-center space-x-3">
            <img
              src={logo}
              alt="APL Shoes Logo"
              className="w-10 h-10 rounded-lg shadow-inner object-cover"
            />
            <ShinyText
              text="APL Shoes Secondbrand"
              speed={6}
              className="font-main font-black text-xl tracking-wide"
            />
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-gray-500">
              &copy; 2025 APL Shoes Secondbrand. Crafted with modern design principles.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

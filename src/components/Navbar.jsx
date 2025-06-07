import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Kiri: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg">APL Shoes</span>
        </div>

        {/* Tengah: Menu */}
        <div className="space-x-6 font-semibold hidden md:flex">
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
        </div>

        {/* Kanan: Search */}
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full px-4 py-1 text-black w-40"
          />
        </div>
      </div>
    </nav>
  );
}

export default function Footer() {
  const menu = [
    { label: "ABOUT US", link: "#about" },
    { label: "OUR COLLECTION", link: "#products" },
    { label: "FAQ", link: "#faq" },
    { label: "CONTACT US", link: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-gray-950 to-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          
          {/* Menu */}
          <div className="flex flex-wrap justify-center gap-8 font-semibold text-sm tracking-widest">
            {menu.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                className="text-white/60 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_4px_8px_rgba(255,255,255,0.2)]"
              >
                {item.label}
              </a>
            ))}
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

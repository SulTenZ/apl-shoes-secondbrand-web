export default function Footer() {
  const menu = ["ABOUT US", "PRODUCTS", "FAQ", "CONTACT US"];

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-wrap justify-center gap-8 font-semibold text-sm">
          {menu.map((item, index) => (
            <a href="#" key={index} className="hover:underline">
              {item}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400">&copy; 2025 APL Shoes Secondbrand</p>
      </div>
    </footer>
  );
}

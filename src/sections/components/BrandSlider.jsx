// src/sections/components/BrandSlider.jsx
export default function BrandSlider({ brands }) {
  const allBrands = [...brands, ...brands, ...brands]; // Gandakan agar bisa infinite loop

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="flex w-max animate-marquee whitespace-nowrap items-center">
        {allBrands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-6 h-20 w-40 flex-shrink-0"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-24 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

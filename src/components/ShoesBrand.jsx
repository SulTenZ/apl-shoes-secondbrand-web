export default function ShoesBrand() {
  const brands = [
    { name: "Nike", src: "/brands/nike.png" },
    { name: "Le Coq Sportif", src: "/brands/lecoq.png" },
    { name: "Adidas", src: "/brands/adidas.png" },
    { name: "New Balance", src: "/brands/newbalance.png" },
    { name: "Under Armour", src: "/brands/underarmour.png" },
    { name: "Louis Vuitton", src: "/brands/lv.png" },
  ];

  const allBrands = [...brands, ...brands]; // Duplicate untuk efek looping

  return (
    <section className="py-10 bg-white border-t border-gray-300 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="relative overflow-hidden">
          <div className="flex w-[200%] marquee-track">
            {allBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/6 flex justify-center items-center"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-12 grayscale opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

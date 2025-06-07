export default function OurCollection() {
  const dummyProducts = [
    { id: 1, image: '/products/shoes1.png' },
    { id: 2, image: '/products/shoes2.png' },
    { id: 3, image: '/products/shoes3.png' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">KOLEKSI KAMI</h2>
          <span className="text-xl">→</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dummyProducts.map((product) => (
            <div key={product.id} className="shadow-md bg-gray-100 aspect-square flex items-center justify-center">
              <img src={product.image} alt="Produk" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

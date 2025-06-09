export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden hover:from-white/15 hover:to-white/8 hover:border-white/20 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
      {/* Gambar */}
      <div className="aspect-square flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.nama}
          className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay Nama Produk */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-bold text-center px-4">
          {product.nama}
        </h3>
      </div>
    </div>
  );
}

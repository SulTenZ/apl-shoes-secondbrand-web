// src/pages/Product.jsx
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import ProductCard from "../sections/components/ProductCard";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <div className="min-h-screen font-secondary bg-gradient-to-t from-gray-950 via-black to-gray-950">
      {/* Navbar */}
      <Navbar />

      {/* Header Section - Dipercantik */}
      <div className="pt-28 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-main text-4xl md:text-5xl font-black text-white mb-6 tracking-wide">
            KOLEKSI LENGKAP
            <span className="block text-white/80">PRODUK KAMI</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Temukan beragam sepatu secondbrand premium dengan harga terbaik
          </p>
        </div>
      </div>

      {/* Grid Produk - Dipercantik */}
      <div className="max-w-8xl mx-auto px-6 pb-24">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white/60 text-3xl">👟</span>
            </div>
            <p className="text-white/60 text-lg">Belum ada produk tersedia.</p>
          </div>
        ) : (
          <>
            {/* Info Jumlah Produk */}
            <div className="mb-8">
              <p className="text-white/60 text-sm font-semibold tracking-wide">
                MENAMPILKAN {products.length} PRODUK
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="transform hover:scale-105 transition-transform duration-300">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
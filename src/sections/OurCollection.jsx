// src/sections/OurCollection.jsx
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import ProductCard from "./components/ProductCard";
import { Link } from "react-router-dom";

export default function OurCollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts({ limit: 3 }).then(setProducts);
  }, []);

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="font-main text-5xl font-black text-white tracking-wide">
            OUR COLLECTION
          </h2>
          <Link to="/products">
            <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center hover:from-white/15 hover:to-white/8 transition-all duration-300 cursor-pointer group shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]">
              <span className="text-white/60 group-hover:text-white/80 text-xl transition-colors duration-300">→</span>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

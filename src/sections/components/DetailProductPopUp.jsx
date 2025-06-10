import { useState, useEffect } from "react";

export default function DetailProductPopUp({ product, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (product) {
      setIsVisible(true);
    }
  }, [product]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setIsVisible(false);
    }, 500);
  };

  if (!product) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center px-4 transition-all duration-500 ease-out ${
        isVisible && !isClosing ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 backdrop-blur-none'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`bg-gradient-to-b from-gray-900 to-black text-white rounded-xl p-6 w-full max-w-2xl shadow-2xl relative border border-gray-700/50 transition-all duration-500 ease-out ${
          isVisible && !isClosing 
            ? 'scale-100 translate-y-0 rotate-0 opacity-100' 
            : 'scale-75 -translate-y-8 rotate-3 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-white/80 hover:text-red-400 text-2xl transition-colors duration-200"
        >
          &times;
        </button>

        <h2 className="font-main text-3xl font-bold mb-2 text-white tracking-wide">
          {product.nama}
        </h2>
        <p className="text-gray-300 mb-6 text-lg">{product.deskripsi}</p>

        <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-600/30">
          <p className="text-white">
            <strong>Harga:</strong> 
            <span className="text-2xl font-bold ml-2">Rp{product.harga.toLocaleString()}</span>
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xl text-white">Ukuran & Stok:</h3>
          {product.sizes.length > 0 ? (
            <div className="space-y-2">
              {product.sizes.map((s, index) => (
                <div key={index} className="p-3 bg-gray-800/30 rounded-lg border border-gray-600/20">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Ukuran {s.label}</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-white font-semibold">
                      {s.quantity} pcs
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 ml-2">Belum ada data ukuran.</p>
          )}
        </div>
      </div>
    </div>
  );
}
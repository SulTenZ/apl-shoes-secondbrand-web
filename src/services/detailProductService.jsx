// src/services/detailProductService.jsx

export const getProductDetail = async (id) => {
  try {
    const response = await fetch(`/api/product/${id}`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal mengambil detail produk");
    }

    const product = result.data;

    // Pastikan struktur size dan label aman
    const sizes = Array.isArray(product.sizes)
      ? product.sizes.map((s) => ({
          label: s.size?.label || "-", // aman dari null
          quantity: s.quantity,
        }))
      : [];

    return {
      nama: product.nama,
      deskripsi: product.deskripsi,
      harga: product.hargaJual, // hanya harga jual
      sizes, // hasil map aman
    };
  } catch (error) {
    console.error("Error saat mengambil detail produk:", error);
    return null;
  }
};

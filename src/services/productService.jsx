// src/services/productService.jsx

export const getAllProducts = async (params = {}) => {
  try {
    // Convert parameter object to query string
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`/api/product?${query}`);

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal mengambil data produk");
    }

    // Kembalikan array produk saja
    return result.data;
  } catch (error) {
    console.error("Error saat fetch produk:", error);
    return [];
  }
};

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-100 border-t border-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Kiri: Foto atau placeholder */}
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/3] bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
            [ Image Placeholder ]
          </div>
        </div>

        {/* Kanan: Teks */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">[ About Us ]</h2>
          <p className="text-gray-700 leading-relaxed">
            [ Paragraf lorem ipsum placeholder. Silakan isi tentang deskripsi APL Shoes Secondbrand di sini. ]
          </p>
        </div>
      </div>
    </section>
  );
}

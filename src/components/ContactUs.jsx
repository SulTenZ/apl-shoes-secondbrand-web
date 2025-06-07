export default function ContactUs() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Kiri: Info Kontak / Form / Tombol Sosial */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold">Contact Us</h2>

          <p className="text-gray-700">
            [ Tulis deskripsi toko, jam buka, atau info kontak di sini. ]
          </p>

          <div className="flex space-x-4 pt-4">
            <a href="https://wa.me/your_number" target="_blank">
              <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/your_store" target="_blank">
              <img src="/icons/instagram.png" alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Kanan: Embed Google Maps */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

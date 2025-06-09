import ShinyText from "./components/ShinyText";
import SpotlightCard from "./components/SpotlightCard"; // pastikan path sesuai

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        {/* Left: Contact Info */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="font-main text-5xl font-black text-white tracking-wide">
            CONTACT US
          </h2>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              Ready to find your next favorite pair? Get in touch with us
              through our social channels or visit our store location.
            </p>

            <div className="flex flex-col gap-4">
              {/* WhatsApp Info */}
              <SpotlightCard
                spotlightColor="rgba(0, 229, 255, 0.1)"
                className="flex items-center space-x-4 p-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/1 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl flex items-center justify-center">
                  <span className="text-green-400 text-xl">📱</span>
                </div>
                <div>
                  <p className="text-white font-semibold">WhatsApp</p>
                  <p className="text-gray-400 text-sm">+6281251984018</p>
                </div>
              </SpotlightCard>

              {/* Instagram Info */}
              <SpotlightCard
                spotlightColor="rgba(255, 0, 200, 0.1)"
                className="flex items-center space-x-4 p-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/1 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-600/10 rounded-xl flex items-center justify-center">
                  <span className="text-pink-400 text-xl">📷</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Instagram</p>
                  <p className="text-gray-400 text-sm">@apl_shoes_berau</p>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-4 pt-4">
            <a
              href="https://wa.me/6281251984018"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 text-center bg-gradient-to-r from-green-500/20 to-green-600/10 text-green-400 font-semibold rounded-2xl border border-green-500/20 hover:from-green-500/30 hover:to-green-600/20 hover:border-green-500/30 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(34,197,94,0.1)]"
            >
              <ShinyText
                text="WhatsApp"
                speed={3}
                className="text-lg font-bold"
              />
            </a>

            <a
              href="https://www.instagram.com/apl_shoes_berau"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 text-center bg-gradient-to-r from-pink-500/20 to-purple-600/10 text-pink-400 font-semibold rounded-2xl border border-pink-500/20 hover:from-pink-500/30 hover:to-purple-600/20 hover:border-pink-500/30 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(236,72,153,0.1)]"
            >
              <ShinyText
                text="Instagram"
                speed={3}
                className="text-lg font-bold"
              />
            </a>
          </div>
        </div>

        {/* Right: Map */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-[4/3] rounded-3xl border border-white/10 overflow-hidden shadow-[inset_0_4px_8px_rgba(255,255,255,0.05),0_12px_40px_rgba(0,0,0,0.4)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.996862189846!2d117.5017175!3d2.1548819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320df5162aa6a425%3A0x681bfcd721257e6f!2sapl%20shoes%20secondbrand%20berau!5e0!3m2!1sid!2sid!4v1749387176522!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="APL Shoes Secondbrand Berau"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

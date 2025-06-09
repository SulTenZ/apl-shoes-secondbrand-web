import logo from '../assets/logo.png';
import GlareHover from './components/GlareHover';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Logo with Glare on Image only */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative rounded-2xl p-6 border-white/30">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <img
                src={logo}
                alt="APL Shoes Logo"
                className="w-90 h-90 object-contain rounded-2xl"
              />
            </GlareHover>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="font-main text-5xl font-black text-white tracking-wide mb-6">
            ABOUT US
          </h2>

          <div className="space-y-4 text-xl">
            <p className="text-gray-300 leading-relaxed">
              We specialize in premium secondhand authentic shoes from the world's most coveted brands. Every pair in our collection is carefully curated and verified for authenticity.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to make luxury footwear accessible while promoting sustainable fashion through quality pre-owned pieces.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

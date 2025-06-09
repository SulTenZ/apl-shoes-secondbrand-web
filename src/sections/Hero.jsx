import heroTexture from '../assets/hero-texture.png';
import DecryptedText from './components/DecryptedText'; // ✅ sesuaikan jika path berbeda

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroTexture})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03),transparent)] opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.02),transparent)] opacity-30 z-0"></div>

      <div className="relative z-10 text-center px-6 max-w-l mx-auto">
        <h1 className="text-5xl md:text-8xl font-black text-transparent mb-8 tracking-wide leading-tight font-main">
          <span className="block">
            <DecryptedText
              text="FIND UR SECONDBRAND"
              animateOn="view"
              revealDirection="center"
              sequential={true}
              maxIterations={10}
              speed={40}
              className="stroke-text"
              encryptedClassName="text-gray-600"
            />
          </span>
          <span className="block">
            <DecryptedText
              text="SHOES HERE"
              animateOn="view"
              revealDirection="center"
              sequential={true}
              maxIterations={10}
              speed={40}
              className="stroke-text"
              encryptedClassName="text-gray-600"
            />
          </span>
        </h1>

        <div className="mt-12">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all duration-300 shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] hover:scale-105 tracking-wide">
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
}

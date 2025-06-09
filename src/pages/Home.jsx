// src/pages/Home.jsx
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import AboutUs from '../sections/AboutUs';
import OurCollection from '../sections/OurCollection';
import FAQ from '../sections/FAQ';
import ContactUs from '../sections/ContactUs';
import Footer from '../sections/Footer';
import ShoesBrand from '../sections/ShoesBrand';

export default function Home() {
  return (
    <div className="font-secondary min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ShoesBrand />
      <AboutUs />
      <OurCollection />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

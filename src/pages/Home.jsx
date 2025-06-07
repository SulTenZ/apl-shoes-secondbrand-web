import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurCollection from '../components/OurCollection';
import FAQ from '../components/FAQ';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import ShoesBrand from '../components/ShoesBrand';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShoesBrand />
      <AboutUs />
      <OurCollection />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}

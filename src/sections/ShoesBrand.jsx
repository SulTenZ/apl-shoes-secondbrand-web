// src/sections/ShoesBrand.jsx
import BrandSlider from "./components/BrandSlider";

// import gambar logo brand
import nikeLogo from "../assets/nike.png";
import leCoqLogo from "../assets/le-coq-sportif.png";
import adidasLogo from "../assets/adidas.png";
import newBalanceLogo from "../assets/new-balance.png";
import underArmourLogo from "../assets/under-armour.png";
import louisVuittonLogo from "../assets/louis-vuitton.png";

export default function ShoesBrand() {
  const brands = [
    { name: "Nike", logo: nikeLogo },
    { name: "Le Coq Sportif", logo: leCoqLogo },
    { name: "Adidas", logo: adidasLogo },
    { name: "New Balance", logo: newBalanceLogo },
    { name: "Under Armour", logo: underArmourLogo },
    { name: "Louis Vuitton", logo: louisVuittonLogo },
  ];

  return (
    <section className="bg-white py-10 overflow-hidden">
      <BrandSlider brands={brands} />
    </section>
  );
}

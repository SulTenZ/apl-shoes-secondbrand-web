// src/sections/FAQ.jsx
import { useState } from 'react';
import FAQCard from './components/FAQCard';

export default function FAQ() {
  const faqs = [
    {
      question: "Apakah sepatu ini 100% original?",
      answer: "Semua sepatu yang kami jual adalah secondbrand original & bergaransi tukar.",
    },
    {
      question: "Apakah ada toko offline?",
      answer: "Untuk saat ini, kami hanya melayani secara online.",
    },
    {
      question: "Apakah tersedia pembelian secara online?",
      answer: "Ya! Kamu bisa memesan langsung melalui WhatsApp atau marketplace kami.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-main text-5xl font-black text-white tracking-wide mb-16 text-left">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQCard
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

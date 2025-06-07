import { useState } from 'react';

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
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl px-6 py-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "↗"}</span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

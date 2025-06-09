// src/sections/components/FAQCard.jsx
export default function FAQCard({ faq, isOpen, onToggle }) {
  return (
    <div
      className="group bg-gradient-to-br from-white/5 to-white/1 rounded-3xl border border-white/10 overflow-hidden hover:from-white/8 hover:to-white/2 hover:border-white/20 transition-all duration-500 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]"
    >
      <div
        className="px-8 py-6 cursor-pointer flex justify-between items-center"
        onClick={onToggle}
      >
        <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
        <div className="w-8 h-8 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]">
          <span className="text-white/60 text-lg transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
            {isOpen ? "-" : "+"}
          </span>
        </div>
      </div>
      <div className={`px-8 pb-6 transition-all duration-500 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="pt-2 border-t border-white/10">
          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
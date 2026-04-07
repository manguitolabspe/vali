import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "¿Qué documentos necesito para solicitar un préstamo?",
    a: "Solo necesitas tu DNI vigente y ser mayor de edad. No solicitamos boletas de pago ni avales.",
  },
  {
    q: "¿Cuánto tiempo tengo para pagar mi préstamo?",
    a: "Ofrecemos plazos flexibles desde 1 hasta 12 meses. Puedes renovar tu contrato si lo necesitas.",
  },
  {
    q: "¿Mis prendas están seguras?",
    a: "Absolutamente. Contamos con bóvedas de alta seguridad y vigilancia las 24 horas. Tus artículos están asegurados.",
  },
  {
    q: "¿Puedo pagar antes de tiempo?",
    a: "Sí, puedes realizar pagos anticipados o cancelar tu préstamo en cualquier momento sin penalizaciones.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-primary">Preguntas Frecuentes</h2>
          <p className="text-gray-600">Todo lo que necesitas saber sobre nuestros servicios.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-primary text-lg">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

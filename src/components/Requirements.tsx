import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reqs = [
  "Ser mayor de edad (18+ años).",
  "DNI, Pasaporte o Carnet de Extranjería vigente.",
  "Artículo de valor en buen estado (Joyas, Tech, etc).",
  "Ser propietario legítimo del artículo.",
  "Correo electrónico y número de teléfono activo.",
];

export const Requirements = () => {
  return (
    <section id="requisitos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-primary">Requisitos Mínimos</h2>
              <p className="text-gray-600 text-lg">
                Obtener tu préstamo es más fácil de lo que crees. Solo asegúrate de cumplir con estos puntos básicos:
              </p>
              <ul className="space-y-4">
                {reqs.map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-primary font-semibold"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <CheckCircle2 size={20} />
                    </div>
                    {req}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
                <img
                  src="https://picsum.photos/seed/jewelry/800/800"
                  alt="Requirements"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-2xl shadow-xl -rotate-6">
                <p className="text-primary font-black text-2xl">¡Sin Trámites!</p>
                <p className="text-primary/70 text-sm">Dinero en mano hoy mismo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

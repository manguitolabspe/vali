import { motion } from "motion/react";
import { Check, X, Shield, Clock, TrendingUp } from "lucide-react";

const features = [
  { name: "Velocidad de desembolso", vali: "15 Minutos", others: "2-5 Días", icon: <Clock /> },
  { name: "Requisitos", vali: "Solo DNI", others: "Boletas, Aval, Historial", icon: <Check /> },
  { name: "Tasa de interés", vali: "Competitiva y Justa", others: "Altas / Abusivas", icon: <TrendingUp /> },
  { name: "Seguridad de prendas", vali: "Bóveda Blindada", others: "Almacén común", icon: <Shield /> },
  { name: "Discreción total", vali: "100% Privado", others: "Llamadas a referencias", icon: <X /> },
];

export const Comparison = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-primary">¿Por qué elegir VALI?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comparamos nuestro servicio con las opciones tradicionales para que tomes la mejor decisión.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="p-6 text-left text-gray-400 font-bold uppercase text-xs tracking-widest">Beneficio</th>
                <th className="p-6 text-center bg-primary/5 rounded-t-3xl">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-secondary font-bold">V</div>
                    <span className="text-primary font-black text-xl">VALI</span>
                  </div>
                </th>
                <th className="p-6 text-center text-gray-400 font-bold text-xl">Bancos / Otros</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-primary/40">{f.icon}</div>
                      <span className="font-bold text-primary">{f.name}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center bg-primary/5">
                    <span className="inline-flex items-center gap-2 text-primary font-black">
                      <Check className="text-secondary" size={20} />
                      {f.vali}
                    </span>
                  </td>
                  <td className="p-6 text-center text-gray-400 font-medium">
                    {f.others}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

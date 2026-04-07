import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";
import { Gem, Laptop, Smartphone, Watch, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

const categories = [
  { id: "oro", name: "Oro / Joyas", icon: <Gem /> },
  { id: "laptop", name: "Laptops", icon: <Laptop /> },
  { id: "celular", name: "Celulares", icon: <Smartphone /> },
  { id: "reloj", name: "Relojes", icon: <Watch /> },
];

export const FunnelForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    category: "",
    condition: "",
    amount: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFinish = () => {
    const message = `Hola VALI, quiero una pre-evaluación:
- Artículo: ${data.category}
- Estado: ${data.condition}
- Monto deseado: S/ ${data.amount}`;
    window.open(`https://wa.me/51903182890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-white rounded-[32px] shadow-2xl p-6 md:p-8 border border-gray-100 max-w-xl mx-auto relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100 flex">
        <motion.div
          initial={{ width: "33%" }}
          animate={{ width: `${(step / 3) * 100}%` }}
          className="h-full bg-secondary"
        />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-primary">¿Qué quieres empeñar?</h3>
              <p className="text-gray-500">Selecciona la categoría de tu artículo.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setData({ ...data, category: cat.name });
                    nextStep();
                  }}
                  className={cn(
                    "p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 group hover:scale-105",
                    data.category === cat.name ? "border-secondary bg-secondary/5" : "border-gray-100 hover:border-primary/20"
                  )}
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">{cat.icon}</div>
                  <span className="font-bold text-primary">{cat.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-primary">¿En qué estado se encuentra?</h3>
              <p className="text-gray-500">Sé lo más honesto posible para una mejor tasación.</p>
            </div>
            <div className="space-y-3">
              {["Como nuevo (Sellado/Poco uso)", "Buen estado (Funciona perfecto)", "Desgastado (Detalles estéticos)", "Para reparar / Repuestos"].map((cond) => (
                <button
                  key={cond}
                  onClick={() => {
                    setData({ ...data, condition: cond });
                    nextStep();
                  }}
                  className="w-full p-4 rounded-xl border border-gray-100 hover:border-primary hover:bg-primary/5 text-left font-semibold text-primary transition-all flex justify-between items-center group"
                >
                  {cond}
                  <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="text-sm text-gray-400 font-bold hover:text-primary transition-colors">← Volver</button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-primary">¿Cuánto dinero necesitas?</h3>
              <p className="text-gray-500">Dinos el monto aproximado que esperas recibir.</p>
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-400">S/</span>
              <input
                type="number"
                autoFocus
                value={data.amount}
                onChange={(e) => setData({ ...data, amount: e.target.value })}
                placeholder="Ej: 500"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-xl font-bold text-primary"
              />
            </div>
            <div className="bg-green-50 p-4 rounded-xl flex gap-3 items-start">
              <CheckCircle2 className="text-green-600 shrink-0" size={20} />
              <p className="text-xs text-green-800 leading-relaxed">
                ¡Excelente! Al terminar, te redirigiremos a WhatsApp para que un asesor valide tu información al instante.
              </p>
            </div>
            <div className="flex gap-4">
              <Button onClick={prevStep} variant="outline" className="flex-1">Volver</Button>
              <Button onClick={handleFinish} variant="secondary" className="flex-1 flex gap-2">
                Finalizar
                <MessageCircle size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

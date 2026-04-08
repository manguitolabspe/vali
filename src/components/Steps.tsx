import { motion } from "motion/react";
import { ClipboardCheck, Search, HandCoins, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck size={40} />,
    title: "Solicitud",
    desc: "Tráenos tu prenda o solicita una pre-evaluación por WhatsApp.",
  },
  {
    icon: <Search size={40} />,
    title: "Tasación",
    desc: "Nuestros expertos evalúan tu artículo y te ofrecen el máximo valor.",
  },
  {
    icon: <HandCoins size={40} />,
    title: "Desembolso",
    desc: "Firma tu contrato y recibe tu dinero en efectivo o transferencia al instante.",
  },
  {
    icon: <CheckCircle2 size={40} />,
    title: "Recuperación",
    desc: "Paga tu préstamo y recupera tu prenda en perfecto estado.",
  },
];

export const Steps = () => {
  return (
    <section id="pasos" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-black">Tu dinero en 4 simples pasos</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Proceso transparente, rápido y sin complicaciones. Sin trámites eternos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-white/10 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-6 relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-secondary text-primary flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.3)] border-4 border-primary">
                {step.icon}
              </div>
              <div className="space-y-2">
                <div className="text-secondary font-black text-xl">0{i + 1}</div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

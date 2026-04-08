import { motion } from "motion/react";
import { FunnelForm } from "./FunnelForm";
import { ShieldCheck, Zap, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.webp" 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] transform translate-x-20" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary font-bold text-sm uppercase tracking-widest">
              <ShieldCheck size={18} />
              Préstamos 100% Seguros
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary leading-[1.1]">
              Dinero <span className="text-secondary">al instante</span> por tus prendas.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              En <span className="font-bold text-primary">VALI</span>, valoramos lo que más quieres. Obtén liquidez inmediata con la mejor tasa del mercado y total discreción.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {[
                { icon: <Zap className="text-secondary" />, title: "Rápido", desc: "En 15 minutos" },
                { icon: <Clock className="text-secondary" />, title: "Flexible", desc: "Tú eliges el plazo" },
                { icon: <ShieldCheck className="text-secondary" />, title: "Seguro", desc: "Garantía total" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Funnel Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <FunnelForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


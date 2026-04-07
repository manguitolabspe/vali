import { motion } from "motion/react";
import { Gift, Users, Share2, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "./Button";

export const Referral = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-[48px] p-8 md:p-16 text-white overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl -translate-x-1/4 translate-y-1/4" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary font-bold text-sm uppercase tracking-widest">
                <Gift size={18} />
                Programa de Referidos
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Gana dinero <span className="text-secondary">recomendando</span> a VALI.
              </h2>
              
              <p className="text-white/70 text-lg leading-relaxed">
                ¿Conoces a alguien que necesite un préstamo rápido? Por cada referido que concrete su empeño con nosotros, tú recibes una comisión en efectivo al instante.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open("https://wa.me/51903182890?text=Hola%20VALI,%20quiero%20ser%20referidor%20y%20ganar%20comisiones.", "_blank")}
                  variant="secondary" 
                  size="lg" 
                  className="flex gap-2 group"
                >
                  Quiero ser Referidor
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-white/20 bg-white/5">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/40/40`}
                        className="w-8 h-8 rounded-full border-2 border-primary"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-white/60">+50 personas ganando hoy</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users />, title: "Refiere", desc: "Comparte tu código" },
                { icon: <Share2 />, title: "Ellos Empeñan", desc: "Reciben su dinero" },
                { icon: <Gift />, title: "Tú Ganas", desc: "Comisión directa" },
                { icon: <TrendingUp />, title: "Sin Límites", desc: "Gana por cada uno" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

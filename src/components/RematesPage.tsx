import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, Tag, Info } from "lucide-react";
import { Button } from "./Button";

const remateItems = [
  {
    id: "INV-105",
    name: "Anillo de Oro 18k con Diamante",
    category: "Joyería",
    price: "S/ 2,800",
    image: "/remate-anillo.webp",
    description: "Anillo de compromiso de oro amarillo 18k. Peso: 4.5g. Piedra central de 0.2ct.",
    badge: "Premium"
  },
  {
    id: "INV-106",
    name: "MacBook Pro M2 13\"",
    category: "Electrónica",
    price: "S/ 4,200",
    image: "/remate-laptop.webp",
    description: "Laptop Apple MacBook Pro con chip M2, 8GB RAM, 256GB SSD. Como nueva.",
    badge: "Nuevo Ingreso"
  },
  {
    id: "INV-107",
    name: "Reloj Tissot Le Locle",
    category: "Relojería",
    price: "S/ 1,100",
    image: "/remate-reloj.webp",
    description: "Reloj automático suizo. Cristal de zafiro, correa de cuero original.",
    badge: "Liquidación"
  }
];

export const RematesPage = () => {
  return (
    <section id="remates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm uppercase tracking-widest"
          >
            <Tag size={18} />
            Oportunidades VALI
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-primary"
          >
            Artículos en <span className="text-secondary">Remate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-xl max-w-2xl mx-auto"
          >
            Aprovecha nuestros precios de liquidación en artículos seleccionados. Calidad garantizada por nuestros tasadores.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remateItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gray-50 rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-wider text-primary shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-secondary text-primary rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-primary leading-tight group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                    Ref: {item.id}
                  </p>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-gray-200/50">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Precio de Remate</p>
                    <p className="text-2xl font-black text-primary">{item.price}</p>
                  </div>
                  <Button
                    onClick={() => window.open(`https://wa.me/51903182890?text=Hola%20VALI,%20estoy%20interesado%20en%20el%20artículo%20${item.id}:%20${item.name}`, "_blank")}
                    size="sm"
                    variant="secondary"
                    className="rounded-2xl p-3"
                  >
                    <ShoppingBag size={20} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-primary rounded-[40px] text-center space-y-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white">¿Buscas algo en específico?</h3>
            <p className="text-white/60 mb-6">Pregúntanos por nuestro stock completo de joyas, relojes y tecnología.</p>
            <Button
              onClick={() => window.open("https://wa.me/51903182890?text=Hola%20VALI,%20quisiera%20consultar%20por%20el%20stock%20disponible.", "_blank")}
              variant="secondary"
              size="lg"
              className="flex gap-2 mx-auto group"
            >
              Consultar Stock Completo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

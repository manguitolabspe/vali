import { motion } from "motion/react";
import { Gem, Laptop, Smartphone, Watch, Construction, Car } from "lucide-react";

const items = [
  { icon: <Gem size={32} />, title: "Joyas de Oro", desc: "Anillos, cadenas, pulseras y más." },
  { icon: <Laptop size={32} />, title: "Laptops", desc: "Todas las marcas y modelos recientes." },
  { icon: <Smartphone size={32} />, title: "Celulares", desc: "Equipos de alta gama y media." },
  { icon: <Watch size={32} />, title: "Relojes", desc: "Relojes de marca y colección." },
  { icon: <Construction size={32} />, title: "Herramientas", desc: "Equipos eléctricos y profesionales." },
  { icon: <Car size={32} />, title: "Vehículos", desc: "Autos y motos con papeles en regla." },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-primary">¿Qué puedes empeñar?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Aceptamos una amplia variedad de artículos de valor. Nuestro equipo de expertos te dará la mejor tasación.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

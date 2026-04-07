import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carlos Mendoza",
    role: "Comerciante",
    text: "Excelente atención. Necesitaba liquidez para mi negocio y en 15 minutos ya tenía el dinero. Muy profesionales.",
    avatar: "https://picsum.photos/seed/person1/100/100",
  },
  {
    name: "Ana Lucía Ortiz",
    role: "Estudiante",
    text: "Empeñé mi laptop y el proceso fue súper transparente. Me explicaron todo y mis cosas estuvieron seguras.",
    avatar: "https://picsum.photos/seed/person2/100/100",
  },
  {
    name: "Jorge Ramírez",
    role: "Independiente",
    text: "La mejor tasa de Talara. He ido a otros lugares pero en VALI realmente valoran tus prendas.",
    avatar: "https://picsum.photos/seed/person3/100/100",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-primary">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600">La confianza es nuestro mayor activo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 space-y-6"
            >
              <div className="flex gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

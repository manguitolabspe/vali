import { motion } from "motion/react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "./Button";

export const Location = () => {
  const address = "Av. Mariscal Cáceres E 61, Talara 20811";
  const googleMapsUrl = "https://www.google.com/maps/place/Casa+de+Empe%C3%B1o+Seguro+VALI/@-4.5847815,-81.2683363,18.71z";

  return (
    <section id="ubicacion" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-primary">Visítanos en Talara</h2>
              <p className="text-gray-600 text-lg">
                Estamos ubicados en el corazón de Talara para brindarte la mejor atención y seguridad.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Dirección</h4>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Horario de Atención</h4>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 a.m. - 6:00 p.m.</p>
                  <p className="text-gray-600">Sábados: 9:00 a.m. - 1:00 p.m.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Teléfono</h4>
                  <p className="text-gray-600">903 182 890</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={() => window.open(googleMapsUrl, "_blank")}
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto flex gap-2 items-center"
            >
              <Navigation size={20} />
              Cómo llegar con Google Maps
            </Button>
          </div>

          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            onClick={() => window.open(googleMapsUrl, "_blank")}
            className="h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50 relative group cursor-pointer"
          >
            {/* Static Map Placeholder/Stylized Image */}
            <img 
              src="https://picsum.photos/seed/talara-map/1000/800?blur=1" 
              alt="Ubicación en Talara"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />

            {/* Central Pin and Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10"
              >
                <MapPin size={32} fill="currentColor" />
              </motion.div>
              <div className="mt-4 bg-white px-6 py-2 rounded-full shadow-xl border border-gray-100 transform -translate-y-2 group-hover:scale-110 transition-transform">
                <p className="font-black text-primary text-sm">VALI Talara</p>
              </div>
            </div>

            {/* Click Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-primary text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-2xl">
                <Navigation size={18} />
                Abrir en Google Maps
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

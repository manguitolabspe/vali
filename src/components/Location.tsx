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
            className="h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50 relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.664446487544!2d-81.2683363!3d-4.5847815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9031839999999999%3A0x9999999999999999!2sAv.%20Mariscal%20C%C3%A1ceres%20E%2061%2C%20Talara!5e0!3m2!1ses!2spe!4v1712510000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-[32px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

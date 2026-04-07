import { motion } from "motion/react";

const logos = [
  { name: "Yape", url: "https://www.yape.com.pe/assets/images/logo-yape.png" },
  { name: "BCP", url: "https://www.viabcp.com/wps/wcm/connect/bcp/logo.png" },
  { name: "Interbank", url: "https://interbank.pe/assets/images/logo-interbank.png" },
  { name: "SBS", url: "https://www.sbs.gob.pe/Portals/0/logo-sbs.png" },
];

export const TrustBar = () => {
  return (
    <div className="py-8 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xs font-black text-primary uppercase tracking-[0.3em] w-full text-center md:w-auto mb-4 md:mb-0">
            Paga y recibe por:
          </span>
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="h-8 md:h-10 flex items-center"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

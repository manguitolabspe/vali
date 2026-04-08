import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, FileText, ShieldCheck, BookOpen } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "terms" | "privacy" | "complaints";
}

export const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  const content = {
    terms: {
      title: "Términos y Condiciones",
      icon: <FileText className="text-secondary" />,
      body: (
        <div className="space-y-4 text-sm text-gray-600">
          <p className="font-bold text-primary">1. Aceptación de Términos</p>
          <p>Al acceder y utilizar los servicios de VALI, usted acepta cumplir con estos términos y condiciones. VALI se reserva el derecho de modificar estos términos en cualquier momento.</p>
          
          <p className="font-bold text-primary">2. Servicios de Empeño</p>
          <p>VALI ofrece préstamos con garantía prendaria. El cliente debe ser mayor de edad y presentar un documento de identidad válido (DNI o Carnet de Extranjería).</p>
          
          <p className="font-bold text-primary">3. Tasación y Custodia</p>
          <p>Los artículos serán tasados por nuestros especialistas. VALI se compromete a la custodia segura de las prendas en bóvedas de alta seguridad durante la vigencia del contrato.</p>
          
          <p className="font-bold text-primary">4. Tasas e Intereses</p>
          <p>Las tasas de interés se aplican mensualmente y están detalladas en el contrato individual. El incumplimiento del pago en las fechas pactadas generará moras adicionales.</p>
          
          <p className="font-bold text-primary">5. Recuperación de Prendas</p>
          <p>Para recuperar la prenda, el cliente deberá cancelar el capital más los intereses devengados. En caso de pérdida del contrato, se deberá seguir el proceso de duplicado establecido.</p>
        </div>
      )
    },
    privacy: {
      title: "Políticas de Privacidad",
      icon: <ShieldCheck className="text-secondary" />,
      body: (
        <div className="space-y-4 text-sm text-gray-600">
          <p className="font-bold text-primary">1. Protección de Datos</p>
          <p>En VALI, protegemos sus datos personales conforme a la Ley N° 29733, Ley de Protección de Datos Personales en Perú.</p>
          
          <p className="font-bold text-primary">2. Uso de la Información</p>
          <p>La información recopilada se utiliza exclusivamente para la gestión de sus contratos de préstamo, verificación de identidad y comunicaciones relacionadas con su cuenta.</p>
          
          <p className="font-bold text-primary">3. Seguridad</p>
          <p>Implementamos medidas técnicas y organizativas para evitar el acceso no autorizado, pérdida o alteración de su información personal.</p>
          
          <p className="font-bold text-primary">4. Derechos ARCO</p>
          <p>Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición enviando una solicitud a nuestro correo oficial o visitando nuestra oficina en Talara.</p>
        </div>
      )
    },
    complaints: {
      title: "Libro de Reclamaciones",
      icon: <BookOpen className="text-secondary" />,
      body: (
        <div className="space-y-6 text-sm text-gray-600">
          <p>Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, VALI pone a su disposición el Libro de Reclamaciones Virtual.</p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase">Nombres</label>
                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20" placeholder="Juan" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase">Apellidos</label>
                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20" placeholder="Pérez" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase">DNI / CE</label>
              <input type="text" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20" placeholder="45678901" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase">Detalle del Reclamo o Queja</label>
              <textarea className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 h-32" placeholder="Escriba aquí..." />
            </div>
            <button className="w-full py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 transition-colors">
              Enviar Reclamación
            </button>
          </form>
        </div>
      )
    }
  };

  const current = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  {current.icon}
                </div>
                <h3 className="text-xl font-black text-primary">{current.title}</h3>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>
            <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {current.body}
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-gray-200 text-primary font-bold rounded-xl hover:bg-gray-300 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

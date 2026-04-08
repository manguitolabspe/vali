import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/logo-white.webp" 
                alt="VALI Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-bold tracking-tight">VALI</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              La casa de empeño más segura de Talara. Valoramos tu esfuerzo y te brindamos el respaldo financiero que necesitas.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/51903182890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Empresa</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#pasos" className="hover:text-white transition-colors">Cómo Funciona</a></li>
              <li><a href="#requisitos" className="hover:text-white transition-colors">Requisitos</a></li>
              <li><a href="#ubicacion" className="hover:text-white transition-colors">Ubicación</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Legal</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Libro de Reclamaciones</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Contacto</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>Av. Mariscal Cáceres E 61, Talara 20811</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>903 182 890 / 073 538846</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>oficinatalara@cesvali.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} VALI - Casa de Empeño Seguro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

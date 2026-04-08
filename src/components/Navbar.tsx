import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MapPin, Lock } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../lib/utils";

export const Navbar = ({ onAdminClick }: { onAdminClick?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Cómo Funciona", href: "#pasos" },
    { name: "Requisitos", href: "#requisitos" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Preguntas", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={isScrolled ? "/logo.webp" : "/logo.webp"} 
              alt="VALI Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className={cn(
              "text-2xl font-bold tracking-tight",
              isScrolled ? "text-primary" : "text-primary"
            )}>
              VALI
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary font-medium hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onAdminClick}
              className="text-primary/30 hover:text-primary transition-colors"
              title="Acceso Admin"
            >
              <Lock size={18} />
            </button>
            <Button 
              onClick={() => window.open("https://wa.me/51903182890", "_blank")}
              size="sm" 
              variant="secondary" 
              className="flex gap-2"
            >
              <Phone size={16} />
              Contáctanos
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium text-primary hover:text-secondary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <a href="tel:903182890" className="flex items-center gap-2 text-primary/70">
                  <Phone size={18} />
                  <span>903 182 890</span>
                </a>
                <a href="#ubicacion" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-primary/70">
                  <MapPin size={18} />
                  <span>Av. Mariscal Cáceres E 61, Talara</span>
                </a>
                <Button 
                  onClick={() => {
                    window.open("https://wa.me/51903182890", "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                  variant="secondary" 
                  className="w-full"
                >
                  Solicitar Préstamo
                </Button>
                <button 
                  onClick={() => {
                    onAdminClick?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-center text-xs text-primary/30 py-2"
                >
                  Acceso Administrativo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

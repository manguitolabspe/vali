import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Steps } from "./components/Steps";
import { Requirements } from "./components/Requirements";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import { Comparison } from "./components/Comparison";
import { Referral } from "./components/Referral";
import { TrustBar } from "./components/TrustBar";
import { Location } from "./components/Location";
import { MessageCircle, MapPin } from "lucide-react";
import { Login } from "./components/admin/Login";
import { Dashboard } from "./components/admin/Dashboard";

export default function App() {
  const [view, setView] = useState<"public" | "login" | "admin">("public");

  if (view === "login") {
    return <Login onLogin={() => setView("admin")} />;
  }

  if (view === "admin") {
    return <Dashboard onLogout={() => setView("public")} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onAdminClick={() => setView("login")} />
      
      <main>
        <Hero />
        <TrustBar />
        
        <Comparison />
        
        <Services />
        <Steps />
        <Requirements />

        <Location />
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-[40px] p-12 text-center space-y-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-6xl font-black text-white">
                  ¿Listo para obtener tu <span className="text-secondary">dinero</span>?
                </h2>
                <p className="text-white/70 text-xl max-w-2xl mx-auto">
                  No esperes más. Contáctanos ahora por WhatsApp y recibe una pre-evaluación gratuita de tu prenda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    onClick={() => window.open("https://wa.me/51903182890", "_blank")}
                    variant="secondary" 
                    size="lg" 
                    className="flex gap-2 items-center"
                  >
                    <MessageCircle size={24} />
                    Chatear por WhatsApp
                  </Button>
                  <Button 
                    onClick={() => document.getElementById('ubicacion')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-primary flex gap-2 items-center"
                  >
                    <MapPin size={24} />
                    Ver Ubicación
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Referral />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      {/* Floating Button */}
      <a
        href="https://wa.me/51903182890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "motion/react";
import { Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "../Button";

interface LoginProps {
  onLogin: () => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("admin@vali.com");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[32px] shadow-2xl p-8 border border-gray-100"
      >
        <div className="text-center mb-8 space-y-2">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <ShieldCheck className="text-secondary" size={32} />
          </div>
          <h2 className="text-3xl font-black text-primary">Panel Interno</h2>
          <p className="text-gray-500">Ingresa tus credenciales de administrador</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-primary ml-1">Usuario</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-primary ml-1">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button type="submit" className="w-full py-4 rounded-2xl flex gap-2 items-center justify-center group" disabled={loading}>
            {loading ? "Verificando..." : "Entrar al Sistema"}
            {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
          </Button>
        </form>

        <p className="text-center mt-8 text-xs text-gray-400">
          Uso exclusivo para personal autorizado de VALI.
        </p>
      </motion.div>
    </div>
  );
};

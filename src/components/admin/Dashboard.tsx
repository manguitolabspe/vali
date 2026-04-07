import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, 
  Users, 
  HandCoins, 
  TrendingUp, 
  Clock, 
  Search, 
  Bell, 
  LogOut, 
  CheckCircle2, 
  AlertCircle,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Box,
  Wallet,
  Gavel,
  Settings,
  Download,
  Filter,
  Calendar,
  DollarSign,
  PieChart,
  X,
  Mail,
  Phone,
  History,
  ExternalLink,
  Globe,
  Loader2
} from "lucide-react";
import { Button } from "../Button";
import { cn } from "../../lib/utils";

interface DashboardProps {
  onLogout: () => void;
}

const stats = [
  { label: "Préstamos Activos", value: "S/ 128,450", change: "+12.5%", positive: true, icon: <HandCoins /> },
  { label: "Nuevas Solicitudes", value: "48", change: "+5", positive: true, icon: <Users /> },
  { label: "Pagos Pendientes", value: "S/ 12,300", change: "-2.1%", positive: false, icon: <Clock /> },
  { label: "Ingresos del Mes", value: "S/ 15,200", change: "+8.4%", positive: true, icon: <TrendingUp /> },
];

const recentRequests = [
  { id: "VALI-001", client: "Juan Pérez", item: "Anillo de Oro 18k", amount: "S/ 1,200", status: "Pendiente", date: "Hace 10 min" },
  { id: "VALI-002", client: "María García", item: "Laptop MacBook Pro", amount: "S/ 2,500", status: "Aprobado", date: "Hace 45 min" },
  { id: "VALI-003", client: "Carlos Ruiz", item: "Reloj Rolex Submariner", amount: "S/ 8,000", status: "Evaluando", date: "Hace 2 horas" },
  { id: "VALI-004", client: "Ana López", item: "iPhone 15 Pro Max", amount: "S/ 3,200", status: "Finalizado", date: "Ayer" },
];

const inventoryItems = [
  { id: "INV-101", item: "Cadena de Oro 24k", weight: "15g", vault: "A-12", status: "Custodia" },
  { id: "INV-102", item: "Cámara Sony Alpha", weight: "N/A", vault: "B-05", status: "Remate" },
  { id: "INV-103", item: "Reloj Omega Speedmaster", weight: "N/A", vault: "A-01", status: "Custodia" },
  { id: "INV-104", item: "Laptop Dell XPS 15", weight: "N/A", vault: "B-08", status: "Custodia" },
];

const transactions = [
  { id: "TX-901", type: "Ingreso", concept: "Pago de Intereses - VALI-004", amount: "S/ 150.00", time: "09:30 AM" },
  { id: "TX-902", type: "Egreso", concept: "Desembolso Préstamo - VALI-002", amount: "S/ 2,500.00", time: "10:15 AM" },
  { id: "TX-903", type: "Ingreso", concept: "Amortización Capital - VALI-012", amount: "S/ 500.00", time: "11:00 AM" },
  { id: "TX-904", type: "Egreso", concept: "Pago Servicios Luz/Agua", amount: "S/ 320.00", time: "12:00 PM" },
];

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-[32px] shadow-2xl w-full max-w-lg overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="text-xl font-black text-primary">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <X size={20} className="text-gray-400" />
            </button>
          </div>
          <div className="p-8">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export const Dashboard = ({ onLogout }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [sellingItem, setSellingItem] = useState<any>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const notifications = [
    { id: 1, text: "Nuevo préstamo solicitado por Juan Pérez", time: "Hace 5 min", unread: true },
    { id: 2, text: "Pago recibido de VALI-004", time: "Hace 15 min", unread: true },
    { id: 3, text: "Artículo INV-102 listo para remate", time: "Hace 1 hora", unread: false },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredRequests = recentRequests.filter(req => 
    req.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    req.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    req.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSell = (item: any) => {
    setSellingItem(item);
  };

  const confirmSale = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setShowSuccess(true);
    }, 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "loans":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black text-primary">Gestión de Préstamos</h2>
              <Button variant="secondary" size="sm">+ Nuevo Préstamo</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Préstamos por Vencer</p>
                <h4 className="text-2xl font-black text-orange-600">12</h4>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Contratos en Mora</p>
                <h4 className="text-2xl font-black text-red-600">5</h4>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Total Desembolsado Hoy</p>
                <h4 className="text-2xl font-black text-green-600">S/ 4,500</h4>
              </div>
            </div>
            <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="text-xl font-black text-primary">Contratos Activos</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex gap-2"><Filter size={14} /> Filtrar</Button>
                  <Button variant="outline" size="sm" className="flex gap-2"><Download size={14} /> Exportar</Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 text-gray-400 text-xs font-bold uppercase tracking-widest">
                      <th className="px-6 py-4">Contrato</th>
                      <th className="px-6 py-4">Cliente</th>
                      <th className="px-6 py-4">Monto</th>
                      <th className="px-6 py-4">Interés</th>
                      <th className="px-6 py-4">Vencimiento</th>
                      <th className="px-6 py-4">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentRequests.map((req, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-primary text-sm">{req.id}</td>
                        <td className="px-6 py-4 text-sm font-medium">{req.client}</td>
                        <td className="px-6 py-4 font-bold text-primary text-sm">{req.amount}</td>
                        <td className="px-6 py-4 text-sm text-green-600 font-bold">12%</td>
                        <td className="px-6 py-4 text-sm text-gray-500">15 Abr 2026</td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">Ver Detalle</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "inventory":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black text-primary">Inventario y Bóveda</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex gap-2"><Box size={14} /> Auditoría</Button>
                <Button variant="secondary" size="sm">Registrar Ingreso</Button>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                <p className="text-xs text-gray-400 font-bold uppercase mb-2">Total Prendas</p>
                <h4 className="text-3xl font-black text-primary">1,240</h4>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                <p className="text-xs text-gray-400 font-bold uppercase mb-2">Valor Estimado</p>
                <h4 className="text-3xl font-black text-primary">S/ 450k</h4>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                <p className="text-xs text-gray-400 font-bold uppercase mb-2">Espacio Bóveda</p>
                <h4 className="text-3xl font-black text-primary">65%</h4>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                <p className="text-xs text-gray-400 font-bold uppercase mb-2">En Remate</p>
                <h4 className="text-3xl font-black text-secondary">42</h4>
              </div>
            </div>
            <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-400 text-xs font-bold uppercase tracking-widest">
                    <th className="px-6 py-4">ID Item</th>
                    <th className="px-6 py-4">Descripción</th>
                    <th className="px-6 py-4">Peso/Detalle</th>
                    <th className="px-6 py-4">Ubicación</th>
                    <th className="px-6 py-4">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {inventoryItems.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary text-sm">{item.id}</td>
                      <td className="px-6 py-4 text-sm font-medium">{item.item}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{item.weight}</td>
                      <td className="px-6 py-4 text-sm font-bold text-primary">{item.vault}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                          item.status === 'Custodia' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "cashflow":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black text-primary">Caja Diaria</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex gap-2"><Calendar size={14} /> Hoy</Button>
                <Button variant="secondary" size="sm">Cierre de Caja</Button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary text-white p-6 rounded-[32px] shadow-lg">
                <p className="text-white/60 text-xs font-bold uppercase mb-1">Saldo en Caja</p>
                <h4 className="text-3xl font-black">S/ 8,420.50</h4>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-secondary">
                  <ArrowUpRight size={14} /> +S/ 1,200 hoy
                </div>
              </div>
              <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Total Ingresos</p>
                <h4 className="text-3xl font-black text-green-600">S/ 3,150.00</h4>
              </div>
              <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Total Egresos</p>
                <h4 className="text-3xl font-black text-red-600">S/ 2,820.00</h4>
              </div>
            </div>
            <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50">
                <h3 className="text-xl font-black text-primary">Movimientos del Día</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {transactions.map((tx, i) => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        tx.type === 'Ingreso' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {tx.type === 'Ingreso' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                      </div>
                      <div>
                        <p className="font-bold text-primary text-sm">{tx.concept}</p>
                        <p className="text-xs text-gray-400 font-medium">{tx.id} • {tx.time}</p>
                      </div>
                    </div>
                    <p className={`font-black text-lg ${
                      tx.type === 'Ingreso' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {tx.type === 'Ingreso' ? '+' : '-'} {tx.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "clients":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-primary">Cartera de Clientes</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div 
                  key={i} 
                  onClick={() => setSelectedClient({
                    id: i,
                    name: `Cliente ${i}`,
                    dni: `4567800${i}`,
                    phone: `999 888 77${i}`,
                    email: `cliente${i}@gmail.com`,
                    rating: 4,
                    loans: 12,
                    active: 1
                  })}
                  className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <img src={`https://picsum.photos/seed/client${i}/40/40`} className="rounded-full group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold text-sm text-primary">Cliente {i}</p>
                    <p className="text-xs text-gray-500">DNI: 45678***</p>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map(s => (
                        <div key={s} className={`w-1.5 h-1.5 rounded-full ${s <= 4 ? 'bg-secondary' : 'bg-gray-200'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "reports":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black text-primary">Reportes Financieros</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex gap-2"><Calendar size={14} /> Mes Actual</Button>
                <Button variant="primary" size="sm" className="flex gap-2"><Download size={14} /> PDF</Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-black text-primary flex items-center gap-2">
                    <TrendingUp size={20} className="text-secondary" />
                    Crecimiento de Cartera
                  </h3>
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-lg">+15% vs mes ant.</span>
                </div>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[40, 70, 45, 90, 65, 80, 95, 60, 85, 100, 75, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/5 rounded-t-lg relative group">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        className="bg-primary rounded-t-lg w-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dic</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h3 className="font-black text-primary mb-8 flex items-center gap-2">
                  <PieChart size={20} className="text-secondary" />
                  Distribución por Categoría
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Oro y Joyas", value: 65, color: "bg-secondary" },
                    { label: "Electrónicos", value: 20, color: "bg-primary" },
                    { label: "Relojes", value: 10, color: "bg-blue-500" },
                    { label: "Otros", value: 5, color: "bg-gray-400" },
                  ].map((cat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-primary">{cat.label}</span>
                        <span className="text-gray-500">{cat.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${cat.value}%` }}
                          className={`h-full ${cat.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-[32px] border border-gray-100 text-center">
                <p className="text-xs text-gray-400 font-bold uppercase mb-2">Tasa de Recuperación</p>
                <h4 className="text-4xl font-black text-primary">92.4%</h4>
                <p className="text-[10px] text-green-600 font-bold mt-2">Excelente desempeño</p>
              </div>
              <div className="bg-white p-6 rounded-[32px] border border-gray-100 text-center">
                <p className="text-xs text-gray-400 font-bold uppercase mb-2">Ticket Promedio</p>
                <h4 className="text-4xl font-black text-primary">S/ 850</h4>
                <p className="text-[10px] text-gray-500 font-bold mt-2">Basado en 1,200 contratos</p>
              </div>
              <div className="bg-white p-6 rounded-[32px] border border-gray-100 text-center">
                <p className="text-xs text-gray-400 font-bold uppercase mb-2">ROI Anual Proyectado</p>
                <h4 className="text-4xl font-black text-secondary">24.8%</h4>
                <p className="text-[10px] text-primary font-bold mt-2">Meta: 22.0%</p>
              </div>
            </div>
          </div>
        );
      case "remates":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black text-primary">Ventas y Remates</h2>
              <Button variant="secondary" size="sm">Publicar en Web</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {inventoryItems.filter(i => i.status === 'Remate').map((item, i) => (
                <div key={i} className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm group">
                  <div className="h-48 bg-gray-100 relative">
                    <img src={`https://picsum.photos/seed/${item.id}/400/300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-secondary text-primary font-black px-3 py-1 rounded-lg text-xs">
                      S/ 1,500
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-black text-primary mb-1">{item.item}</h4>
                    <p className="text-xs text-gray-400 mb-4">ID: {item.id} • Ref: {item.vault}</p>
                    <div className="flex gap-2">
                      <Button onClick={() => handleSell(item)} variant="primary" size="sm" className="flex-1">Vender</Button>
                      <Button variant="outline" size="sm">Detalles</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-primary">Configuración del Sistema</h2>
            <div className="bg-white rounded-[32px] border border-gray-100 p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="font-bold text-primary border-b pb-2">Parámetros de Préstamo</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Tasa de Interés Mensual</span>
                      <input type="text" defaultValue="12%" className="w-20 p-2 bg-gray-50 border rounded-lg text-center font-bold" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Plazo Máximo (Días)</span>
                      <input type="text" defaultValue="90" className="w-20 p-2 bg-gray-50 border rounded-lg text-center font-bold" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Mora Diaria</span>
                      <input type="text" defaultValue="0.5%" className="w-20 p-2 bg-gray-50 border rounded-lg text-center font-bold" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="font-bold text-primary border-b pb-2">Usuarios y Permisos</h3>
                  <div className="space-y-3">
                    {["Admin Principal", "Cajero 1", "Tasador Senior"].map(u => (
                      <div key={u} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                        <span className="text-sm font-bold text-primary">{u}</span>
                        <Button variant="outline" size="sm">Editar</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t flex justify-end">
                <Button variant="primary">Guardar Cambios</Button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-bold ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  <h3 className="text-2xl font-black text-primary">{stat.value}</h3>
                </motion.div>
              ))}
            </div>

            {/* Recent Requests Table */}
            <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="text-xl font-black text-primary">Solicitudes Recientes</h3>
                <Button variant="outline" size="sm">Ver todo</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 text-gray-400 text-xs font-bold uppercase tracking-widest">
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">Cliente</th>
                      <th className="px-6 py-4">Artículo</th>
                      <th className="px-6 py-4">Monto</th>
                      <th className="px-6 py-4">Estado</th>
                      <th className="px-6 py-4">Fecha</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredRequests.length > 0 ? filteredRequests.map((req, i) => (
                      <tr 
                        key={i} 
                        className="hover:bg-gray-50/50 transition-colors cursor-pointer group"
                        onClick={() => setSelectedClient({
                          id: i + 10,
                          name: req.client,
                          dni: `4567800${i}`,
                          phone: `999 888 77${i}`,
                          email: `${req.client.toLowerCase().replace(' ', '.')}@gmail.com`,
                          rating: 5,
                          loans: 3,
                          active: 1
                        })}
                      >
                        <td className="px-6 py-4 font-bold text-primary text-sm">{req.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={`https://picsum.photos/seed/${req.client}/32/32`} className="w-8 h-8 rounded-full group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                            <span className="font-semibold text-primary text-sm">{req.client}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{req.item}</td>
                        <td className="px-6 py-4 font-bold text-primary text-sm">{req.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                            req.status === 'Aprobado' ? 'bg-green-100 text-green-700' :
                            req.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-700' :
                            req.status === 'Evaluando' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {req.status === 'Aprobado' && <CheckCircle2 size={12} />}
                            {req.status === 'Pendiente' && <AlertCircle size={12} />}
                            {req.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-gray-400 font-medium">{req.date}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <MoreVertical size={18} className="text-gray-400" />
                          </button>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-gray-400 font-medium">
                          No se encontraron resultados para "{searchQuery}"
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
    }
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "loans", label: "Préstamos", icon: <HandCoins size={20} /> },
    { id: "inventory", label: "Bóveda", icon: <Box size={20} /> },
    { id: "clients", label: "Clientes", icon: <Users size={20} /> },
    { id: "cashflow", label: "Caja Diaria", icon: <Wallet size={20} /> },
    { id: "remates", label: "Remates", icon: <Gavel size={20} /> },
    { id: "reports", label: "Reportes", icon: <TrendingUp size={20} /> },
    { id: "settings", label: "Configuración", icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 hidden lg:flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-xl">V</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">VALI Admin</span>
        </div>

        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl font-medium transition-all group",
                activeTab === item.id ? "bg-white/10 text-secondary" : "hover:bg-white/5 text-white/60 hover:text-white"
              )}
            >
              <div className={cn(
                "transition-transform group-hover:scale-110",
                activeTab === item.id ? "text-secondary" : "text-white/40"
              )}>
                {item.icon}
              </div>
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 p-3 text-red-400 hover:bg-red-400/10 rounded-xl font-medium transition-colors"
        >
          <LogOut size={20} />
          Cerrar Sesión
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-full max-w-md hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar préstamos, clientes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-3 bg-white rounded-xl border border-gray-100 relative hover:bg-gray-50 transition-colors"
              >
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-3xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                    >
                      <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                        <h4 className="font-black text-primary">Notificaciones</h4>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map(n => (
                          <div key={n.id} className="p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 cursor-pointer">
                            <p className={cn("text-sm mb-1", n.unread ? "font-bold text-primary" : "text-gray-600")}>
                              {n.text}
                            </p>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">{n.time}</p>
                          </div>
                        ))}
                      </div>
                      <button className="w-full p-3 text-center text-xs font-black text-secondary hover:bg-gray-50 transition-colors border-t border-gray-50">
                        Ver todas las notificaciones
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-primary">Admin User</p>
                <p className="text-xs text-gray-500">Gerente de Sucursal</p>
              </div>
              <img src="https://picsum.photos/seed/admin/40/40" className="w-10 h-10 rounded-xl border-2 border-primary/10" referrerPolicy="no-referrer" />
            </div>
          </div>
        </header>

        {renderContent()}
      </main>

      {/* Client Modal */}
      <Modal 
        isOpen={!!selectedClient} 
        onClose={() => setSelectedClient(null)} 
        title="Perfil del Cliente"
      >
        {selectedClient && (
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <img src={`https://picsum.photos/seed/client${selectedClient.id}/80/80`} className="w-20 h-20 rounded-3xl border-4 border-gray-50 shadow-lg" />
              <div>
                <h4 className="text-2xl font-black text-primary">{selectedClient.name}</h4>
                <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">DNI: {selectedClient.dni}</p>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map(s => (
                    <div key={s} className={`w-2 h-2 rounded-full ${s <= selectedClient.rating ? 'bg-secondary' : 'bg-gray-200'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase">Teléfono</p>
                <p className="text-primary font-bold flex items-center gap-2"><Phone size={14} /> {selectedClient.phone}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase">Email</p>
                <p className="text-primary font-bold flex items-center gap-2 truncate"><Mail size={14} /> {selectedClient.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-black text-primary flex items-center gap-2"><History size={18} /> Historial de Préstamos</h5>
              <div className="space-y-2">
                <div className="flex justify-between p-4 bg-green-50 rounded-2xl border border-green-100">
                  <div>
                    <p className="text-sm font-bold text-green-800">Préstamo Finalizado</p>
                    <p className="text-xs text-green-600">Laptop Dell • S/ 1,500</p>
                  </div>
                  <span className="text-xs font-black text-green-700">PAGADO</span>
                </div>
                <div className="flex justify-between p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div>
                    <p className="text-sm font-bold text-blue-800">Préstamo Activo</p>
                    <p className="text-xs text-blue-600">Reloj Omega • S/ 2,400</p>
                  </div>
                  <span className="text-xs font-black text-blue-700">EN CURSO</span>
                </div>
              </div>
            </div>

            <Button className="w-full py-4 rounded-2xl">Ver Expediente Completo</Button>
          </div>
        )}
      </Modal>

      {/* Sale Modal */}
      <Modal 
        isOpen={!!sellingItem} 
        onClose={() => {
          setSellingItem(null);
          setShowSuccess(false);
          setIsPublishing(false);
        }} 
        title={showSuccess ? "¡Publicado con éxito!" : "Confirmar Venta / Remate"}
      >
        {sellingItem && !showSuccess && (
          <div className="space-y-6">
            <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
              <img src={`https://picsum.photos/seed/${sellingItem.id}/80/80`} className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <p className="text-xs font-black text-gray-400 uppercase">Artículo</p>
                <h4 className="font-black text-primary">{sellingItem.item}</h4>
                <p className="text-sm font-bold text-secondary">Precio Sugerido: S/ 1,500</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-500 leading-relaxed">
                Al confirmar, el artículo se publicará automáticamente en la sección de <strong>Remates</strong> de la página web principal y se notificará a los clientes interesados.
              </p>
              <div className="space-y-2">
                <label className="text-xs font-black text-primary uppercase ml-1">Precio de Venta (S/)</label>
                <input type="number" defaultValue="1500" className="w-full p-4 bg-gray-50 border rounded-2xl font-black text-primary focus:ring-2 focus:ring-secondary/20 outline-none" />
              </div>
            </div>

            <Button 
              onClick={confirmSale}
              disabled={isPublishing}
              className="w-full py-4 rounded-2xl flex gap-2 items-center justify-center"
            >
              {isPublishing ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Publicando...
                </>
              ) : (
                <>
                  <Globe size={20} />
                  Publicar en la Web
                </>
              )}
            </Button>
          </div>
        )}

        {showSuccess && (
          <div className="text-center space-y-6 py-4">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-black text-primary">¡Artículo en línea!</h4>
              <p className="text-gray-500">El artículo ya está disponible para la venta en el portal público de VALI.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full py-4 rounded-2xl flex gap-2 items-center justify-center">
                <ExternalLink size={18} />
                Ver en la página web
              </Button>
              <Button 
                variant="primary" 
                onClick={() => setSellingItem(null)}
                className="w-full py-4 rounded-2xl"
              >
                Cerrar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

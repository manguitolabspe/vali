import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./Button";
import { Info } from "lucide-react";

export const LoanCalculator = () => {
  const [amount, setAmount] = useState(500);
  const [months, setMonths] = useState(1);

  const minAmount = 100;
  const maxAmount = 5000;
  const interestRate = 0.15; // 15% interest for demo

  const totalToPay = amount * (1 + interestRate * months);
  const monthlyPayment = totalToPay / months;

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 w-full max-w-md">
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        Calcula tu Préstamo
      </h3>

      <div className="space-y-8">
        {/* Amount Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              ¿Cuánto necesitas?
            </label>
            <span className="text-2xl font-bold text-primary">
              S/ {amount.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min={minAmount}
            max={maxAmount}
            step={50}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
          />
          <div className="flex justify-between text-xs text-gray-400 font-medium">
            <span>S/ {minAmount}</span>
            <span>S/ {maxAmount}</span>
          </div>
        </div>

        {/* Months Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Plazo de pago
            </label>
            <span className="text-xl font-bold text-primary">
              {months} {months === 1 ? "mes" : "meses"}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={12}
            step={1}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
          />
          <div className="flex justify-between text-xs text-gray-400 font-medium">
            <span>1 mes</span>
            <span>12 meses</span>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-primary/5 rounded-2xl p-6 space-y-3 border border-primary/10">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Pago mensual:</span>
            <span className="text-lg font-bold text-primary">
              S/ {monthlyPayment.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-primary/10">
            <span className="text-gray-600 font-semibold">Total a devolver:</span>
            <span className="text-xl font-black text-primary">
              S/ {totalToPay.toFixed(2)}
            </span>
          </div>
        </div>

        <Button className="w-full py-6 text-lg" variant="secondary">
          ¡Solicitar Ahora!
        </Button>

        <p className="text-[10px] text-center text-gray-400 flex items-center justify-center gap-1">
          <Info size={12} />
          Sujeto a evaluación crediticia y garantía.
        </p>
      </div>
    </div>
  );
};

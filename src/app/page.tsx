"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { financias, Financias } from "./calFinancias";



export default function Home() {
  const [salario, setSalario] = useState<number | "">("");
  const [resultados, setResultados] = useState<Financias | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.valueAsNumber;
    if (!isNaN(valor)) {
      setSalario(valor);
      setErro(null);
    } else {
      setSalario("");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof salario === "number" && salario > 0) {
      const resultado = financias(salario);
      setResultados(resultado);
      setErro(null);
    } else {
      setErro("Por favor, insira um valor de salário válido e maior que zero.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Calculadora Financeira</h1>
        <p className="text-lg text-gray-600">Sistema de Jars (Potes)</p>
      </div>

      <form
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
        onSubmit={handleSubmit}
      >
        <label htmlFor="salario" className="block text-lg font-medium text-gray-700 mb-2">
          Salário (R$) :
        </label>
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
            R$
          </span>
          <input
            id="salario"
            type="number"
            placeholder="Digite seu salário"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-center"
            value={salario}
            onChange={handleInputChange}
            min="0"
            step="0.01"
          />
        </div>
        {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}
        <button className="w-full bg-indigo-500 text-white font-semibold py-3 rounded-lg hover:bg-indigo-600 transition duration-300">
          Confirmar
        </button>
      </form>

      {resultados && (
        <div className="mt-8 w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resultados:</h2>
          <p className="text-lg text-gray-700">Sustento: R$ {resultados.sustento.toFixed(2)}</p>
          <p className="text-lg text-gray-700">Estudo Financeiro: R$ {resultados.estudoFinanceiro.toFixed(2)}</p>
          <p className="text-lg text-gray-700">Investimento a Longo Prazo: R$ {resultados.investimentoLongoPrazo.toFixed(2)}</p>
          <p className="text-lg text-gray-700">Lazer: R$ {resultados.lazer.toFixed(2)}</p>
          <p className="text-lg text-gray-700">Reserva de Emergência: R$ {resultados.reservaEmergencia.toFixed(2)}</p>
        </div>
      )}
    </main>
  );
}

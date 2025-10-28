import React from "react";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Valor from "./components/Valor";
import Servicos from "./components/Servicos";
import Treinamentos from "./components/Treinamentos";
import QuemSomos from "./components/QuemSomos";
import Contatos from "./components/Contatos";

export default function App() {
  return (
    <div className="min-h-screen text-[#1E1E1E] font-sans">
      <Navbar />
      <Hero />
      <Valor />
      <Servicos />
      <Treinamentos />
      <QuemSomos />
      <Contatos />

      <footer className="border-t border-[#ECE9E8] bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#5C5C5C]">
            © {new Date().getFullYear()} Sistege — Sistemas de Gestão
          </p>
          <div className="opacity-60 text-[#5C5C5C]">
            Desenvolvido por Nathalie Zampieri
          </div>
        </div>
      </footer>
    </div>
  );
}

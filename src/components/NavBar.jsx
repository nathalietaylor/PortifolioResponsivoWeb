import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#561024]/95 text-white backdrop-blur border-b border-[#A43C55]/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-serif text-2xl text-white">
          SISTEGE
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#sobre" className="hover:opacity-80">
            Quem somos
          </a>
          <a href="#servicos" className="hover:opacity-80">
            Operação Assistida
          </a>
          <a href="#treinamentos" className="hover:opacity-80">
            Treinamentos
          </a>
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-block rounded-full px-5 py-2 bg-[#7A1631] hover:bg-[#A43C55] text-white"
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}

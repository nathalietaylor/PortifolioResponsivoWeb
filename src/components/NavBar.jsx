import React from "react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-sand">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-serif text-2xl text-neutralDark">
          SISTEGE
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-neutralDark">
          <a href="#sobre" className="hover:text-primary">
            Quem somos
          </a>
          <a href="#servicos" className="hover:text-primary">
            Operação Assistida
          </a>
          <a href="#treinamentos" className="hover:text-primary">
            Treinamentos
          </a>
          <a href="#contato" className="hover:text-primary">
            Contato
          </a>
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-block rounded-full px-5 py-2 bg-primary text-white hover:bg-primaryLight shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}

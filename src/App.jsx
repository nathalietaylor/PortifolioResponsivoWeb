import React from "react";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Valor from "./components/Valor";
import Servicos from "./components/Servicos";
import Treinamentos from "./components/Treinamentos";
import QuemSomos from "./components/QuemSomos";

export default function App() {
  return (
    <div className="min-h-screen text-[#1E1E1E] font-sans">
      <Navbar />
      <Hero />
      <Valor />
      <Servicos />
      <Treinamentos />
      <QuemSomos />

      {/* CONTATO */}
      <section id="contato" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1E1E1E]">
              Contato
            </h2>
            <p className="mt-6 md:text-lg max-w-prose text-[#1E1E1E]">
              Envie uma mensagem e retornaremos em breve!
            </p>
            <form className="mt-8 grid gap-4">
              <input
                placeholder="Nome"
                className="border border-[#ECE9E8] rounded-xl px-4 py-3"
              />
              <input
                placeholder="E-mail"
                className="border border-[#ECE9E8] rounded-xl px-4 py-3"
              />
              <textarea
                rows={4}
                placeholder="Como podemos ajudar?"
                className="border border-[#ECE9E8] rounded-xl px-4 py-3"
              />
              <button
                type="button"
                className="w-max rounded-full bg-[#7A1631] hover:bg-[#A43C55] text-white px-6 py-3 font-medium"
              >
                Enviar
              </button>
            </form>
          </div>

          <div className="bg-[#F8F6F5] rounded-3xl p-8 shadow">
            <h3 className="font-medium text-lg text-[#1E1E1E]">Informações</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#5C5C5C]">
              <li>• E-mail: contato@sistege.net.br</li>
              <li>• São Paulo — SP</li>
              <li>• Instagram: @sistege_sg</li>
            </ul>
            <div className="mt-6 h-56 rounded-2xl bg-gradient-to-br from-[#ECE9E8] to-white flex items-center justify-center text-[#5C5C5C]">
              Mapa / endereço
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
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

import React, { useState } from "react";
import React from "react";

function DifferentialsCarousel() {
  const slides = [
    {
      title: "Metodologia “Online ao vivo”",
      items: [
        "Aprendizado prático, com troca de experiências e exemplo de documentação.",
        "Foco na aplicação imediata do conhecimento.",
      ],
    },
    {
      title: "Metodologia “On the Job” (In Company)",
      items: [
        "Treinamento realizado na sua organização, usando processos e documentos reais.",
        "Aprendizado prático e direcionado às necessidades dos profissionais.",
        "Foco na aplicação imediata do conhecimento.",
      ],
    },
    {
      title: "Instrutores Especialistas",
      items: [
        "Auditores-líderes e consultores com experiência em ISO 27001, 27701, 20000-1 e 22301.",
        "Vivência em projetos nacionais e internacionais.",
      ],
    },
    {
      title: "Conteúdo Personalizado",
      items: [
        "Adaptado às necessidades da sua organização e do seu setor.",
        "Abordagem modular para diferentes níveis de conhecimento.",
      ],
    },
  ];

  const [idx, setIdx] = useState(0);
  const go = (delta) =>
    setIdx((i) => (i + delta + slides.length) % slides.length);

  return (
    <div className="mt-10 text-slate-800 font-sans">
      <h3 className="text-2xl md:text-3xl font-serif text-center mb-8 text-slate-900">
        Diferenciais dos Nossos Treinamentos
      </h3>

      <div className="relative max-w-3xl mx-auto">
        {/* área do slide */}
        <div className="bg-[#F8F6F5] border border-[#ECE9E8] rounded-3xl p-8 md:p-10 shadow-xl backdrop-blur-sm transition duration-500">
          <div className="flex items-start gap-4">
            <div className="text-3xl md:text-4xl">{slides[idx].icon}</div>
            <div>
              <h4 className="font-serif text-2xl md:text-3xl text-[#1E1E1E]">
                {slides[idx].title}
              </h4>
              <ul className="mt-4 space-y-2 text-[#5C5C5C] text-base md:text-lg">
                {slides[idx].items.map((t, i) => (
                  <li key={i}>• {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* botões de navegação */}
        <button
          onClick={() => go(-1)}
          className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 border border-[#ECE9E8] shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-white"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 border border-[#ECE9E8] shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-white"
          aria-label="Próximo"
        >
          ›
        </button>

        {/* bolinhas */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ir para o slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === idx ? "bg-[#7A1631]" : "bg-[#BDBDBD]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Treinamentos() {
  return (
    <section id="treinamentos" className="bg-[#F8F6F5]">
      {/* título centralizado com espaçamento equilibrado */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1E1E1E]">
          Treinamentos para Sistemas de Gestão
        </h2>
      </div>

      {/* conteúdo principal */}
      <div className="max-w-6xl mx-auto px-4 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
          alt="Treinamentos"
          className="rounded-3xl shadow-xl"
        />

        <div>
          <p className="mt-4 md:text-lg max-w-prose text-[#1E1E1E]">
            A SISTEGE é referência em desenvolvimento profissional, oferecendo
            soluções de capacitação alinhadas às melhores práticas
            internacionais e às normas ISO. Nossa área de treinamentos é
            especializada em preparar profissionais e organizações para os
            desafios das certificações das organizações do mercado, com
            programas práticos, personalizados e baseados em normas
            reconhecidas, como as normas ISO 27001, ISO 27701, ISO20000-1 e ISO
            22301, e a realizar auditorias conforme a norma ISO19011.
          </p>

          <p className="mt-4 md:text-lg max-w-prose text-[#1E1E1E]">
            Transformamos conhecimento em resultados tangíveis. Somos
            especialistas em capacitar profissionais e organizações para
            dominarem os desafios dos sistemas de gestão, com treinamentos que
            combinam rigor técnico e aplicação prática, assim desenvolvemos os
            profissionais alinhados com as normas ISO.
          </p>
        </div>
      </div>

      {/* carrossel abaixo do texto */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <DifferentialsCarousel />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <FolderTabs />
      </div>
      <div className="text-center p-10">
        <a
          href="#contato"
          className="inline-block rounded-full bg-[#7A1631] hover:bg-[#A43C55] text-white px-6 py-3 font-medium"
        >
          Solicitar catálogo
        </a>
      </div>
    </section>
  );
}

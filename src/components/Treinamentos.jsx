import React, { useState } from "react";

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
  const go = (d) => setIdx((i) => (i + d + slides.length) % slides.length);

  return (
    <div className="mt-10 text-primaryDark font-sans">
      <h3 className="text-2xl md:text-3xl font-title font-semibold text-center mb-8">
        Diferenciais dos Nossos Treinamentos
      </h3>

      <div className="relative max-w-3xl mx-auto">
        <div className="bg-sand border border-sand rounded-3xl p-8 md:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <h4 className="font-title font-semiboldtext-2xl md:text-xl">
            {slides[idx].title}
          </h4>
          <ul className="mt-4 space-y-2 text-slate text-base md:text-lg">
            {slides[idx].items.map((t, i) => (
              <li key={i}>• {t}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => go(-1)}
          className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 border border-sand shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-white"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 border border-sand shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-white"
          aria-label="Próximo"
        >
          ›
        </button>

        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === idx ? "bg-primary" : "bg-sand"
              }`}
              aria-label={`Ir para o slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FolderTabs() {
  const tabs = [
    {
      label: "Interpretação dos Requisitos da Norma",
      objetivo:
        "Capacitar os profissionais para compreender como atender aos requisitos do Sistema de Gestão da norma escolhida, e formar a base para os auditores internos para avaliar sistemas de gestão com eficácia.",
      duracao: "16 horas.",
      publico:
        "Profissionais de qualidade, segurança da informação, meio ambiente e gestão de riscos.",
    },
    {
      label: "Implantação de Sistemas de Gestão",
      objetivo:
        "Identificar as etapas e conteúdos necessários para implementar sistemas conforme normas ISO.",
      duracao: "32 horas (personalizável).",
      publico: "Gestores, consultores e equipes de implementação.",
    },
    {
      label: "Documentação SGSI – ISO27001",
      objetivo:
        "Capacitar os participantes para entenderem, elaborarem e manterem a documentação necessária ao SGSI, conforme os requisitos da ISO/IEC 27001:2022.",
      duracao: "16 horas.",
      publico:
        "Profissionais de segurança da informação que participem da implantação, manutenção e melhoria de um SGSI.",
    },
    {
      label: "Controles Anexo A – ISO 27001",
      objetivo:
        "Capacitar os participantes para entenderem, elaborarem e manterem a documentação necessária ao SGSI, conforme os requisitos da ISO/IEC 27001:2022.",
      duracao: "16 horas.",
      publico:
        "Profissionais de segurança da informação que participem da implantação, manutenção e melhoria de um SGSI.",
    },
    {
      label: "Formação de Auditores Internos – ISO 19011",
      objetivo:
        "Capacitar auditores internos para avaliar sistemas de gestão com eficácia.",
      duracao: "16 horas.",
      publico:
        "Profissionais de qualidade, segurança da informação, gestão de serviços, gestão de privacidade, continuidade do negócio e gestão de riscos.",
    },
    {
      label: "Gestão de Riscos (ISO 31000/27005)",
      objetivo:
        "Desenvolver habilidades para elaborar e implantar uma metodologia de avaliação de riscos para os sistemas de gestão com base nas normas ISO.",
      duracao: "16 horas.",
      publico: "Profissionais de compliance, TI e segurança da informação.",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {tabs.map((t, i) => (
        <div
          key={i}
          className="group relative rounded-3xl bg-neutralDark bg-opacity-5 shadow-lg border border-sand p-5 md:p-6 transition"
        >
          <span className="font-title font-semibold absolute -top-3 left-6 bg-goldAccent text-white text-sm px-3 py-1 rounded-t-xl rounded-b-md shadow">
            {t.label}
          </span>

          <p className="text-slate text-sm opacity-80">
            Abra a pasta para explorar os conteúdos.
          </p>

          <div className="mt-4 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[420px] group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="rounded-2xl bg-white p-4 border border-sand/60">
              <ul className="space-y-2 text-slate text-sm">
                <li>
                  <span className="font-medium text-neutralDark">
                    • Objetivo:{" "}
                  </span>
                  {t.objetivo}
                </li>
                <li>
                  <span className="font-medium text-neutralDark">
                    • Duração:{" "}
                  </span>
                  {t.duracao}
                </li>
                <li>
                  <span className="font-medium text-neutralDark">
                    • Público-alvo:{" "}
                  </span>
                  {t.publico}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Treinamentos() {
  return (
    <section id="treinamentos" className="bg-neutralLight">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6 text-center">
        <h2 className="font-title font-bold text-4xl md:text-4xl text-primaryDark">
          Treinamentos para Sistemas de Gestão
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
          alt="Treinamentos"
          className="rounded-3xl shadow-xl border border-sand/60"
        />
        <div>
          <p className="mt-4 md:text-lg max-w-prose text-neutralDark">
            A SISTEGE é referência em desenvolvimento profissional , oferecendo
            soluções de capacitação alinhadas às melhores práticas
            internacionais e às normas ISO. Nossa área de treinamentos é
            especializada em preparar profissionais e organizações para os
            desafios das certificações das organizações do mercado, com
            programas práticos, personalizados e baseados em normas
            reconhecidas, como as normas ISO 27001, ISO 27701, ISO20000-1 e ISO
            22301, e a realizar auditorias conforme a norma ISO19011.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <DifferentialsCarousel />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <FolderTabs />
      </div>
      <div className="text-center">
        <p className="mt-4 md:text-lg max-w-prose text-neutralDark mx-auto p-10">
          Transformamos conhecimento em resultados tangíveis. Somos
          especialistas em capacitar profissionais e organizações para dominarem
          os desafios dos sistemas de gestão, com treinamentos que combinam
          rigor técnico e aplicação prática, assim desenvolvemos os
          profissionais alinhados com as normas ISO.
        </p>
      </div>

      <div className="text-center p-10">
        <a
          href="#contato"
          className="font-title font-semibold tracking-wide uppercase inline-block rounded-full bg-primary hover:bg-primaryLight text-white px-6 py-3 font-medium shadow-[0_4px_10px_rgba(0,0,0,0.12)]"
        >
          Solicitar catálogo
        </a>
      </div>
    </section>
  );
}

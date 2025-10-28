import React, { useState } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Valor from "./components/Valor";
import Servicos from "./components/Servicos";
import Treinamentos from "./components/Treinamentos";

function FolderTabs() {
  const tabs = [
    {
      label: "Interpretação dos Requisitos da Norma",
      color: "bg-[#F8F6F5]",
      accent: "bg-[#ECE9E8]",
      objetivo:
        "Capacitar os profissionais para compreender como atender aos requisitos do Sistema de Gestão da norma escolhida, e formar a base para os auditores internos para avaliar sistemas de gestão com eficácia.",
      duracao: "16 horas.",
      publico:
        "Profissionais de qualidade, segurança da informação, meio ambiente e gestão de riscos.",
    },
    {
      label: "Implantação de Sistemas de Gestão",
      color: "bg-[#F8F6F5]",
      accent: "bg-[#ECE9E8]",
      objetivo:
        "Identificar as etapas e conteúdos necessários para implementar sistemas conforme normas ISO.",
      duracao: "32 horas (personalizável).",
      publico: "Gestores, consultores e equipes de implementação.",
    },
    {
      label: "Documentação SGSI – ISO27001",
      color: "bg-[#F8F6F5]",
      accent: "bg-[#ECE9E8]",
      objetivo:
        "Capacitar os participantes para entenderem, elaborarem e manterem a documentação necessária ao SGSI, conforme os requisitos da ISO/IEC 27001:2022.",
      duracao: "16 horas.",
      publico:
        "Profissionais de segurança da informação que participem da implantação, manutenção e melhoria de um SGSI.",
    },
    {
      label: "Controles Anexo A – ISO 27001",
      color: "bg-[#F8F6F5]",
      accent: "bg-[#ECE9E8]",
      objetivo:
        "Capacitar os participantes para entenderem, elaborarem e manterem a documentação necessária ao SGSI, conforme os requisitos da ISO/IEC 27001:2022.",
      duracao: "16 horas.",
      publico:
        "Profissionais de segurança da informação que participem da implantação, manutenção e melhoria de um SGSI.",
    },
    {
      label: "Formação de Auditores Internos – ISO 19011",
      color: "bg-[#F8F6F5]",
      accent: "bg-[#ECE9E8]",
      objetivo:
        "Capacitar auditores internos para avaliar sistemas de gestão com eficácia.",
      duracao: "16 horas.",
      publico:
        "Profissionais de qualidade, segurança da informação, gestão de serviços, gestão de privacidade, continuidade do negócio e gestão de riscos.",
    },
    {
      label: "Gestão de Riscos (ISO 31000/27005)",
      color: "bg-[#F8F6F5]",
      accent: "bg-[#ECE9E8]",
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
          className={`group relative rounded-3xl ${t.color} shadow-lg border border-[#ECE9E8] p-5 md:p-6 transition`}
        >
          {/* Aba/orelha da pasta */}
          <span
            className={`absolute -top-3 left-6 ${t.accent} text-[#1E1E1E] text-sm px-3 py-1 rounded-t-xl rounded-b-md shadow`}
          >
            {t.label}
          </span>

          {/* Cabeçalho compacto */}
          <div className="text-[#1E1E1E]">
            <p className="text-sm opacity-70">
              Abra a pasta para explorar os conteúdos.
            </p>
          </div>

          {/* Conteúdo que “abre” no hover */}
          <div
            className="
              mt-4 max-h-0 opacity-0 overflow-hidden
              group-hover:max-h-[420px] group-hover:opacity-100
              transition-all duration-500 ease-out
            "
          >
            <div className="rounded-2xl bg-white p-4">
              <ul className="space-y-2 text-[#5C5C5C] text-sm">
                <li>
                  <span className="font-medium text-[#1E1E1E]">
                    • Objetivo:{" "}
                  </span>
                  {t.objetivo}
                </li>
                <li>
                  <span className="font-medium text-[#1E1E1E]">
                    • Duração:{" "}
                  </span>
                  {t.duracao}
                </li>
                <li>
                  <span className="font-medium text-[#1E1E1E]">
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

export default function App() {
  return (
    <div className="min-h-screen text-[#1E1E1E] font-sans">
      <Navbar />

      <Hero />

      <Valor />

      <Servicos />

      <Treinamentos />

      {/* QUEM SOMOS */}
      <section id="sobre" className="bg-[#F8F6F5]">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-start">
          {/* --- COLUNA ESQUERDA (igual à sua) --- */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1E1E1E]">
              Nossa Liderança
            </h2>
            <h3 className="font-serif text-2xl md:text-2xl pt-3 text-[#1E1E1E]">
              Uma mensagem do nosso diretor técnico
            </h3>
            <p className="mt-6 md:text-lg max-w-prose text-[#1E1E1E]">
              "Na SISTEGE, acreditamos que a implantação de um sistema de gestão
              só faz sentido quando transforma desafios em oportunidades
              reais... Juntos, vamos além dos resultados esperados."
            </p>
            <p className="mt-6 md:text-md max-w-prose text-right italic text-[#1E1E1E]">
              Reinaldo Zampieri
            </p>

            {/* Medalhas de destaque */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {/* Medalha 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-32 h-32 flex items-center justify-center rounded-full text-white text-3xl font-bold bg-[#7A1631] shadow-lg">
                  30+
                </div>
                <p className="mt-3 font-medium text-[#1E1E1E]">
                  anos de experiência em Sistemas de Gestão
                </p>
              </div>

              {/* Medalha 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-32 h-32 flex items-center justify-center rounded-full text-white text-3xl font-bold bg-[#561024] shadow-lg">
                  100%
                </div>
                <p className="mt-3 font-medium text-[#1E1E1E]">
                  Foco em sistemas ISO
                </p>
              </div>

              {/* Medalha 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-32 h-32 flex items-center justify-center rounded-full text-white text-2xl font-bold bg-[#A43C55] shadow-lg">
                  6.000h+
                </div>
                <p className="mt-3 font-medium text-[#1E1E1E]">
                  Treinamentos ministrados
                </p>
              </div>
            </div>
          </div>

          {/* --- COLUNA DIREITA: BIO DO DIRETOR --- */}
          <div className="space-y-6">
            {/* Card com foto + resumo */}
            <div className="bg-white rounded-3xl shadow p-6 md:p-7 border border-[#ECE9E8]">
              <div className="flex items-start gap-5">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
                  alt="Diretor técnico"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover shadow-lg mx-auto rounded-full"
                />

                <div>
                  <div className="font-serif text-2xl md:text-3xl text-[#1E1E1E]">
                    Reinaldo Zampieri
                  </div>
                  <div className="text-sm mt-1 bg-[#7A1631] text-white inline-block px-3 py-1 rounded-full">
                    Diretor Técnico • Auditor Líder (IRCA/RABQSA)
                  </div>
                  <p className="mt-3 text-sm md:text-base opacity-80 text-[#1E1E1E]">
                    Profissional especializado em auditorias e implantação de
                    normas ISO. Instrutor com 6.280+ horas de treinamentos (ISO
                    9001, 27001, 27701, 20000-1, 22301). Atuação no Brasil e
                    América do Sul, pioneiro em auditorias integradas.
                  </p>
                </div>
              </div>
            </div>

            {/* Blocos expansíveis (sem libs) */}
            <details className="group bg-white rounded-2xl shadow p-5 border border-[#ECE9E8]">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-serif text-xl text-[#1E1E1E]">
                  Diferenciais Profissionais
                </span>
                <span className="transition group-open:rotate-180 text-[#1E1E1E]">
                  ⌄
                </span>
              </summary>
              <ul className="mt-3 space-y-2 text-sm md:text-base opacity-85 text-[#5C5C5C]">
                <li>• 6.280+ horas de treinamentos ministrados</li>
                <li>• 255+ dias em auditorias de terceira parte</li>
                <li>
                  • Projetos no Brasil, Argentina, Chile, Colômbia, Peru,
                  Equador e Venezuela
                </li>
                <li>
                  • Participação pioneira em certificações inéditas na América
                  do Sul
                </li>
                <li>
                  • Instrutor e mentor de auditores e equipes técnicas (SI,
                  continuidade, serviços, qualidade e privacidade)
                </li>
              </ul>
            </details>

            <details className="group bg-white rounded-2xl shadow p-5 border border-[#ECE9E8]">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-serif text-xl text-[#1E1E1E]">
                  Realizações de Destaque
                </span>
                <span className="transition group-open:rotate-180 text-[#1E1E1E]">
                  ⌄
                </span>
              </summary>
              <ul className="mt-3 space-y-2 text-sm md:text-base opacity-85 text-[#5C5C5C]">
                <li>
                  • Pioneiro em auditorias integradas ISO 27001, ISO 20000-1 e
                  ISO 9001 na América do Sul
                </li>
                <li>
                  • Conduziu a 1ª certificação de Continuidade de Negócios na
                  América do Sul
                </li>
                <li>
                  • Responsável pela 1ª certificação de Privacidade de Dados
                  Pessoais em Data Center no Brasil
                </li>
              </ul>
            </details>

            <details className="group bg-white rounded-2xl shadow p-5 border border-[#ECE9E8]">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-serif text-xl text-[#1E1E1E]">
                  Áreas de Especialização
                </span>
                <span className="transition group-open:rotate-180 text-[#1E1E1E]">
                  ⌄
                </span>
              </summary>
              <ul className="mt-3 space-y-2 text-sm md:text-base opacity-85 text-[#5C5C5C]">
                <li>
                  • Auditoria Líder: ISO 9001, ISO 27001, ISO 27701, ISO 22301,
                  ISO 20000-1
                </li>
                <li>
                  • Implantação: Segurança da Informação, Serviços,
                  Continuidade, Privacidade (LGPD/ISO 27701), Qualidade
                </li>
                <li>
                  • Treinamentos: Auditores, Requisitos de Normas, Implantação,
                  Gestão de Riscos, Ferramentas da Qualidade
                </li>
              </ul>
            </details>
          </div>
        </div>
      </section>

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

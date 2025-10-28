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
  const go = (delta) =>
    setIdx((i) => (i + delta + slides.length) % slides.length);

  return (
    <div className="mt-10 text-slate-800 font-sans">
      <h3 className="text-2xl md:text-3xl font-serif text-center mb-8 text-slate-900">
        Diferenciais dos Nossos Treinamentos
      </h3>

      <div className="relative max-w-3xl mx-auto">
        {/* área do slide */}
        <div className="bg-white/30 border border-white/40 rounded-3xl p-8 md:p-10 shadow-xl backdrop-blur-sm transition duration-500">
          <div className="flex items-start gap-4">
            <div className="text-3xl md:text-4xl">{slides[idx].icon}</div>
            <div>
              <h4 className="font-serif text-2xl md:text-3xl text-slate-900">
                {slides[idx].title}
              </h4>
              <ul className="mt-4 space-y-2 text-slate-700 text-base md:text-lg">
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
          className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border border-slate-200 shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-white"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border border-slate-200 shadow-md w-10 h-10 flex items-center justify-center text-lg hover:bg-white"
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
                i === idx ? "bg-slate-900" : "bg-slate-400/50"
              }`}
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
      color: "bg-amber-50",
      accent: "bg-amber-200",
      objetivo:
        "Capacitar os profissionais para compreender como atender aos requisitos do Sistema de Gestão da norma escolhida, e formar a base para os auditores internos para avaliar sistemas de gestão com eficácia.",
      duracao: "16 horas.",
      publico:
        "Profissionais de qualidade, segurança da informação, meio ambiente e gestão de riscos.",
    },
    {
      label: "Implantação de Sistemas de Gestão",
      color: "bg-emerald-50",
      accent: "bg-emerald-200",
      objetivo:
        "Identificar as etapas e conteúdos necessários para implementar sistemas conforme normas ISO.",
      duracao: "32 horas (personalizável).",
      publico: "Gestores, consultores e equipes de implementação.",
    },
    {
      label: "Documentação SGSI – ISO27001",
      color: "bg-sky-50",
      accent: "bg-sky-200",
      objetivo:
        "Capacitar os participantes para entenderem, elaborarem e manterem a documentação necessária ao SGSI, conforme os requisitos da ISO/IEC 27001:2022.",
      duracao: "16 horas.",
      publico:
        "Profissionais de segurança da informação que participem da implantação, manutenção e melhoria de um SGSI.",
    },
    {
      label: "Controles Anexo A – ISO 27001",
      color: "bg-rose-50",
      accent: "bg-rose-200",
      objetivo:
        "Capacitar os participantes para entenderem, elaborarem e manterem a documentação necessária ao SGSI, conforme os requisitos da ISO/IEC 27001:2022.",
      duracao: "16 horas.",
      publico:
        "Profissionais de segurança da informação que participem da implantação, manutenção e melhoria de um SGSI.",
    },
    {
      label: "Formação de Auditores Internos – ISO 19011",
      color: "bg-violet-50",
      accent: "bg-violet-200",
      objetivo:
        "Capacitar auditores internos para avaliar sistemas de gestão com eficácia.",
      duracao: "16 horas.",
      publico:
        "Profissionais de qualidade, segurança da informação, gestão de serviços, gestão de privacidade, continuidade do negócio e gestão de riscos.",
    },
    {
      label: "Gestão de Riscos (ISO 31000/27005)",
      color: "bg-lime-50",
      accent: "bg-lime-200",
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
          className={`group relative rounded-3xl ${t.color} shadow-lg border border-white/40 p-5 md:p-6 transition`}
        >
          {/* Aba/orelha da pasta */}
          <span
            className={`absolute -top-3 left-6 ${t.accent} text-slate-800 text-sm px-3 py-1 rounded-t-xl rounded-b-md shadow`}
          >
            {t.label}
          </span>

          {/* Cabeçalho compacto */}
          <div className="text-slate-800">
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
            <div className="rounded-2xl bg-white/70 p-4">
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>
                  <span className="font-medium">• Objetivo: </span>
                  {t.objetivo}
                </li>
                <li>
                  <span className="font-medium">• Duração: </span>
                  {t.duracao}
                </li>
                <li>
                  <span className="font-medium">• Público-alvo: </span>
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
    <div className="min-h-screen text-slate-800 font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-serif text-2xl">
            SISTEGE
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#sobre" className="hover:opacity-70">
              Quem somos
            </a>
            <a href="#servicos" className="hover:opacity-70">
              Operação Assistida
            </a>
            <a href="#treinamentos" className="hover:opacity-70">
              Treinamentos
            </a>
            <a href="#contato" className="hover:opacity-70">
              Contato
            </a>
          </nav>
          <a
            href="#contato"
            className="hidden md:inline-block rounded-full px-5 py-2 bg-yellow-300 hover:bg-yellow-200"
          >
            Fale conosco
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender to-skybrand" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="font-serif text-5xl md:text-7xl leading-none">
              Sistemas de gestão{" "}
              <span className="block">com operação assistida</span>
            </h1>
            <p className="mt-6 text-lg opacity-90 max-w-prose">
              Implementamos e mantemos seus sistemas ISO lado a lado com a sua
              equipe — com transferência de conhecimento real.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="#servicos"
                className="rounded-full bg-white text-slate-900 px-6 py-3 font-medium shadow"
              >
                Conhecer a abordagem
              </a>
              <a
                href="#treinamentos"
                className="rounded-full border border-white/80 text-white px-6 py-3 font-medium"
              >
                Ver treinamentos
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop"
                alt="Foto destaque"
                className="w-[420px] max-w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl border-8 border-white/40"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 rounded-full px-5 py-2 text-sm shadow">
                ISO 27001 • 27701 • 20000-1 • 22301 • 9001
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOCO VALOR */}
      <section className="bg-skybrand text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <p className="text-lg md:text-xl opacity-95">
            A SISTEGE é mais que uma consultoria no sentido tradicional. Em vez
            disso, oferecemos uma operação assistida, focada na transferência de
            conhecimento para o cliente. Nosso objetivo é capacitar a
            organização a gerenciar seus sistemas de gestão de forma autônoma e
            eficiente, garantindo que o conhecimento e as melhores práticas
            sejam internalizadas pela equipe interna.
          </p>
        </div>
      </section>

      {/* SERVIÇOS / OPERAÇÃO ASSISTIDA */}
      <section id="servicos" className="relative">
        <div className="absolute inset-0 -z-10 bg-orangebrand" />

        {/* bloco texto + imagem */}
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* texto */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Operação Assistida
            </h2>

            <p className="mt-6 text-white/95 md:text-lg max-w-prose">
              Neste modelo de suporte trabalhamos lado a lado com a equipe do
              cliente, fornecendo orientação, ferramentas e metodologias para
              implementar, manter e melhorar sistemas de gestão:
            </p>

            <ul className="mt-4 space-y-3 text-white/95 md:text-lg max-w-prose list-none">
              <li>
                • SGSI (ISO/IEC 27001:2024) e Privacidade (ISO/IEC 27701:2019);
              </li>
              <li>• SGS (ISO/IEC 20000-1:2024);</li>
              <li>• SGCN (ISO/IEC 22301:2024).</li>
            </ul>

            <p className="mt-6 text-white/90 md:text-lg max-w-prose">
              Diferente da consultoria tradicional, a operação assistida garante
              que o cliente não dependa eternamente de um consultor externo, mas
              sim adquira o conhecimento necessário para gerenciar seus
              processos de forma independente.
            </p>

            <p className="mt-8 font-medium text-white/90">
              Principais serviços na operação assistida:
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Time trabalhando"
              className="rounded-3xl shadow-2xl border-8 border-white/40 max-w-md"
            />
          </div>
        </div>

        {/* cards */}
        <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group [perspective:1000px]">
            <div className="relative aspect-square w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-white/15 border border-white/40 rounded-2xl p-10 flex items-center justify-center text-center text-white/95 backdrop-blur-sm [backface-visibility:hidden]">
                <p className="font-medium">
                  Implementação de Sistemas de Gestão
                </p>
              </div>
              <div className="absolute inset-0 bg-white/20 border border-white/40 rounded-2xl p-10 flex items-center justify-center text-center text-white/90 backdrop-blur-sm [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-sm">
                  • Orientação no desenvolvimento de Políticas e Procedimentos
                  personalizados; <br /> • Monitoramento da implementação de
                  controles.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group [perspective:1000px]">
            <div className="relative aspect-square w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-white/15 border border-white/40 rounded-2xl p-10 flex items-center justify-center text-center text-white/95 backdrop-blur-sm [backface-visibility:hidden]">
                <p className="font-medium">Suporte na Manutenção e Melhoria</p>
              </div>
              <div className="absolute inset-0 bg-white/20 border border-white/40 rounded-2xl p-10 flex items-center justify-center text-center text-white/90 backdrop-blur-sm [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-sm">
                  • Monitoramento contínuo de desempenho e identificação de
                  oportunidades de melhoria; <br />• Auditorias internas
                  assistidas.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group [perspective:1000px]">
            <div className="relative aspect-square w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-white/15 border border-white/40 rounded-2xl p-10 flex items-center justify-center text-center text-white/95 backdrop-blur-sm [backface-visibility:hidden]">
                <p className="font-medium">Preparação para Certificação</p>
              </div>
              <div className="absolute inset-0 bg-white/20 border border-white/40 rounded-2xl p-10 flex items-center justify-center text-center text-white/90 backdrop-blur-sm [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-sm">
                  • Simulações de auditorias e revisões detalhadas; <br />•
                  Apoio durante auditoria de certificação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* botão */}
        <div className="text-center mt-10 p-6">
          <a
            href="#contato"
            className="inline-block rounded-full bg-white text-slate-900 px-6 py-3 font-medium shadow hover:shadow-md"
          >
            Quero conversar
          </a>
        </div>
      </section>

      {/* TREINAMENTOS */}
      <section id="treinamentos" className="bg-lilac">
        {/* título centralizado com espaçamento equilibrado */}
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">
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
            <p className="mt-4 md:text-lg max-w-prose">
              A SISTEGE é referência em desenvolvimento profissional, oferecendo
              soluções de capacitação alinhadas às melhores práticas
              internacionais e às normas ISO. Nossa área de treinamentos é
              especializada em preparar profissionais e organizações para os
              desafios das certificações das organizações do mercado, com
              programas práticos, personalizados e baseados em normas
              reconhecidas, como as normas ISO 27001, ISO 27701, ISO20000-1 e
              ISO 22301, e a realizar auditorias conforme a norma ISO19011.
            </p>

            <p className="mt-4 md:text-lg max-w-prose">
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
            className="inline-block rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-700"
          >
            Solicitar catálogo
          </a>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="sobre" className="bg-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Quem somos</h2>
            <p className="mt-6 md:text-lg max-w-prose">
              Especialistas em transformar desafios de gestão em resultados
              práticos, sempre com transferência de conhecimento.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-2xl p-6 shadow">
                <div className="text-3xl font-semibold">10+</div>
                <div className="text-sm opacity-70">anos de atuação</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow">
                <div className="text-3xl font-semibold">100%</div>
                <div className="text-sm opacity-70">foco em sistemas ISO</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-medium">Missão</h3>
              <p className="text-sm opacity-80 mt-1">
                Soluções eficientes e sustentáveis no dia a dia do cliente.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-medium">Visão</h3>
              <p className="text-sm opacity-80 mt-1">
                Ser referência em operação assistida.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-medium">Valores</h3>
              <p className="text-sm opacity-80 mt-1">
                Ética, transparência, qualidade e valorização das pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CONTATO */}
      <section id="contato" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Contato</h2>
            <p className="mt-6 md:text-lg max-w-prose">
              Envie uma mensagem e retornaremos em breve.
            </p>
            <form className="mt-8 grid gap-4">
              <input
                placeholder="Nome"
                className="border rounded-xl px-4 py-3"
              />
              <input
                placeholder="E-mail"
                className="border rounded-xl px-4 py-3"
              />
              <textarea
                rows={4}
                placeholder="Como podemos ajudar?"
                className="border rounded-xl px-4 py-3"
              />
              <button
                type="button"
                className="w-max rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-700"
              >
                Enviar
              </button>
            </form>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 shadow">
            <h3 className="font-medium text-lg">Informações</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• E-mail: contato@sistege.net.br</li>
              <li>• São Paulo / Valinhos — SP</li>
              <li>• Instagram: @sistege_sg</li>
            </ul>
            <div className="mt-6 h-56 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center text-slate-500">
              Mapa / endereço
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Sistege — Sistemas de Gestão</p>
          <div className="opacity-70">Feito por Nathalie Zampieri</div>
        </div>
      </footer>
    </div>
  );
}

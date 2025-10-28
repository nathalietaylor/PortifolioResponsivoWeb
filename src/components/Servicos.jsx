import React from "react";

export default function Servicos() {
  return (
    <section id="servicos" className="relative">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white">
          Operação Assistida
        </h2>
      </div>
      <div className="absolute inset-0 -z-10 bg-primary" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mt-6 text-white/95 md:text-lg max-w-prose">
            Neste modelo de suporte trabalhamos lado a lado com a equipe do
            cliente, fornecendo orientação, ferramentas e metodologias para
            implementar, manter e melhorar sistemas de gestão, como:
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
            sim adquira o conhecimento necessário para gerenciar seus processos
            de forma independente.
          </p>
          <div className="max-w-6xl mx-auto px-4 pt-12 pb-1 text-center">
            <h3 className="font-serif text-2xl md:text-2xl text-white">
              Principais serviços na operação assistida:
            </h3>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
            alt="Time trabalhando"
            className="rounded-3xl shadow-2xl border-8 border-white/70 max-w-md"
          />
        </div>
      </div>

      {/* cards */}
      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            f: "Implementação de Sistemas de Gestão",
            b: "• Políticas e Procedimentos personalizados.\n• Monitoramento da implementação de controles.",
          },
          {
            f: "Suporte na Manutenção e Melhoria",
            b: "• Monitoramento contínuo de desempenho.\n• Auditorias internas assistidas.",
          },
          {
            f: "Preparação para Certificação",
            b: "• Simulações e revisões detalhadas.\n• Apoio durante auditoria de certificação.",
          },
        ].map((c, i) => (
          <div key={i} className="group [perspective:1000px]">
            <div className="relative aspect-square w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* frente */}
              <div className="absolute inset-0 bg-goldAccent/10 border border-goldAccent/25 rounded-2xl p-10 flex items-center justify-center text-center text-white/95 backdrop-blur-sm [backface-visibility:hidden] shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
                <p className="font-medium">{c.f}</p>
              </div>
              {/* verso */}
              <div className="absolute inset-0 bg-goldAccent/15 border border-goldAccent/30 rounded-2xl p-10 flex items-center justify-center text-center text-white/90 backdrop-blur-sm [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                <p className="text-sm whitespace-pre-line">{c.b}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* botão */}
      <div className="text-center mt-10 p-6">
        <a
          href="#contato"
          className="inline-block rounded-full bg-white text-neutralDark px-6 py-3 font-medium shadow hover:shadow-md border border-goldAccent/25"
        >
          Quero conversar
        </a>
      </div>
    </section>
  );
}

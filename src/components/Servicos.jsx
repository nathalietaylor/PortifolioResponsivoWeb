import React from "react";

export default function Servicos() {
  return (
    <section id="servicos" className="relative">
      <div className="absolute inset-0 -z-10 bg-[#561024]" />

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
            sim adquira o conhecimento necessário para gerenciar seus processos
            de forma independente.
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
              <p className="font-medium">Implementação de Sistemas de Gestão</p>
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
                • Simulações de auditorias e revisões detalhadas; <br />• Apoio
                durante auditoria de certificação.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* botão */}
      <div className="text-center mt-10 p-6">
        <a
          href="#contato"
          className="inline-block rounded-full bg-white text-[#1E1E1E] px-6 py-3 font-medium shadow hover:shadow-md"
        >
          Quero conversar
        </a>
      </div>
    </section>
  );
}

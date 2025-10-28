import React from "react";

export default function QuemSomos() {
  return (
    <section id="sobre" className="bg-goldAccent bg-opacity-50">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-start">
        {/* COLUNA ESQUERDA */}
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-primaryDark">
            Nossa Liderança
          </h2>
          <h3 className="font-serif text-2xl md:text-2xl pt-3 text-primaryDark">
            Uma mensagem do nosso diretor técnico
          </h3>
          <p className="mt-6 md:text-lg max-w-prose text-[#1E1E1E]">
            "Na SISTEGE, acreditamos que a implantação de um sistema de gestão
            só faz sentido quando transforma desafios em oportunidades reais...
            Juntos, vamos além dos resultados esperados."
          </p>
          <p className="mt-6 md:text-md max-w-prose text-right italic text-[#1E1E1E]">
            Reinaldo Zampieri
          </p>

          {/* Medalhas de destaque */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <div className="relative flex flex-col items-center text-center">
              <div className="w-32 h-32 flex items-center justify-center rounded-full text-white text-3xl font-bold bg-[#7A1631] shadow-lg">
                30+
              </div>
              <p className="mt-3 font-medium text-[#1E1E1E]">
                anos de experiência em Sistemas de Gestão
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-32 h-32 flex items-center justify-center rounded-full text-white text-3xl font-bold bg-[#561024] shadow-lg">
                100%
              </div>
              <p className="mt-3 font-medium text-[#1E1E1E]">
                Foco em sistemas ISO
              </p>
            </div>

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

        {/* COLUNA DIREITA */}
        <div className="space-y-6">
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
                • Projetos no Brasil, Argentina, Chile, Colômbia, Peru, Equador
                e Venezuela
              </li>
              <li>
                • Participação pioneira em certificações inéditas na América do
                Sul
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
                • Pioneiro em auditorias integradas ISO 27001, ISO 20000-1 e ISO
                9001 na América do Sul
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
                • Implantação: Segurança da Informação, Serviços, Continuidade,
                Privacidade (LGPD/ISO 27701), Qualidade
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
  );
}

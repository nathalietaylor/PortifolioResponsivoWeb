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
                  Impleantação de Sistemas de Gestão
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
                  • Monitoramneto contínuo de desempenho e identificação de
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
                  • Simulações de auditorias e revisõess detalhadas; <br />•
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
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
            alt="Treinamentos"
            className="rounded-3xl shadow-xl"
          />
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">
              Treinamentos para Sistemas de Gestão
            </h2>
            <p className="mt-6 md:text-lg max-w-prose">
              Ao vivo e práticos, alinhados às normas ISO, com exercícios
              aplicados à realidade da sua empresa.
            </p>
            <ul className="mt-6 space-y-3">
              <li>• Online ao vivo, com materiais</li>
              <li>• In-company e turmas abertas</li>
              <li>• Trilhas: 27001/27701, 20000-1, 22301, 9001</li>
            </ul>
            <a
              href="#contato"
              className="inline-block mt-8 rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-700"
            >
              Solicitar catálogo
            </a>
          </div>
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

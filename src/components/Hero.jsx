import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* fundo suave em degradê claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutralLight to-sand" />
      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-neutralDark">
          <h1 className="font-title font-bold text-5xl md:text-7xl leading-none text-neutralDark">
            Sistemas de gestão{" "}
            <span className="block">com operação assistida</span>
          </h1>
          <p className="font-body font-semibold mt-6 text-lg text-slate max-w-prose">
            Implementamos e mantemos seus sistemas ISO lado a lado com a sua
            equipe — com transferência de conhecimento real.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#servicos"
              className="font-title font-semibold tracking-wide uppercase rounded-full bg-primary text-white px-6 py-3 font-medium shadow-[0_4px_10px_rgba(0,0,0,0.12)] hover:bg-primaryLight"
            >
              Conhecer a abordagem
            </a>
            <a
              href="#treinamentos"
              className="font-title font-semibold tracking-wide uppercase rounded-full border border-primary/25 text-goldAccent px-6 py-3 font-medium hover:border-white hover:bg-goldAccent/60 hover:text-white"
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
              className="w-[420px] max-w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

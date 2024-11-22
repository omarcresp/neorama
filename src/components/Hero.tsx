import React from "react";
// import { Star } from "lucide-react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#20094b] flex items-center justify-center overflow-hidden">
      <div className="hero-bg-image"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/** <Star className="w-32 h-32 text-[#fa69ff] animate-spin-slow" /> */}
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex h-screen items-center">
        <div className="flex-1 w-full min-w-2/3">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Agencia creativa digital
          </h1>
          <p className="text-xl text-[#debb67] mb-12">
            Damos vida a tu marca con contenido creativo y auténtico para el mundo digital.
          </p>
          <a href="#contacto" role="button" className="bg-[#fa69ff] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d1e123] transition-all transform hover:scale-105">
            Agenda tu asesoría gratuita
          </a>
        </div>
        <div className="w-1/2">
          <img className="aspect-square w-full animate-rotate-180" src="/images/logo.PNG" alt="" />
        </div>
      </div>
    </div>
  );
}


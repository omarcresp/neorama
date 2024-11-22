import React from "react";
// import { Star } from "lucide-react";
import "./hero.css";

export default function Hero() {
  return (
    <div id="inicio" className="relative min-h-screen bg-[#20094b] flex items-center justify-center overflow-hidden">
      <div className="hero-bg-image"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row mt-8 h-screen items-center">
        <div className="flex-1 w-full min-w-2/3 flex flex-col items-center md:items-baseline">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight text-center md:text-left">
            Agencia creativa digital
          </h1>
          <p className="text-xl text-[#debb67] mb-12">
            Damos vida a tu marca con contenido creativo y auténtico para el mundo digital.
          </p>
          <a
            href="#contacto"
            role="button"
            className="bg-[#fa69ff] inline-block min-w-[max-content] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d1e123] transition-all transform hover:scale-105">
            Agenda tu asesoría gratuita
          </a>
        </div>
        <div className="w-3/4 md:w-1/2">
          <img className="aspect-square w-full animate-rotate-180" src="/images/logo.PNG" alt="" />
        </div>
      </div>
    </div>
  );
}


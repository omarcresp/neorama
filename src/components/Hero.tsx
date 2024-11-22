import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#20094b] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Star className="w-32 h-32 text-[#fa69ff] animate-spin-slow" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
          Damos vida a tu marca con contenido creativo y auténtico para el mundo digital
        </h1>
        <p className="text-xl text-[#debb67] mb-12">
          Transformamos ideas en experiencias audiovisuales extraordinarias
        </p>
        <button className="bg-[#fa69ff] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d1e123] transition-all transform hover:scale-105">
          Comienza tu proyecto
        </button>
      </div>
    </div>
  );
}
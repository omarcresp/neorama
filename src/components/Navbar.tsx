// import { Menu } from 'lucide-react';
import React from "react"
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#20094b]/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-[#fa69ff] text-2xl font-bold">NEORAMA</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-white hover:text-[#fa69ff] transition-colors">Inicio</a>
              <a href="#servicios" className="text-white hover:text-[#fa69ff] transition-colors">Servicios</a>
              <a href="#portafolio" className="text-white hover:text-[#fa69ff] transition-colors">Portafolio</a>
              <a href="#blog" className="text-white hover:text-[#fa69ff] transition-colors">Blog</a>
              <a href="#sobre-nosotros" className="text-white hover:text-[#fa69ff] transition-colors">Sobre Nosotros</a>
              <a href="#contacto" role="button" className="bg-[#fa69ff] text-white px-4 py-2 rounded-lg hover:bg-[#d1e123] transition-colors">
                Contáctanos
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#fa69ff]"
            >
              {/** <Menu /> */}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#20094b]">
            <a href="#inicio" className="block text-white hover:text-[#fa69ff] px-3 py-2">Inicio</a>
            <a href="#servicios" className="block text-white hover:text-[#fa69ff] px-3 py-2">Servicios</a>
            <a href="#portafolio" className="block text-white hover:text-[#fa69ff] px-3 py-2">Portafolio</a>
            <a href="#blog" className="block text-white hover:text-[#fa69ff] px-3 py-2">Blog</a>
            <a href="#sobre-nosotros" className="block text-white hover:text-[#fa69ff] px-3 py-2">Sobre Nosotros</a>
            <button className="w-full bg-[#fa69ff] text-white px-4 py-2 rounded-lg hover:bg-[#d1e123] transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

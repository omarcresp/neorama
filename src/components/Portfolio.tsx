import React from "react"
import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'empresas', name: 'Empresas' },
    { id: 'rrss', name: 'Entretenimiento / RRSS' },
    { id: 'marcas', name: 'Marcas Personales' },
  ];

  const projects = [
    {
      category: 'empresas',
      image: '/images/portafolio1.jpeg',
      title: 'Diseño de post'
    },
    {
      category: 'empresas',
      image: '/images/portafolio2.jpeg',
      title: 'Diseño de post'
    },
    {
      category: 'empresas',
      image: '/images/portafolio7.jpeg',
      title: 'Foto corporativa'
    },
    {
      category: 'rrss',
      image: '/images/portafolio3.jpeg',
      title: 'Diseño de post'
    },
    {
      category: 'marcas',
      image: '/images/portafolio4.jpeg',
      title: 'Sesión de fotos'
    },
    {
      category: 'rrss',
      image: '/images/portafolio8.jpeg',
      title: 'Videos',
      url: 'https://vimeo.com/user231044429'
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portafolio" className="py-20 bg-[#20094b]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Conoce Nuestro Trabajo
        </h2>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-[#fa69ff] text-white'
                  : 'bg-transparent text-white hover:bg-[#fa69ff]/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => project.url && window.open(project.url, "_blank")}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-square object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20094b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

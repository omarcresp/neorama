import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'empresas', name: 'Empresas' },
    { id: 'marcas', name: 'Marcas Personales' },
    { id: 'entretenimiento', name: 'Entretenimiento' }
  ];

  const projects = [
    {
      category: 'empresas',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800',
      title: 'Campaña Corporativa XYZ'
    },
    {
      category: 'marcas',
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800',
      title: 'Personal Branding'
    },
    {
      category: 'entretenimiento',
      image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800',
      title: 'Evento Musical'
    },
    // Add more projects as needed
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
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20094b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-[#debb67]">Ver proyecto</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
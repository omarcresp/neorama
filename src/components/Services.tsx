import React from "react"
// import { Video, Share2, PenTool, MonitorPlay } from 'lucide-react';

export default function Services() {
  const services = [
    {
      // icon: <Video className="w-12 h-12 text-[#fa69ff]" />,
      title: "Creación Audiovisual",
      description: "Capturamos la esencia de tu marca a través de contenido audiovisual atractivo"
    },
    {
      // icon: <PenTool className="w-12 h-12 text-[#fa69ff]" />,
      title: "Edición de Video Profesional",
      description: "Transformamos tu material en historias cautivadoras con edición de alta calidad"
    },
    {
      // icon: <Share2 className="w-12 h-12 text-[#fa69ff]" />,
      title: "Gestión de Redes Sociales",
      description: "Estrategias efectivas para maximizar tu presencia en medios digitales"
    },
    {
      // icon: <MonitorPlay className="w-12 h-12 text-[#fa69ff]" />,
      title: "Desarrollo de Contenido Web",
      description: "Contenido optimizado para destacar en el entorno digital"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-[#20094b]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          ¿Porqué contratar o confiar en Neorama?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#20094b] p-6 rounded-lg border border-[#fa69ff]/20 hover:border-[#fa69ff] transition-all transform hover:-translate-y-2"
            >
              {/** <div className="mb-4">{service.icon}</div> */}
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

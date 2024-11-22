import React from "react";

export default function ContactForm() {
  return (
    <section id="contacto" className="py-20 bg-[#20094b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Comencemos a Trabajar
        </h2>
        
        <form action="https://formsubmit.co/agencianeorama@gmail.com" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fa69ff]"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Empresa o marca"
              className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fa69ff]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fa69ff]"
              required
            />
            <input
              type="tel"
              name="tel"
              placeholder="Número de teléfono"
              className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fa69ff]"
            />
          </div>
          <textarea
            placeholder="¿Cómo podemos ayudarte?"
            rows={6}
            name="text"
            className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fa69ff]"
            required
          ></textarea>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              Acepto los términos y política de tratamiento de datos
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#fa69ff] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d1e123] transition-all transform hover:scale-105"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

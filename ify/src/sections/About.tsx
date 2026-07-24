import React from "react";

export const About = () => {
  return (
    <>
      <section
        id="nosotros"
        className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-8">
          Quiénes somos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mt-4">
              Una empresa creativa que pone el alma en cada detalle.
            </h2>
            <p className="text-lg text-gray-500 max-w-lg mt-4">
              Comenzamos con el objetivo de ofrecer soluciones prácticas y
              originales para personas y emprendimientos que buscan destacarse.
              Trabajamos con materiales de calidad, herramientas modernas y,
              sobre todo, creatividad.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="border border-gray-100 p-6">
              <h2 className="text-4xl font-bold">+500</h2>
              <p className="text-sm text-gray-400 mt-1">Clientes satisfechos</p>
            </div>
            <div className="border border-gray-100 p-6">
              <h2 className="text-4xl font-bold">+5</h2>
              <p className="text-sm text-gray-400 mt-1">Años de experiencia</p>
            </div>
            <div className="border border-gray-100 p-6">
              <h2 className="text-4xl font-bold">∞</h2>
              <p className="text-sm text-gray-400 mt-1">Posibilidades</p>
            </div>

            <div className="border border-gray-100 p-6">
              <h2 className="text-4xl font-bold">100%</h2>
              <p className="text-sm text-gray-400 mt-1">Dedicación</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React from "react";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="bg-black rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="text-white">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
            Contacto
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mt-2">
            ¿Tenés un proyecto
            <br /> en mente?
          </h2>
        </div>

        <a
          href="https://wa.me/5493435149412?text=¡Hola%20IFY!%20Vi%20su%20página%20web%20y%20me%20gustaría%20consultar%20por%20un%20trabajo."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 w-full sm:w-auto">
          Escribinos ↗
        </a>
      </div>
    </section>
  );
};

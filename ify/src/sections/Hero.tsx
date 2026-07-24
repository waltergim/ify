import React from "react";

export const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col">
        <section className="flex flex-col gap-6">
          <p className="text-sm text-gray-400 uppercase tracking-widest">
            Impresiones & Personalización
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-2xl font-bold tracking-tight leading-tight">
            Tus ideas, <br /> impresas.
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-lg">
            Transformamos tu marca en productos únicos. Estampados, stickers,
            banners y más — con calidad, diseño y atención personalizada.
          </p>
        </section>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5">
          <button className="rounded-full bg-black text-white px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 w-full sm:w-auto">
            <a
              href="#trabajos"
              className="rounded-full bg-black text-white px-6 py-3 ">
              Ver Trabajos
            </a>
          </button>
          <button className="border-black px-6 py-3 border rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 w-full sm:w-auto">
            <a href="#contacto">Hacer una consulta</a>
          </button>
        </div>
      </div>
    </>
  );
};

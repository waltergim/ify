import React from "react";

import { useEffect, useState } from "react";
import { getServicios } from "../services/api";

export const Services = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getServicios();
      setServicios(response);
      console.log(servicios, "xd");
    };
    fetchData();
  }, []);

  return (
    <>
      <section
        id="servicios"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-8">
          Qué hacemos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] mt-10 bg-white">
          {[...servicios].map((servicio) => (
            <div key={servicio.id} className="border border-gray-100 p-6">
              <h2 className="text-xl sm:text-2xl">{servicio.title}</h2>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-8">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

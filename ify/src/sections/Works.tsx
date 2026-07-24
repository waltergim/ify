import { useEffect, useState } from "react";
import { getTrabajos } from "../services/api";

export const Works = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTrabajos();
      setPost(response);
      console.log(post, "xd");
    };
    fetchData();
  }, []);

  return (
    <>
      <section
        id="trabajos"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-8">
          Trabajos recientes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...post].reverse().map((trabajo: any) => (
            <div
              key={trabajo.id}
              className="group h-64 sm:h-80 w-full rounded overflow-hidden relative">
              <img
                src={trabajo.imageUrl}
                alt={trabajo.tag}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-xs bg-white px-2 py-1 rounded text-gray-700">
                  {trabajo.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

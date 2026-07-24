import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-bold text-xl tracking-tight">
            IFY
          </a>

          <ul className="hidden md:flex items-center gap-8 list-none">
            <li>
              <a
                href="#nosotros"
                className="text-sm text-gray-500 hover:text-black transition-colors">
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-sm text-gray-500 hover:text-black transition-colors">
                Qué hacemos
              </a>
            </li>
            <li>
              <a
                href="#trabajos"
                className="text-sm text-gray-500 hover:text-black transition-colors">
                Trabajos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-sm font-medium bg-black text-white px-5 py-2 rounded-full hover:opacity-80 transition-opacity">
                Contacto
              </a>
            </li>
          </ul>

          <button
            className="md:hidden p-2 cursor-pointer text-xl leading-none"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            aria-expanded={open}>
            {open ? "X" : "☰"}
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 sm:px-6 py-4 flex flex-col gap-4">
            <a
              href="#nosotros"
              onClick={() => setOpen(false)}
              className="text-sm text-gray-500 hover:text-black transition-colors">
              Nosotros
            </a>
            <a
              href="#servicios"
              onClick={() => setOpen(false)}
              className="text-sm text-gray-500 hover:text-black transition-colors">
              Qué hacemos
            </a>
            <a
              href="#trabajos"
              onClick={() => setOpen(false)}
              className="text-sm text-gray-500 hover:text-black transition-colors">
              Trabajos
            </a>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="text-sm font-medium bg-black text-white px-5 py-2.5 rounded-full text-center hover:opacity-80 transition-opacity">
              Contacto
            </a>
          </div>
        )}
      </header>
    </>
  );
};

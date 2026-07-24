export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Logo + copyright */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg tracking-tight">IFY</span>
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a
            href="https://www.instagram.com/ify.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-black transition-colors">
            Instagram
          </a>
          <a
            href="https://wa.me/5493435149412?text=¡Hola%20IFY!%20Vi%20su%20página%20web%20y%20me%20gustaría%20consultar%20por%20un%20trabajo."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-black transition-colors">
            WhatsApp
          </a>
          <a
            href="mailto:ify.com.ar@gmail.com"
            className="text-sm text-gray-500 hover:text-black transition-colors">
            ify.com.ar@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import TerminosModal from './TerminosModal';

const Footer = () => {
  const [correo, setCorreo] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnviarNoticias = (e) => {
    e.preventDefault();
    if (!correo.trim()) return;

    const mensaje = `Hola Dane Nails! Quiero suscribirme para recibir noticias y promos.\n\n- Mi correo es: ${correo}`;
    
    window.open(`https://wa.me/573117528529?text=${encodeURIComponent(mensaje)}`, '_blank');
    setCorreo('');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
        .font-amatic { font-family: 'Amatic SC', cursive; }
      `}</style>

      {/* FOOTER CON CONTENIDO CENTRADO Y ARMONIOSO */}
      <footer id="contacto" style={{ backgroundColor: '#F3EEF9' }} className="w-full pt-12 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          
          {/* GRILLA PRINCIPAL DE 4 COLUMNAS - CENTRADAS EN MÓVIL Y ORDENADAS EN DESKTOP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-10 items-start text-center md:text-left">
            
            {/* COLUMNA 1: LOGO Y REDES */}
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <img 
                  src="/logo-dane-1.png" 
                  alt="Dane Nails Logo" 
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-14 h-14 rounded-full bg-[#A694D0] hidden items-center justify-center text-white font-bold text-lg tracking-widest shadow-sm">
                  DN
                </div>

                <span className="font-amatic text-6xl font-bold text-[#A694D0] leading-none">
                  Dane Nails
                </span>
              </div>

              {/* REDES SOCIALES */}
              <div className="flex items-center justify-center md:justify-start gap-5 pt-2">
                <a 
                  href="https://www.facebook.com/share/19a9Wvzyhh/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#A694D0] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/danenails.barranquilla_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#A694D0] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@danenailsstudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#A694D0] transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23 1.01.12 2.11.83 2.82.72.71 1.81 1.02 2.8 0.77 1.03-.22 1.88-1.02 2.12-2.05.11-.64.07-1.3-.01-1.95.01-4.43.01-8.86.01-13.29z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* COLUMNA 2: NAVEGACIÓN */}
            <div className="space-y-3">
              <h4 className="font-amatic text-5xl font-bold text-[#A694D0] leading-none">
                Dane Nails
              </h4>
              <ul className="space-y-2 text-lg text-gray-600">
                <li><a href="#" className="hover:text-[#A694D0] transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-[#A694D0] transition-colors">Servicios</a></li>
                <li><a href="#cobertura" className="hover:text-[#A694D0] transition-colors">Reserva Ahora</a></li>
                <li><a href="#conocenos" className="hover:text-[#A694D0] transition-colors">Conócenos</a></li>
              </ul>
            </div>

            {/* COLUMNA 3: CONTACTO */}
            <div className="space-y-3">
              <h4 className="font-amatic text-5xl font-bold text-[#A694D0] leading-none">
                Contáctanos
              </h4>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>
                  <a 
                    href="https://wa.me/573117528529" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#A694D0] transition-colors"
                  >
                    Atención a Domicilio
                  </a>
                </li>
                <li>daneilisescorcia9@gmail.com</li>
                <li>Tel: +57 311 7528529</li>
              </ul>
            </div>

            {/* COLUMNA 4: RECIBE NOTICIAS */}
            <div className="space-y-3">
              <h4 className="font-amatic text-5xl font-bold text-[#A694D0] leading-none">
                Recibe Noticias!
              </h4>
              <form onSubmit={handleEnviarNoticias} className="space-y-3 max-w-sm mx-auto md:mx-0">
                <input
                  required
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="Correo Electrónico"
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white text-base focus:outline-none focus:border-[#A694D0] placeholder-gray-400 text-center md:text-left"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#A694D0] text-white font-semibold rounded-xl hover:bg-[#8e7bb8] transition-colors text-base shadow-sm cursor-pointer"
                >
                  Enviar
                </button>
              </form>
            </div>

          </div>

          {/* BARRA INFERIOR */}
          <div className="border-t-2 border-[#A694D0]/30 pt-8 grid grid-cols-1 md:grid-cols-3 items-center text-sm sm:text-base text-gray-600 font-medium gap-4">
            
            <div className="text-center md:text-left">
              <span>Dane Nails Domicilios</span>
            </div>

            <div className="text-center">
              <span>Copyright © 2026. Todos los derechos reservados.</span>
            </div>

            <div className="text-center md:text-right">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hover:text-[#A694D0] transition-colors hover:underline inline-block bg-transparent border-none cursor-pointer text-gray-600 font-medium text-sm sm:text-base"
              >
                Términos & Condiciones
              </button>
            </div>

          </div>

        </div>
      </footer>

      {/* RENDERIZAR EL MODAL FLOTANTE */}
      <TerminosModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;
import React, { useState } from 'react';

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
        .font-amatic { font-family: 'Amatic SC', cursive; }
      `}</style>

      <header className="absolute top-0 left-0 w-full bg-transparent z-50 py-2">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          
          {/* NAVEGACIÓN IZQUIERDA (PC) */}
          <nav className="hidden md:flex items-center gap-8 font-amatic text-3xl font-bold text-[#A694D0] flex-1 justify-end pr-10">
            <a href="#" className="hover:opacity-75 transition-opacity">Inicio</a>
            <a href="#servicios" className="hover:opacity-75 transition-opacity">Servicios</a>
            <a href="#cobertura" className="hover:opacity-75 transition-opacity">Zonas de Cobertura</a>
          </nav>

          {/* ESPACIADOR INVISIBLE PARA EQUILIBRAR MÓVIL (Solo se muestra en celular) */}
          <div className="md:hidden w-8"></div>

          {/* LOGO CENTRADO (Tanto en celular como en PC) */}
          <a href="#" className="flex flex-col items-center justify-center z-10 px-4 mx-auto md:mx-0">
            <img 
              src="/logo-dane-1.png" 
              alt="Dane Nails Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-amatic text-2xl font-bold text-[#A694D0] leading-none mt-1">
              Dane Nails
            </span>
          </a>

          {/* NAVEGACIÓN DERECHA (PC) */}
          <nav className="hidden md:flex items-center gap-8 font-amatic text-3xl font-bold text-[#A694D0] flex-1 justify-start pl-10">
            <a href="#conocenos" className="hover:opacity-75 transition-opacity">Conócenos</a>
            <a href="#contacto" className="hover:opacity-75 transition-opacity">Contáctanos</a>
          </nav>

          {/* BOTÓN MÓVIL (A la derecha) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="text-[#A694D0] text-2xl focus:outline-none cursor-pointer"
              aria-label="Abrir menú"
            >
              {menuAbierto ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        {menuAbierto && (
          <div className="md:hidden bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-3 text-center font-amatic text-3xl font-bold text-[#A694D0] shadow-lg">
            <a href="#" onClick={() => setMenuAbierto(false)}>Inicio</a>
            <a href="#servicios" onClick={() => setMenuAbierto(false)}>Servicios</a>
            <a href="#cobertura" onClick={() => setMenuAbierto(false)}>Zonas de Cobertura</a>
            <a href="#conocenos" onClick={() => setMenuAbierto(false)}>Conócenos</a>
            <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contáctanos</a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
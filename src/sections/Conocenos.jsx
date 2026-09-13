import React from 'react';

const Conocenos = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
        .font-amatic { font-family: 'Amatic SC', cursive; }
      `}</style>

      <section id="conocenos" className="w-full bg-[#FAF8FC] py-12 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        {/* flex-col-reverse en móvil pone el texto arriba y las fotos abajo */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          
          {/* --- COLUMNA IMÁGENES (Abajo en cel, Izquierda en PC) --- */}
          <div className="w-full md:w-1/2">
            
            {/* VISTA MÓVIL (Grid limpio de 2x2) */}
            <div className="grid grid-cols-2 gap-3 md:hidden w-full max-w-md mx-auto">
              <div className="h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img 
                  src="/gallery-1.jpeg" 
                  alt="Herramientas de manicure" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img 
                  src="/gallery-2.jpeg" 
                  alt="Atención personalizada" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img 
                  src="/gallery-3.jpeg" 
                  alt="Detalle de servicio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img 
                  src="/gallery-4.jpeg" 
                  alt="Cuidado de uñas" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* VISTA DESKTOP (Collage original intacto) */}
            <div className="hidden md:flex relative h-[500px] w-full items-center justify-center">
              {/* Imagen 1: Arriba izquierda */}
              <div className="absolute top-0 left-2 w-2/5 h-2/5 z-10 shadow-lg rounded-xl overflow-hidden border-2 border-white">
                <img 
                  src="/gallery-1.jpeg" 
                  alt="Herramientas de manicure" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Imagen 2: Arriba derecha */}
              <div className="absolute top-4 right-2 w-3/5 h-3/5 z-20 shadow-xl rounded-xl overflow-hidden border-4 border-white">
                <img 
                  src="/gallery-2.jpeg" 
                  alt="Atención personalizada" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Imagen 3: Abajo izquierda */}
              <div className="absolute bottom-2 left-4 w-1/2 h-2/5 z-30 shadow-2xl rounded-xl overflow-hidden border-4 border-white">
                <img 
                  src="/gallery-3.jpeg" 
                  alt="Detalle de servicio" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Imagen 4: Abajo derecha */}
              <div className="absolute bottom-6 right-6 w-2/5 h-1/3 z-20 shadow-md rounded-xl overflow-hidden border-2 border-white bg-white">
                <img 
                  src="/gallery-4.jpeg" 
                  alt="Cuidado de uñas" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>

          {/* --- COLUMNA TEXTO (Arriba en cel, Derecha en PC) --- */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:space-y-4">
            
            <div className="inline-block border-b-2 border-[#A694D0] pb-1">
              <span className="font-amatic text-2xl md:text-3xl font-bold text-[#A694D0] tracking-wide">
                Conoce Más
              </span>
            </div>

            <h2 className="font-amatic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#A694D0] font-bold leading-tight tracking-wide">
              ¿Cómo lo Hacemos?
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Brindamos una experiencia única a domicilio que garantiza la satisfacción de nuestras clientas, llevando la comodidad del salón directo a tu hogar. Priorizamos la bioseguridad con altos estándares de calidad y productos cuidadosamente seleccionados.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Nos apasiona el arte de embellecer tus manos con dedicación y profesionalismo, cuidando cada detalle para ofrecerte un servicio impecable y hacerte sentir cómoda en tu propio espacio.
            </p>

          </div>

        </div>
      </section>
    </>
  );
};

export default Conocenos;
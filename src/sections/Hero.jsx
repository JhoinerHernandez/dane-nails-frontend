import React from 'react';

const Hero = ({ onOpenAgendador }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
        .font-amatic { font-family: 'Amatic SC', cursive; }
      `}</style>

      {/* El degradado arranca morado arriba y se vuelve blanco rápidamente */}
      <section className="w-full bg-gradient-to-b from-[#A694D0]/30 via-white/80 to-white pt-28 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LADO IZQUIERDO: TEXTO Y BOTONES */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="font-amatic text-6xl sm:text-7xl lg:text-8xl text-[#A694D0] font-bold leading-none tracking-wide">
              UÑAS PERFECTAS, SIN SALIR DE TU CASA
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
              Llevamos el salón hasta tu puerta: acrílico, soft gel y semipermanente con bioseguridad garantizada, en el horario que mejor te acomode. Tu manicura perfecta te espera.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <button
                onClick={onOpenAgendador}
                className="px-8 py-3.5 bg-[#A694D0] text-white font-semibold rounded-lg hover:bg-[#8e7bb8] transition-all shadow-md cursor-pointer"
              >
                Reserva Aquí!
              </button>

              <a
                href="#servicios"
                className="px-8 py-3.5 border border-[#A694D0] text-[#A694D0] font-semibold rounded-lg hover:bg-purple-50 transition-all"
              >
                Nuestros Servicios
              </a>
            </div>
          </div>

          {/* LADO DERECHO: IMAGEN */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/dane-nails-hero.jpeg"
              alt="Uñas perfectas a domicilio"
              className="rounded-3xl shadow-xl w-full max-w-lg h-[380px] sm:h-[450px] object-cover object-center"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
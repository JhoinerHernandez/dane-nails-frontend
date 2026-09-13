import React, { useState } from 'react';

const CoberturaDestacada = ({ onOpenAgendador }) => {
  const [busqueda, setBusqueda] = useState('');
  const [barrioSeleccionado, setBarrioSeleccionado] = useState(null);

  const listaBarrios = [
    // Barranquilla
    { id: 1, nombre: 'Carrizal', ciudad: 'Barranquilla', tarifa: 17000 },
    { id: 2, nombre: 'Ciudad Mallorquín', ciudad: 'Barranquilla', tarifa: 25000 },
    { id: 3, nombre: 'California', ciudad: 'Barranquilla', tarifa: 17000 },
    { id: 4, nombre: 'Villa del Carmen', ciudad: 'Barranquilla', tarifa: 17000 },
    { id: 5, nombre: 'Olaya', ciudad: 'Barranquilla', tarifa: 20000 },
    { id: 6, nombre: 'Villa Campestre', ciudad: 'Barranquilla', tarifa: 26000 },
    { id: 7, nombre: 'Puerta de Oro', ciudad: 'Barranquilla', tarifa: 15000 },
    { id: 8, nombre: 'La Magdalena', ciudad: 'Barranquilla', tarifa: 15000 },
    { id: 9, nombre: 'La Victoria', ciudad: 'Barranquilla', tarifa: 17000 },
    { id: 10, nombre: 'Villa Carolina', ciudad: 'Barranquilla', tarifa: 25000 },
    { id: 11, nombre: 'El Rubí', ciudad: 'Barranquilla', tarifa: 25000 },
    { id: 12, nombre: 'Las Estrellas', ciudad: 'Barranquilla', tarifa: 20000 },
    { id: 13, nombre: 'Paraíso', ciudad: 'Barranquilla', tarifa: 25000 },
    { id: 14, nombre: 'El Recreo', ciudad: 'Barranquilla', tarifa: 25000 },
    { id: 15, nombre: 'Caribe Verde', ciudad: 'Barranquilla', tarifa: 20000 },
    { id: 16, nombre: 'Alameda del Río', ciudad: 'Barranquilla', tarifa: 20000 },
    { id: 17, nombre: 'Los Olivos', ciudad: 'Barranquilla', tarifa: 20000 },
    { id: 18, nombre: 'Miramar', ciudad: 'Barranquilla', tarifa: 25000 },
    { id: 19, nombre: 'Altos del Limón', ciudad: 'Barranquilla', tarifa: 25000 },
    { id: 20, nombre: 'Paraíso Riomar', ciudad: 'Barranquilla', tarifa: 25000 },
    { id: 21, nombre: 'Santuario', ciudad: 'Barranquilla', tarifa: 17000 },
    { id: 22, nombre: 'El Valle', ciudad: 'Barranquilla', tarifa: 22000 },
    { id: 23, nombre: 'Villa Santos', ciudad: 'Barranquilla', tarifa: 20000 },
    { id: 24, nombre: '7 de Abril', ciudad: 'Barranquilla', tarifa: 15000 },
    { id: 25, nombre: 'Los Alpes', ciudad: 'Barranquilla', tarifa: 20000 },
    // Soledad
    { id: 26, nombre: 'Los Almendros', ciudad: 'Soledad', tarifa: 15000 },
    { id: 27, nombre: 'Salamanca', ciudad: 'Soledad', tarifa: 15000 },
    { id: 28, nombre: 'Villa Estadio', ciudad: 'Soledad', tarifa: 15000 },
    { id: 29, nombre: 'Ciudad Cortissoz', ciudad: 'Soledad', tarifa: 16000 },
    { id: 30, nombre: 'Ciudadela', ciudad: 'Soledad', tarifa: 15000 },
    { id: 31, nombre: 'Las Trinitarias', ciudad: 'Soledad', tarifa: 17000 },
    { id: 32, nombre: 'Almendros', ciudad: 'Soledad', tarifa: 15000 },
    { id: 33, nombre: 'Nuevo Milenio', ciudad: 'Soledad', tarifa: 15000 },
    { id: 34, nombre: 'Urbanización El Parque', ciudad: 'Soledad', tarifa: 15000 },
    { id: 35, nombre: 'Ciudadela Metropolitana', ciudad: 'Soledad', tarifa: 15000 },
    { id: 36, nombre: 'Los Robles', ciudad: 'Soledad', tarifa: 20000 }
  ];

  const barriosFiltrados = busqueda.trim() === '' 
    ? [] 
    : listaBarrios.filter(b => 
        b.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
        b.ciudad.toLowerCase().includes(busqueda.toLowerCase())
      );

  const posts = [
    { id: 1, image: '/dane-1.jpeg', link: 'https://www.instagram.com/danenails.barranquilla_/' },
    { id: 2, image: '/dane-2.jpeg', link: 'https://www.instagram.com/danenails.barranquilla_/' },
    { id: 3, image: '/dane-3.jpeg', link: 'https://www.instagram.com/danenails.barranquilla_/' },
    { id: 4, image: '/dane-4.jpeg', link: 'https://www.instagram.com/danenails.barranquilla_/' },
    { id: 5, image: '/dane-5.jpeg', link: 'https://www.instagram.com/danenails.barranquilla_/' },
    { id: 6, image: '/dane-6.jpeg', link: 'https://www.instagram.com/danenails.barranquilla_/' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
        .font-amatic { font-family: 'Amatic SC', cursive; }
      `}</style>

      {/* SECCIÓN CALCULADORA DE COBERTURA */}
      <section id="cobertura" className="w-full bg-[#FAF8FC] pt-16 pb-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#A694D0]/25 via-[#f2eefb] to-[#A694D0]/15 rounded-3xl p-8 md:p-12 shadow-sm border border-[#A694D0]/30 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
            <div className="inline-block border-b-2 border-[#A694D0] pb-1">
              <span className="font-amatic text-3xl font-bold text-[#A694D0]">
                Zonas de Cobertura
              </span>
            </div>
            
            <h2 className="font-amatic text-6xl md:text-7xl lg:text-8xl text-[#A694D0] font-bold leading-none">
              Calcula Tu Domicilio
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Ingresa tu barrio en Barranquilla o Soledad para verificar la cobertura y conocer la tarifa exacta del servicio a domicilio.
            </p>
            
            <div className="relative max-w-md mx-auto lg:mx-0">
              <input
                type="text"
                value={busqueda}
                onChange={(e) => {
                  setBusqueda(e.target.value);
                  setBarrioSeleccionado(null);
                }}
                placeholder="Escribe tu barrio (ej. Los Robles, Miramar, Alameda)..."
                className="w-full px-5 py-3.5 rounded-2xl border border-purple-200 bg-white text-gray-700 focus:outline-none focus:border-[#A694D0] shadow-sm text-sm"
              />

              {/* LISTA DE COINCIDENCIAS */}
              {busqueda.trim() !== '' && barriosFiltrados.length > 0 && !barrioSeleccionado && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-purple-100 max-h-48 overflow-y-auto z-20 text-left">
                  {barriosFiltrados.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setBarrioSeleccionado(item);
                        setBusqueda(`${item.nombre} (${item.ciudad})`);
                      }}
                      className="w-full px-4 py-3 hover:bg-purple-50 text-gray-700 text-sm flex justify-between items-center transition-colors border-b border-gray-50 last:border-0 cursor-pointer"
                    >
                      <span className="font-medium">{item.nombre}</span>
                      <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full font-semibold">
                        {item.ciudad}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* MENSAJE CUANDO NO APARECE EL BARRIO CON LOGO OFICIAL DE WHATSAPP */}
              {busqueda.trim() !== '' && barriosFiltrados.length === 0 && !barrioSeleccionado && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-lg border border-purple-100 p-4 z-20 text-center space-y-3">
                  <p className="text-xs text-gray-600">
                    ¿No aparece tu barrio <strong className="text-[#A694D0]">"{busqueda}"</strong>? Escríbenos para confirmarte cobertura y tarifa.
                  </p>
                  <a
                    href={`https://wa.me/573117528529?text=${encodeURIComponent(`Hola Dane Nails! Mi barrio es "${busqueda}" y quiero saber si hay cobertura y tarifa de domicilio.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#A694D0] text-white text-xs font-semibold rounded-xl hover:bg-[#8e7bb8] transition-colors shadow-sm"
                  >
                    {/* SVG Oficial de WhatsApp */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>
              )}
            </div>

            {barrioSeleccionado && (
              <div className="space-y-4 pt-2">
                <div className="bg-white rounded-2xl p-5 border border-purple-200 shadow-sm max-w-md mx-auto lg:mx-0 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      ¡Cobertura Confirmada!
                    </span>
                    <h4 className="font-bold text-gray-800 text-lg mt-1">{barrioSeleccionado.nombre}</h4>
                    <p className="text-xs text-gray-500">{barrioSeleccionado.ciudad}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block">Tarifa domicilio</span>
                    <span className="text-xl font-bold text-[#A694D0]">
                      ${barrioSeleccionado.tarifa.toLocaleString('es-CO')}
                    </span>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => onOpenAgendador(barrioSeleccionado)}
                    className="inline-block px-8 py-3.5 bg-[#A694D0] text-white font-semibold rounded-xl hover:bg-[#8e7bb8] transition-all shadow-md cursor-pointer"
                  >
                    Agendar Cita en {barrioSeleccionado.nombre}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
              alt="Atención de manicure a domicilio"
              className="rounded-3xl shadow-lg w-full h-[320px] md:h-[400px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* BLOQUE INSTAGRAM FEED */}
      <section className="w-full bg-[#FAF8FC] pt-6 pb-16">
        <div className="text-center space-y-2 mb-6 px-6">
          <h3 className="font-amatic text-5xl md:text-6xl font-bold text-[#A694D0]">
            Síguenos En Instagram
          </h3>
          <div>
            <a
              href="https://www.instagram.com/danenails.barranquilla_/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-amatic text-3xl md:text-4xl text-gray-600 hover:text-[#A694D0] transition-colors border-b-2 border-[#A694D0]/40 pb-0.5 inline-block"
            >
              @danenails.barranquilla_
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden aspect-square block bg-gray-100 shadow-sm rounded-none"
              >
                <img
                  src={post.image}
                  alt={`Dane Nails IG ${post.id}`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white fill-current transform scale-90 group-hover:scale-100 transition-transform duration-300 drop-shadow-md" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoberturaDestacada;
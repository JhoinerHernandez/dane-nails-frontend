import React, { useState } from 'react';

const serviciosCards = [
  {
    id: 'manicure',
    title: 'Dane Manicure',
    subtitle: 'Cuidado & Nivelación',
    description: 'Esmaltado semipermanente, baños de refuerzo y nivelación para uñas naturales.',
    image: '/gallery-7.jpeg',
    servicios: [
      { id: 1, nombre: 'Semipermanente', precio: '$45.000', desc: 'Esmaltado de larga duración sobre la uña natural. Se recomienda para uñas cortas (máximo 1-2 mm de borde libre), ya que en uñas más largas puede quebrarse con mayor facilidad.' },
      { id: 2, nombre: 'Baño en Acrílico', precio: '$60.000', desc: 'Ideal para uñas débiles o quebradizas. Aporta firmeza y protección para que tus uñas naturales crezcan más resistentes.' },
      { id: 3, nombre: 'Baño en Polygel', precio: '$65.000', desc: 'Refuerza tus uñas naturales, ayuda a prevenir quiebres y les da mayor resistencia, manteniendo un acabado ligero y natural.' },
      { id: 4, nombre: 'Nivelación', precio: '$70.000', desc: 'Capa de refuerzo sobre la uña natural que corrige pequeñas imperfecciones y aporta mayor resistencia sin alargar la uña.' }
    ]
  },
  {
    id: 'sistemas',
    title: 'Sistema y Extensión',
    subtitle: 'Uñas Esculpidas',
    description: 'Soft Gel, Acrílico y Polygel para máxima longitud, diseño y resistencia.',
    image: '/gallery-8.jpeg',
    servicios: [
      { id: 5, nombre: 'Soft Gel', precio: '$70.000', desc: 'Extensiones preformadas que ofrecen un acabado uniforme y una aplicación más rápida.' },
      { id: 6, nombre: 'Acrílico', precio: '$80.000', desc: 'Sistema de alta resistencia, ideal para quienes utilizan mucho las manos en su rutina diaria y buscan mayor durabilidad.' },
      { id: 7, nombre: 'Polygel', precio: '$85.000', desc: 'Sistema con acabado natural y ligero, ideal para quienes buscan comodidad sin perder una apariencia elegante.' }
    ]
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento y Retiros',
    subtitle: 'Cuidado Posterior',
    description: 'Retiro seguro de sistemas antiguos protegiendo tu uña natural.',
    image: '/gallery-9.jpeg',
    servicios: [
      { id: 8, nombre: 'Retiro', precio: '$15.000', desc: 'Retiro de sistemas antiguos de manera segura protegiendo tu uña natural.' }
    ]
  }
];

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

const VALOR_ANTICIPO = "$20.000";
const NUMERO_CELULAR = "3117528529";

const ServiciosDestacados = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);
  const [itemElegido, setItemElegido] = useState(null);
  
  const [pasoInterno, setPasoInterno] = useState(1);
  const [metodoPago, setMetodoPago] = useState('bancolombia');
  const [copiado, setCopiado] = useState(false);

  const [busquedaBarrio, setBusquedaBarrio] = useState('');
  const [barrioSeleccionado, setBarrioSeleccionado] = useState(null);

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    fecha: '',
    hora: '',
    ampm: 'AM'
  });

  const abrirModal = (categoria) => {
    setTarjetaSeleccionada(categoria);
    setItemElegido(null);
    setPasoInterno(1);
    setBusquedaBarrio('');
    setBarrioSeleccionado(null);
  };

  const cerrarModal = () => {
    setTarjetaSeleccionada(null);
    setItemElegido(null);
    setPasoInterno(1);
    setBusquedaBarrio('');
    setBarrioSeleccionado(null);
  };

  const handleCopiarNumero = () => {
    navigator.clipboard.writeText(NUMERO_CELULAR);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const handleTelefonoChange = (e) => {
    const valor = e.target.value.replace(/\D/g, '');
    if (valor.length <= 10) {
      setFormData({ ...formData, telefono: valor });
    }
  };

  const barriosFiltrados = busquedaBarrio.trim() === '' 
    ? [] 
    : listaBarrios.filter(b => 
        b.nombre.toLowerCase().includes(busquedaBarrio.toLowerCase()) || 
        b.ciudad.toLowerCase().includes(busquedaBarrio.toLowerCase())
      );

  const isFormValid = 
    formData.nombre.trim() !== '' &&
    formData.telefono.length === 10 &&
    formData.direccion.trim() !== '' &&
    formData.fecha !== '' &&
    formData.hora !== '' &&
    barrioSeleccionado !== null;

  const handleAgendarWhatsApp = (e) => {
    e.preventDefault();
    if (!itemElegido || !barrioSeleccionado) return;

    const horaCompleta = `${formData.hora} ${formData.ampm}`;
    const textoBarrio = `${barrioSeleccionado.nombre} (${barrioSeleccionado.ciudad}) - Domicilio: $${barrioSeleccionado.tarifa.toLocaleString('es-CO')}`;

    const mensaje = `*NUEVA RESERVA - DANE NAILS*\n\n` +
      `*Cliente:* ${formData.nombre}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Servicio:* ${itemElegido.nombre} (${itemElegido.precio})\n` +
      `*Barrio:* ${textoBarrio}\n` +
      `*Dirección:* ${formData.direccion}\n` +
      `*Fecha:* ${formData.fecha}\n` +
      `*Hora:* ${horaCompleta}\n\n` +
      `*Anticipo (${VALOR_ANTICIPO}):* Adjunto comprobante en este chat\n\n` +
      `_Hola Dane Nails! Acabo de completar mi reserva desde el catálogo web._`;

    window.open(`https://wa.me/573117528529?text=${encodeURIComponent(mensaje)}`, '_blank');
    cerrarModal();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
        .font-amatic { font-family: 'Amatic SC', cursive; }
      `}</style>

      <section id="servicios" className="w-full bg-[#F3EEF9] py-12 md:py-20 pb-24 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          
          <h2 className="font-amatic text-5xl sm:text-6xl md:text-7xl text-[#A694D0] font-bold text-center">
            Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {serviciosCards.map((serv) => (
              <div
                key={serv.id}
                onClick={() => abrirModal(serv)}
                onMouseEnter={() => setActiveCard(serv.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="relative h-[380px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md cursor-pointer group transition-all duration-300 transform hover:-translate-y-2 border border-purple-200"
              >
                <img
                  src={serv.image}
                  alt={serv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div
                  className={`absolute bottom-5 left-5 right-5 p-5 sm:p-6 rounded-xl transition-all duration-300 ${
                    activeCard === serv.id
                      ? 'bg-[#A694D0] text-white shadow-lg'
                      : 'bg-white/95 backdrop-blur-sm text-gray-700 shadow'
                  }`}
                >
                  <h3
                    className={`font-amatic text-3xl sm:text-4xl font-bold leading-none mb-2 ${
                      activeCard === serv.id ? 'text-white' : 'text-[#A694D0]'
                    }`}
                  >
                    {serv.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-90 mb-3">
                    {serv.description}
                  </p>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1 ${
                      activeCard === serv.id ? 'text-white' : 'text-[#A694D0]'
                    }`}
                  >
                    Ver Menú Específico &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL INTEGRADO */}
      {tarjetaSeleccionada && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden relative shadow-2xl border border-purple-100 max-h-[90vh] flex flex-col">
            
            <button
              type="button"
              onClick={cerrarModal}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-600 hover:text-[#A694D0] w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="relative h-36 w-full shrink-0">
              <img 
                src={tarjetaSeleccionada.image} 
                alt={tarjetaSeleccionada.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs text-purple-200 font-semibold uppercase tracking-wider">
                  Catálogo de Servicios
                </span>
                <h3 className="font-amatic text-4xl font-bold text-white leading-none">
                  {tarjetaSeleccionada.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              
              {/* PASO 1: SELECCIÓN DE SERVICIO */}
              {pasoInterno === 1 && (
                <>
                  <p className="text-xs text-gray-500 text-center italic border-b border-purple-50 pb-3">
                    Haz clic en el servicio que deseas para seleccionarlo:
                  </p>

                  <div className="space-y-3">
                    {tarjetaSeleccionada.servicios.map((s) => {
                      const estaSeleccionado = itemElegido?.id === s.id;
                      return (
                        <div 
                          key={s.id} 
                          onClick={() => setItemElegido(s)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                            estaSeleccionado
                              ? 'bg-purple-100/70 border-[#A694D0] shadow-md ring-2 ring-[#A694D0]/30'
                              : 'bg-[#FAF8FC] border-purple-100 hover:border-[#A694D0] hover:bg-purple-50/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                estaSeleccionado ? 'border-[#A694D0] bg-[#A694D0]' : 'border-gray-300'
                              }`}>
                                {estaSeleccionado && <span className="text-white text-xs font-bold">✓</span>}
                              </div>
                              <h4 className="font-amatic text-3xl font-bold text-[#A694D0] leading-none">
                                {s.nombre}
                              </h4>
                            </div>
                            <span className="font-semibold text-[#D4AF37] text-base">
                              {s.precio}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed pl-7">
                            {s.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {/* PASO 2: FORMULARIO DE DATOS */}
              {pasoInterno === 2 && (
                <div className="space-y-4">
                  <div className="bg-[#FAF8FC] p-3 rounded-2xl border border-purple-100 text-center">
                    <span className="text-xs text-gray-400 uppercase tracking-wider block">Servicio Seleccionado</span>
                    <span className="font-amatic text-3xl font-bold text-[#A694D0]">
                      {itemElegido?.nombre} — {itemElegido?.precio}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Nombre Completo *</label>
                      <input
                        required
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-purple-100 text-xs focus:outline-none focus:border-[#A694D0]"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block text-xs font-semibold text-gray-600">Teléfono / WhatsApp *</label>
                        <span className="text-[10px] text-gray-400">{formData.telefono.length}/10 dígitos</span>
                      </div>
                      <input
                        required
                        type="tel"
                        maxLength={10}
                        placeholder="3000000000"
                        value={formData.telefono}
                        onChange={handleTelefonoChange}
                        className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none ${
                          formData.telefono && formData.telefono.length < 10 
                            ? 'border-amber-300 focus:border-amber-500' 
                            : 'border-purple-100 focus:border-[#A694D0]'
                        }`}
                      />
                      {formData.telefono && formData.telefono.length < 10 && (
                        <span className="text-[10px] text-amber-600 block mt-0.5">
                          Debe contener exactamente 10 dígitos.
                        </span>
                      )}
                    </div>

                    {/* BÚSQUEDA DE BARRIO */}
                    <div className="sm:col-span-2 relative">
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Barrio en Barranquilla / Soledad *
                      </label>
                      <input
                        type="text"
                        value={busquedaBarrio}
                        onChange={(e) => {
                          setBusquedaBarrio(e.target.value);
                          setBarrioSeleccionado(null);
                        }}
                        placeholder="Escribe tu barrio (ej. Los Robles, Miramar)..."
                        className="w-full px-3 py-2 rounded-xl border border-purple-100 text-xs focus:outline-none focus:border-[#A694D0]"
                      />

                      {busquedaBarrio.trim() !== '' && barriosFiltrados.length > 0 && !barrioSeleccionado && (
                        <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-purple-100 max-h-40 overflow-y-auto z-30">
                          {barriosFiltrados.map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => {
                                setBarrioSeleccionado(item);
                                setBusquedaBarrio(`${item.nombre} (${item.ciudad})`);
                              }}
                              className="w-full px-3 py-2 hover:bg-purple-50 text-gray-700 text-xs flex justify-between items-center border-b border-gray-50 last:border-0 cursor-pointer text-left"
                            >
                              <span className="font-medium">{item.nombre}</span>
                              <span className="text-[10px] text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full font-semibold">
                                {item.ciudad} — ${item.tarifa.toLocaleString('es-CO')}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {busquedaBarrio.trim() !== '' && barriosFiltrados.length === 0 && !barrioSeleccionado && (
                        <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-purple-100 p-3 z-30 text-center space-y-2">
                          <p className="text-[11px] text-gray-600">
                            ¿No aparece tu barrio <strong className="text-[#A694D0]">"{busquedaBarrio}"</strong>? Escríbenos para confirmarte cobertura.
                          </p>
                          <a
                            href={`https://wa.me/573117528529?text=${encodeURIComponent(`Hola Dane Nails! Mi barrio es "${busquedaBarrio}" y quiero saber si hay cobertura y tarifa de domicilio.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 bg-[#A694D0] text-white text-xs font-semibold rounded-lg hover:bg-[#8e7bb8] transition-colors"
                          >
                            <span>Consultar por WhatsApp</span>
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Dirección Completa *</label>
                      <input
                        required
                        type="text"
                        placeholder="Calle, Carrera, Casa / Apt"
                        value={formData.direccion}
                        onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-purple-100 text-xs focus:outline-none focus:border-[#A694D0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Fecha Deseada *</label>
                      <input
                        required
                        type="date"
                        value={formData.fecha}
                        onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                        onClick={(e) => {
                          try { e.target.showPicker(); } catch (err) {}
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-purple-100 text-xs focus:outline-none focus:border-[#A694D0] cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Turno Disponible *</label>
                      <select
                        required
                        value={`${formData.hora} ${formData.ampm}`.trim()}
                        onChange={(e) => {
                          const valor = e.target.value;
                          if (valor) {
                            const [horaPart, ampmPart] = valor.split(' ');
                            setFormData({ ...formData, hora: horaPart, ampm: ampmPart });
                          } else {
                            setFormData({ ...formData, hora: '', ampm: 'AM' });
                          }
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-purple-100 text-xs font-semibold bg-white cursor-pointer focus:outline-none focus:border-[#A694D0]"
                      >
                        <option value="">Selecciona un turno fijo...</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* PASO 3: ANTICIPO Y QR */}
              {pasoInterno === 3 && (
                <form onSubmit={handleAgendarWhatsApp} className="space-y-4 text-center">
                  <div className="bg-white border-2 border-[#A694D0]/30 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between items-center border-b border-purple-50 pb-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Abono requerido</span>
                      <span className="text-xl font-bold text-[#A694D0]">{VALOR_ANTICIPO}</span>
                    </div>

                    <div className="flex justify-center gap-2 border-b border-purple-100 pb-2">
                      <button
                        type="button"
                        onClick={() => setMetodoPago('bancolombia')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                          metodoPago === 'bancolombia' ? 'bg-[#A694D0] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Bancolombia / Bre-B
                      </button>
                      <button
                        type="button"
                        onClick={() => setMetodoPago('nequi')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                          metodoPago === 'nequi' ? 'bg-[#A694D0] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Nequi
                      </button>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="w-44 h-44 bg-gray-50 border border-purple-100 rounded-2xl overflow-hidden p-2 flex items-center justify-center shadow-inner">
                        <img 
                          src={metodoPago === 'bancolombia' ? '/qr-bancolombia.jpeg' : '/qr-nequi.jpeg'} 
                          alt={`QR ${metodoPago}`}
                          className="max-w-full max-h-full object-contain rounded-xl block"
                        />
                      </div>

                      <div className="flex items-center justify-center gap-2 bg-[#FAF8FC] py-1.5 px-3 rounded-xl border border-purple-100">
                        <span className="font-mono text-sm font-bold text-gray-800">311 752 8529</span>
                        <button
                          type="button"
                          onClick={handleCopiarNumero}
                          className="text-[11px] bg-[#A694D0] hover:bg-[#8e7bb8] text-white px-2 py-0.5 rounded-md font-medium cursor-pointer transition-colors"
                        >
                          {copiado ? '✓ Copiado' : 'Copiar'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-left text-xs text-amber-900 space-y-1">
                    <p className="font-bold">📌 Recuerda adjuntar el comprobante</p>
                    <p className="text-[11px]">Al hacer clic abajo, se abrirá WhatsApp con los detalles de tu cita. Adjunta la captura de pantalla del pago para confirmar.</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20bd5a] transition-colors shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirmar Cita por WhatsApp</span>
                  </button>
                </form>
              )}

            </div>

            {/* FOOTER DEL MODAL */}
            {pasoInterno !== 3 && (
              <div className="p-4 border-t border-purple-100 bg-[#FAF8FC] flex gap-3 items-center">
                <button
                  type="button"
                  onClick={() => {
                    if (pasoInterno === 2) setPasoInterno(1);
                    else cerrarModal();
                  }}
                  className="w-1/3 py-2.5 border border-gray-300 text-gray-600 font-semibold rounded-full hover:bg-gray-100 text-xs sm:text-sm cursor-pointer"
                >
                  {pasoInterno === 2 ? '← Volver' : 'Cerrar'}
                </button>

                {pasoInterno === 1 && (
                  <button
                    type="button"
                    disabled={!itemElegido}
                    onClick={() => setPasoInterno(2)}
                    className={`w-2/3 py-2.5 font-semibold rounded-full shadow-md text-xs sm:text-sm transition-all text-center ${
                      itemElegido
                        ? 'bg-[#A694D0] hover:bg-[#8e7bb8] text-white cursor-pointer'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {itemElegido ? `Continuar con los Datos (${itemElegido.precio}) →` : 'Selecciona un Servicio'}
                  </button>
                )}

                {pasoInterno === 2 && (
                  <button
                    type="button"
                    disabled={!isFormValid}
                    onClick={() => setPasoInterno(3)}
                    className={`w-2/3 py-2.5 font-semibold rounded-full shadow-md text-xs sm:text-sm transition-all text-center ${
                      isFormValid
                        ? 'bg-[#A694D0] hover:bg-[#8e7bb8] text-white cursor-pointer'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Ir al Pago de Anticipo →
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};

export default ServiciosDestacados;
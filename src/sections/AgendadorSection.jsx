import React, { useState, useEffect } from 'react';

const categoriasServicios = [
  {
    id: 'manicure',
    titulo: 'Dane Manicure',
    subtitulo: 'Cuidado & Nivelación',
    servicios: [
      { id: 1, nombre: 'Semipermanente', precio: '$45.000', desc: 'Esmaltado de larga duración sobre la uña natural. Se recomienda para uñas cortas (máximo 1-2 mm de borde libre), ya que en uñas más largas puede quebrarse con mayor facilidad.' },
      { id: 2, nombre: 'Baño en Acrílico', precio: '$60.000', desc: 'Ideal para uñas débiles o quebradizas. Aporta firmeza y protección para que tus uñas naturales crezcan más resistentes.' },
      { id: 3, nombre: 'Baño en Polygel', precio: '$65.000', desc: 'Refuerza tus uñas naturales, ayuda a prevenir quiebres y les da mayor resistencia, manteniendo un acabado ligero y natural.' },
      { id: 4, nombre: 'Nivelación', precio: '$70.000', desc: 'Capa de refuerzo sobre la uña natural que corrige pequeñas imperfecciones y aporta mayor resistencia sin alargar la uña.' }
    ]
  },
  {
    id: 'sistemas',
    titulo: 'Sistema y Extensión',
    subtitulo: 'Uñas Esculpidas',
    servicios: [
      { id: 5, nombre: 'Soft Gel', precio: '$70.000', desc: 'Extensiones preformadas que ofrecen un acabado uniforme y una aplicación más rápida.' },
      { id: 6, nombre: 'Acrílico', precio: '$80.000', desc: 'Sistema de alta resistencia, ideal para quienes utilizan mucho las manos en su rutina diaria y buscan mayor durabilidad.' },
      { id: 7, nombre: 'Polygel', precio: '$85.000', desc: 'Sistema con acabado natural y ligero, ideal para quienes buscan comodidad sin perder una apariencia elegante.' }
    ]
  },
  {
    id: 'mantenimiento',
    titulo: 'Mantenimiento y Retiros',
    subtitulo: 'Cuidado Posterior',
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

const AgendadorSection = ({ isOpen, onClose, barrioInicial, servicioInicial }) => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [paso, setPaso] = useState(1);
  const [copiado, setCopiado] = useState(false);
  const [metodoPago, setMetodoPago] = useState('bancolombia');

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

  useEffect(() => {
    if (isOpen) {
      if (barrioInicial) {
        setBarrioSeleccionado(barrioInicial);
        setBusquedaBarrio(`${barrioInicial.nombre} (${barrioInicial.ciudad})`);
      } else {
        setBarrioSeleccionado(null);
        setBusquedaBarrio('');
      }

      if (servicioInicial) {
        setServicioSeleccionado(servicioInicial);
        setPaso(2);
      } else {
        setPaso(1);
        setServicioSeleccionado(null);
      }
    }
  }, [isOpen, barrioInicial, servicioInicial]);

  if (!isOpen) return null;

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
    if (!servicioSeleccionado || !barrioSeleccionado) return;

    const textoBarrio = `${barrioSeleccionado.nombre} (${barrioSeleccionado.ciudad}) - Domicilio: $${barrioSeleccionado.tarifa.toLocaleString('es-CO')}`;
    const horaCompleta = `${formData.hora} ${formData.ampm}`;

    const mensaje = `*NUEVA RESERVA - DANE NAILS*\n\n` +
      `*Cliente:* ${formData.nombre}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Servicio:* ${servicioSeleccionado.nombre} (${servicioSeleccionado.precio})\n` +
      `*Barrio:* ${textoBarrio}\n` +
      `*Dirección:* ${formData.direccion}\n` +
      `*Fecha:* ${formData.fecha}\n` +
      `*Hora:* ${horaCompleta}\n\n` +
      `*Anticipo (${VALOR_ANTICIPO}):* Adjunto comprobante en este chat\n\n` +
      `_Hola Dane Nails! Acabo de agendar mi cita desde la página web._`;

    window.open(`https://wa.me/573117528529?text=${encodeURIComponent(mensaje)}`, '_blank');
    onClose();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
        .font-amatic { font-family: 'Amatic SC', cursive; }
      `}</style>

      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden relative shadow-2xl border border-purple-100 max-h-[90vh] flex flex-col">
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-600 hover:text-[#A694D0] w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-colors cursor-pointer"
          >
            ✕
          </button>

          {/* ENCABEZADO */}
          <div className="bg-gradient-to-r from-[#A694D0] to-[#8e7bb8] p-5 text-center text-white shrink-0">
            <span className="text-xs uppercase tracking-widest font-semibold opacity-90 block">
              Reserva a Domicilio
            </span>
            <h2 className="font-amatic text-4xl md:text-5xl font-bold leading-none mt-1">
              Agenda Tu Cita En 3 Pasos
            </h2>
          </div>

          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            
            {/* PASO 1: SELECCIÓN DE SERVICIO */}
            {paso === 1 && (
              <div className="space-y-6">
                <p className="text-xs text-gray-500 text-center italic border-b border-purple-50 pb-2">
                  1. Selecciona el tratamiento que deseas agendar:
                </p>

                {categoriasServicios.map((cat) => (
                  <div key={cat.id} className="space-y-3">
                    <div className="border-b border-purple-100 pb-1 flex justify-between items-baseline">
                      <h3 className="font-amatic text-3xl font-bold text-[#A694D0]">
                        {cat.titulo}
                      </h3>
                      <span className="text-[11px] text-gray-400 font-medium">
                        {cat.subtitulo}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {cat.servicios.map((s) => {
                        const isSelected = servicioSeleccionado?.id === s.id;
                        return (
                          <div
                            key={s.id}
                            onClick={() => setServicioSeleccionado(s)}
                            className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative ${
                              isSelected
                                ? 'bg-purple-100/70 border-[#A694D0] shadow-md ring-2 ring-[#A694D0]/30'
                                : 'bg-[#FAF8FC] border-purple-100 hover:border-[#A694D0] hover:bg-purple-50/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                  isSelected ? 'border-[#A694D0] bg-[#A694D0]' : 'border-gray-300'
                                }`}>
                                  {isSelected && <span className="text-white text-[10px] font-bold">✓</span>}
                                </div>
                                <h4 className="font-amatic text-2xl font-bold text-[#A694D0] leading-none">
                                  {s.nombre}
                                </h4>
                              </div>
                              <span className="font-semibold text-[#D4AF37] text-sm">
                                {s.precio}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed pl-6">
                              {s.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PASO 2: DATOS Y BARRIO */}
            {paso === 2 && (
              <div className="space-y-4">
                <div className="bg-[#FAF8FC] p-3 rounded-2xl border border-purple-100 text-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Servicio Seleccionado</span>
                  <span className="font-amatic text-3xl font-bold text-[#A694D0]">
                    {servicioSeleccionado?.nombre} — {servicioSeleccionado?.precio}
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
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                          </svg>
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
            {paso === 3 && (
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
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </button>
              </form>
            )}

          </div>

          {/* FOOTER DEL MODAL */}
          {paso !== 3 && (
            <div className="p-4 border-t border-purple-100 bg-[#FAF8FC] flex gap-3 items-center">
              <button
                type="button"
                onClick={() => {
                  if (paso === 2) setPaso(1);
                  else onClose();
                }}
                className="w-1/3 py-2.5 border border-gray-300 text-gray-600 font-semibold rounded-full hover:bg-gray-100 text-xs sm:text-sm cursor-pointer"
              >
                {paso === 2 ? '← Volver' : 'Cerrar'}
              </button>

              {paso === 1 && (
                <button
                  type="button"
                  disabled={!servicioSeleccionado}
                  onClick={() => setPaso(2)}
                  className={`w-2/3 py-2.5 font-semibold rounded-full shadow-md text-xs sm:text-sm transition-all text-center ${
                    servicioSeleccionado
                      ? 'bg-[#A694D0] hover:bg-[#8e7bb8] text-white cursor-pointer'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {servicioSeleccionado ? `Continuar con los Datos (${servicioSeleccionado.precio}) →` : 'Selecciona un Servicio'}
                </button>
              )}

              {paso === 2 && (
                <button
                  type="button"
                  disabled={!isFormValid}
                  onClick={() => setPaso(3)}
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
    </>
  );
};

export default AgendadorSection;
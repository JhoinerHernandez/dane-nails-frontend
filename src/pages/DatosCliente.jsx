import { useReserva } from '../context/ReservaContext'

export default function DatosCliente() {
  const { datosCliente, actualizarDatosCliente, irSiguiente, irAtras } = useReserva()

  const telefonoValido = /^[0-9]{10}$/.test(datosCliente.cliente_telefono.trim())
  const formValido =
    datosCliente.cliente_nombre.trim().length > 2 &&
    telefonoValido &&
    datosCliente.direccion_exacta.trim().length > 4 &&
    datosCliente.fecha &&
    datosCliente.hora

  const campoBase =
    'w-full rounded-xl border border-dane-blush bg-white px-4 py-3 text-dane-ink ' +
    'focus:outline-none focus:ring-2 focus:ring-dane-clay placeholder:text-dane-ink/35'

  return (
    <div>
      <h2 className="font-display text-2xl text-dane-ink mb-1">Tus datos</h2>
      <p className="text-dane-ink/60 mb-6 text-sm">
        Necesitamos esta información para confirmar tu cita.
      </p>

      <div className="space-y-4">
        <label className="block">
          <span className="text-sm text-dane-ink/70 mb-1.5 block">Nombre completo</span>
          <input
            type="text"
            placeholder="María Pérez"
            value={datosCliente.cliente_nombre}
            onChange={(e) => actualizarDatosCliente('cliente_nombre', e.target.value)}
            className={campoBase}
          />
        </label>

        <label className="block">
          <span className="text-sm text-dane-ink/70 mb-1.5 block">Teléfono</span>
          <input
            type="tel"
            inputMode="numeric"
            placeholder="3001234567"
            value={datosCliente.cliente_telefono}
            onChange={(e) =>
              actualizarDatosCliente('cliente_telefono', e.target.value.replace(/\D/g, ''))
            }
            className={campoBase}
          />
          {datosCliente.cliente_telefono && !telefonoValido && (
            <span className="text-xs text-red-600 mt-1 block">
              Ingresa un número de 10 dígitos.
            </span>
          )}
        </label>

        <label className="block">
          <span className="text-sm text-dane-ink/70 mb-1.5 block">Dirección exacta</span>
          <input
            type="text"
            placeholder="Calle 45 #12-34, apto 3B"
            value={datosCliente.direccion_exacta}
            onChange={(e) => actualizarDatosCliente('direccion_exacta', e.target.value)}
            className={campoBase}
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-dane-ink/70 mb-1.5 block">Fecha</span>
            <input
              type="date"
              value={datosCliente.fecha}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => actualizarDatosCliente('fecha', e.target.value)}
              className={campoBase}
            />
          </label>
          <label className="block">
            <span className="text-sm text-dane-ink/70 mb-1.5 block">Hora</span>
            <input
              type="time"
              value={datosCliente.hora}
              onChange={(e) => actualizarDatosCliente('hora', e.target.value)}
              className={campoBase}
            />
          </label>
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button
          type="button"
          onClick={irAtras}
          className="px-6 py-3 rounded-xl border border-dane-blush text-dane-ink font-medium hover:bg-white transition-colors"
        >
          Atrás
        </button>
        <button
          type="button"
          disabled={!formValido}
          onClick={irSiguiente}
          className="flex-1 px-6 py-3 rounded-xl bg-dane-plum text-white font-medium
                     disabled:opacity-35 disabled:cursor-not-allowed hover:bg-dane-plum-deep transition-colors"
        >
          Revisar y confirmar
        </button>
      </div>
    </div>
  )
}

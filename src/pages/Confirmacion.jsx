import { useState } from 'react'
import { useReserva } from '../context/ReservaContext'
import { crearCita } from '../services/citasService'
import { formatCOP } from '../utils/format'
import ModalExito from '../components/ModalExito'

export default function Confirmacion() {
  const {
    servicioSeleccionado,
    barrioSeleccionado,
    datosCliente,
    costos,
    construirPayload,
    irAtras,
    resetReserva,
  } = useReserva()

  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState(null)
  const [citaCreada, setCitaCreada] = useState(null)

  const handleConfirmar = async () => {
    setEnviando(true)
    setError(null)
    try {
      const payload = construirPayload()
      await crearCita(payload)
      setCitaCreada(payload)
    } catch (err) {
      setError(err.mensajeAmigable || 'No pudimos registrar la cita. Intenta de nuevo.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div>
      <h2 className="font-display text-2xl text-dane-ink mb-1">Confirma tu reserva</h2>
      <p className="text-dane-ink/60 mb-6 text-sm">Revisa que todo esté correcto antes de enviar.</p>

      <dl className="bg-white border border-dane-blush rounded-2xl p-5 divide-y divide-dane-blush/60 text-sm">
        <div className="flex justify-between py-2 first:pt-0">
          <dt className="text-dane-ink/60">Cliente</dt>
          <dd className="font-medium">{datosCliente.cliente_nombre}</dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-dane-ink/60">Teléfono</dt>
          <dd className="font-medium">{datosCliente.cliente_telefono}</dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-dane-ink/60">Servicio</dt>
          <dd className="font-medium">{servicioSeleccionado.nombre}</dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-dane-ink/60">Barrio</dt>
          <dd className="font-medium">{barrioSeleccionado.nombre}</dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-dane-ink/60">Dirección</dt>
          <dd className="font-medium text-right">{datosCliente.direccion_exacta}</dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-dane-ink/60">Fecha y hora</dt>
          <dd className="font-medium">
            {datosCliente.fecha} · {datosCliente.hora}
          </dd>
        </div>
        <div className="flex justify-between pt-3 last:pb-0">
          <dt className="text-dane-plum font-medium">Total a pagar</dt>
          <dd className="font-display text-lg text-dane-plum">{formatCOP(costos.total)}</dd>
        </div>
      </dl>

      {error && <p className="text-sm text-red-600 mt-4">{error}</p>}

      <div className="flex gap-3 mt-8">
        <button
          type="button"
          onClick={irAtras}
          disabled={enviando}
          className="px-6 py-3 rounded-xl border border-dane-blush text-dane-ink font-medium hover:bg-white transition-colors"
        >
          Atrás
        </button>
        <button
          type="button"
          onClick={handleConfirmar}
          disabled={enviando}
          className="flex-1 px-6 py-3 rounded-xl bg-dane-plum text-white font-medium
                     disabled:opacity-60 hover:bg-dane-plum-deep transition-colors"
        >
          {enviando ? 'Enviando…' : 'Confirmar reserva'}
        </button>
      </div>

      {citaCreada && (
        <ModalExito
          cita={citaCreada}
          resumen={{ servicioNombre: servicioSeleccionado.nombre, total: costos.total }}
          onCerrar={resetReserva}
        />
      )}
    </div>
  )
}

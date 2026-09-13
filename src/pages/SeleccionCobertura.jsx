import { useEffect, useState } from 'react'
import { getBarrios } from '../services/barriosService'
import { useReserva } from '../context/ReservaContext'
import { formatCOP } from '../utils/format'

export default function SeleccionCobertura() {
  const [barrios, setBarrios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const { barrioSeleccionado, setBarrioSeleccionado, irSiguiente, irAtras } = useReserva()

  useEffect(() => {
    let activo = true
    getBarrios()
      .then((data) => activo && setBarrios(data))
      .catch((err) => activo && setError(err.mensajeAmigable || 'No pudimos cargar la cobertura.'))
      .finally(() => activo && setCargando(false))
    return () => {
      activo = false
    }
  }, [])

  return (
    <div>
      <h2 className="font-display text-2xl text-dane-ink mb-1">¿Dónde te atendemos?</h2>
      <p className="text-dane-ink/60 mb-6 text-sm">
        Selecciona tu barrio para calcular el costo de domicilio.
      </p>

      {cargando && <p className="text-sm text-dane-ink/50">Cargando cobertura…</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {!cargando && !error && (
        <label className="block">
          <span className="text-sm text-dane-ink/70 mb-1.5 block">Barrio</span>
          <select
            value={barrioSeleccionado?.id ?? ''}
            onChange={(e) => {
              const barrio = barrios.find((b) => b.id === Number(e.target.value))
              setBarrioSeleccionado(barrio ?? null)
            }}
            className="w-full rounded-xl border border-dane-blush bg-white px-4 py-3 text-dane-ink
                       focus:outline-none focus:ring-2 focus:ring-dane-clay"
          >
            <option value="" disabled>
              Selecciona tu barrio…
            </option>
            {barrios.map((b) => (
              <option key={b.id} value={b.id}>
                {b.nombre} — {formatCOP(b.costo_domicilio)}
              </option>
            ))}
          </select>
        </label>
      )}

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
          disabled={!barrioSeleccionado}
          onClick={irSiguiente}
          className="flex-1 px-6 py-3 rounded-xl bg-dane-plum text-white font-medium
                     disabled:opacity-35 disabled:cursor-not-allowed hover:bg-dane-plum-deep transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { getServicios } from '../services/serviciosService'
import { useReserva } from '../context/ReservaContext'
import ServicioCard from '../components/ServicioCard'

export default function SeleccionServicio() {
  const [servicios, setServicios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const { servicioSeleccionado, setServicioSeleccionado, irSiguiente } = useReserva()

  useEffect(() => {
    let activo = true
    getServicios()
      .then((data) => activo && setServicios(data))
      .catch((err) => activo && setError(err.mensajeAmigable || 'No pudimos cargar los servicios.'))
      .finally(() => activo && setCargando(false))
    return () => {
      activo = false
    }
  }, [])

  return (
    <div>
      <h2 className="font-display text-2xl text-dane-ink mb-1">Elige tu servicio</h2>
      <p className="text-dane-ink/60 mb-6 text-sm">Selecciona el tratamiento que deseas agendar.</p>

      {cargando && <p className="text-sm text-dane-ink/50">Cargando servicios…</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {!cargando && !error && (
        <div className="grid sm:grid-cols-2 gap-4">
          {servicios.map((s) => (
            <ServicioCard
              key={s.id}
              servicio={s}
              seleccionado={servicioSeleccionado?.id === s.id}
              onSeleccionar={setServicioSeleccionado}
            />
          ))}
        </div>
      )}

      <button
        type="button"
        disabled={!servicioSeleccionado}
        onClick={irSiguiente}
        className="mt-8 w-full sm:w-auto px-6 py-3 rounded-xl bg-dane-plum text-white font-medium
                   disabled:opacity-35 disabled:cursor-not-allowed hover:bg-dane-plum-deep transition-colors"
      >
        Continuar
      </button>
    </div>
  )
}

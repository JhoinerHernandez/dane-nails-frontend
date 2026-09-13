import { useReserva } from '../context/ReservaContext'
import { formatCOP } from '../utils/format'

export default function ResumenReserva() {
  const { servicioSeleccionado, barrioSeleccionado, costos } = useReserva()

  if (!servicioSeleccionado && !barrioSeleccionado) {
    return (
      <aside className="bg-white border border-dane-blush rounded-2xl p-6 h-fit sticky top-6">
        <p className="text-sm text-dane-ink/50">
          Tu resumen aparecerá aquí a medida que elijas tu servicio y cobertura.
        </p>
      </aside>
    )
  }

  return (
    <aside className="bg-white border border-dane-blush rounded-2xl p-6 h-fit sticky top-6">
      <h3 className="font-display text-lg text-dane-ink mb-4">Tu reserva</h3>

      {servicioSeleccionado && (
        <div className="flex justify-between items-start py-2.5 border-b border-dane-blush text-sm text-dane-ink/80">
          <span>{servicioSeleccionado.nombre}</span>
          <span className="font-medium shrink-0 ml-3">{formatCOP(costos.precioServicio)}</span>
        </div>
      )}

      {barrioSeleccionado && (
        <div className="flex justify-between items-start py-2.5 border-b border-dane-blush text-sm text-dane-ink/80">
          <span>Domicilio · {barrioSeleccionado.nombre}</span>
          <span className="font-medium shrink-0 ml-3">{formatCOP(costos.costoDomicilio)}</span>
        </div>
      )}

      <div className="flex justify-between items-center pt-4">
        <span className="text-dane-ink/60 text-sm">Total</span>
        <span className="font-display text-xl text-dane-clay">
          {formatCOP(costos.total)}
        </span>
      </div>
    </aside>
  )
}

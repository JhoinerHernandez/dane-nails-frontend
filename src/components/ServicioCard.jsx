import { formatCOP } from '../utils/format'

export default function ServicioCard({ servicio, seleccionado, onSeleccionar }) {
  return (
    <button
      type="button"
      onClick={() => onSeleccionar(servicio)}
      aria-pressed={seleccionado}
      className={`text-left w-full rounded-2xl p-5 border transition-colors
        ${
          seleccionado
            ? 'border-dane-clay bg-dane-clay/10'
            : 'border-dane-blush bg-white hover:border-dane-clay/60'
        }`}
    >
      <div className="flex justify-between items-start gap-3 mb-1.5">
        <h3 className="font-display text-lg text-dane-ink">{servicio.nombre}</h3>
        <span className="text-dane-plum font-semibold shrink-0">
          {formatCOP(servicio.precio)}
        </span>
      </div>
      <p className="text-sm text-dane-ink/60 mb-3">{servicio.descripcion}</p>
      <span className="text-xs text-dane-gold font-medium">
        {servicio.duracion_minutos} minutos
      </span>
    </button>
  )
}

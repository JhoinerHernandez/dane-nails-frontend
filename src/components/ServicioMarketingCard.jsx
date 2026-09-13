import { formatCOP } from '../utils/format'

export default function ServicioMarketingCard({ servicio }) {
  return (
    <div className="rounded-2xl border border-dane-blush bg-white p-6 flex flex-col">
      <div className="w-11 h-11 rounded-full bg-dane-plum/10 flex items-center justify-center mb-4">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M10 3c3 3 6 6.5 6 10.5A6 6 0 0 1 4 13.5C4 9.5 7 6 10 3Z"
            fill="#8B6FB8"
          />
        </svg>
      </div>
      <h3 className="font-display text-lg text-dane-ink mb-1.5">{servicio.nombre}</h3>
      <p className="text-sm text-dane-ink/60 leading-relaxed mb-5 flex-1">
        {servicio.descripcion}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-dane-blush">
        <span className="text-xs text-dane-plum/70">{servicio.duracion_minutos} min</span>
        <span className="font-display text-dane-clay text-lg">{formatCOP(servicio.precio)}</span>
      </div>
    </div>
  )
}

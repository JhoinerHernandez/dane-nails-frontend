import { STEPS } from '../context/ReservaContext'

const ETIQUETAS = {
  [STEPS.SERVICIO]: 'Servicio',
  [STEPS.COBERTURA]: 'Cobertura',
  [STEPS.DATOS_CLIENTE]: 'Tus datos',
  [STEPS.CONFIRMACION]: 'Confirmar',
}

export default function PasosProgreso({ pasoActual }) {
  const pasos = Object.values(STEPS)

  return (
    <ol className="flex items-center gap-2 mb-6" aria-label="Progreso del agendamiento">
      {pasos.map((paso, i) => {
        const activo = paso === pasoActual
        const completado = paso < pasoActual
        return (
          <li key={paso} className="flex items-center gap-2 flex-1">
            <div className="flex items-center gap-2 w-full">
              <span
                className={`shrink-0 w-2.5 h-2.5 rounded-full transition-colors
                  ${activo ? 'bg-dane-clay' : completado ? 'bg-dane-plum' : 'bg-dane-blush'}`}
                aria-hidden="true"
              />
              <span
                className={`text-xs hidden sm:inline ${
                  activo ? 'text-dane-ink font-medium' : 'text-dane-ink/40'
                }`}
              >
                {ETIQUETAS[paso]}
              </span>
              {i < pasos.length - 1 && (
                <span className="h-px flex-1 bg-dane-blush" aria-hidden="true" />
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

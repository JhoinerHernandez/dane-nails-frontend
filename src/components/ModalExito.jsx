import { formatCOP } from '../utils/format'

const WHATSAPP_NUMERO = import.meta.env.VITE_WHATSAPP_NUMERO || '573000000000'

export default function ModalExito({ cita, resumen, onCerrar }) {
  const mensaje = encodeURIComponent(
    `Hola Dane Nails! Confirmo mi cita:\n` +
      `Servicio: ${resumen.servicioNombre}\n` +
      `Fecha: ${cita.fecha} · ${cita.hora}\n` +
      `Dirección: ${cita.direccion_exacta}\n` +
      `Total: ${formatCOP(resumen.total)}`
  )

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-exito-titulo"
      className="fixed inset-0 bg-dane-ink/70 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-dane-bone rounded-2xl max-w-md w-full p-8 text-center">
        <div
          className="w-14 h-14 rounded-full bg-dane-clay/20 text-dane-plum flex items-center justify-center mx-auto mb-4 text-2xl"
          aria-hidden="true"
        >
          ✓
        </div>
        <h2 id="modal-exito-titulo" className="font-display text-xl text-dane-ink mb-2">
          Cita agendada
        </h2>
        <p className="text-dane-ink/60 mb-6 text-sm">
          Tu reserva para el {cita.fecha} a las {cita.hora} quedó registrada.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 rounded-xl bg-[#25D366] text-white font-medium mb-3 hover:brightness-95 transition"
        >
          Confirmar por WhatsApp
        </a>

        <button
          type="button"
          onClick={onCerrar}
          className="w-full py-3 rounded-xl border border-dane-blush text-dane-ink font-medium hover:bg-white transition"
        >
          Agendar otra cita
        </button>
      </div>
    </div>
  )
}

import { createContext, useContext, useState, useMemo } from 'react'

const ReservaContext = createContext(null)

export const STEPS = {
  SERVICIO: 1,
  COBERTURA: 2,
  DATOS_CLIENTE: 3,
  CONFIRMACION: 4,
}

const DATOS_CLIENTE_INICIAL = {
  cliente_nombre: '',
  cliente_telefono: '',
  direccion_exacta: '',
  fecha: '',
  hora: '',
}

export function ReservaProvider({ children }) {
  const [step, setStep] = useState(STEPS.SERVICIO)
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null)
  const [barrioSeleccionado, setBarrioSeleccionado] = useState(null)
  const [datosCliente, setDatosCliente] = useState(DATOS_CLIENTE_INICIAL)
  const [citaConfirmada, setCitaConfirmada] = useState(null)

  // Cálculo automático en tiempo real: servicio + domicilio
  const costos = useMemo(() => {
    const precioServicio = servicioSeleccionado
      ? parseFloat(servicioSeleccionado.precio)
      : 0
    const costoDomicilio = barrioSeleccionado
      ? parseFloat(barrioSeleccionado.costo_domicilio)
      : 0
    return {
      precioServicio,
      costoDomicilio,
      total: precioServicio + costoDomicilio,
    }
  }, [servicioSeleccionado, barrioSeleccionado])

  const irSiguiente = () => setStep((s) => Math.min(s + 1, STEPS.CONFIRMACION))
  const irAtras = () => setStep((s) => Math.max(s - 1, STEPS.SERVICIO))
  const irAPaso = (nuevoPaso) => setStep(nuevoPaso)

  const actualizarDatosCliente = (campo, valor) => {
    setDatosCliente((prev) => ({ ...prev, [campo]: valor }))
  }

  const construirPayload = () => ({
    cliente_nombre: datosCliente.cliente_nombre.trim(),
    cliente_telefono: datosCliente.cliente_telefono.trim(),
    barrio_id: barrioSeleccionado?.id,
    direccion_exacta: datosCliente.direccion_exacta.trim(),
    servicio_id: servicioSeleccionado?.id,
    fecha: datosCliente.fecha,
    hora: datosCliente.hora.length === 5 ? `${datosCliente.hora}:00` : datosCliente.hora,
  })

  const resetReserva = () => {
    setServicioSeleccionado(null)
    setBarrioSeleccionado(null)
    setDatosCliente(DATOS_CLIENTE_INICIAL)
    setCitaConfirmada(null)
    setStep(STEPS.SERVICIO)
  }

  const value = {
    STEPS,
    step,
    irSiguiente,
    irAtras,
    irAPaso,
    servicioSeleccionado,
    setServicioSeleccionado,
    barrioSeleccionado,
    setBarrioSeleccionado,
    datosCliente,
    actualizarDatosCliente,
    costos,
    construirPayload,
    citaConfirmada,
    setCitaConfirmada,
    resetReserva,
  }

  return <ReservaContext.Provider value={value}>{children}</ReservaContext.Provider>
}

export function useReserva() {
  const ctx = useContext(ReservaContext)
  if (!ctx) throw new Error('useReserva debe usarse dentro de <ReservaProvider>')
  return ctx
}

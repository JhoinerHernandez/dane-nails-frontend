import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Conocenos from './sections/Conocenos';
import ServiciosDestacados from './sections/ServiciosDestacados';
import CoberturaDestacada from './sections/CoberturaDestacada';
import AgendadorSection from './sections/AgendadorSection';

export default function App() {
  const [agendadorAbierto, setAgendadorAbierto] = useState(false);
  const [barrioPreseleccionado, setBarrioPreseleccionado] = useState(null);
  const [servicioPreseleccionado, setServicioPreseleccionado] = useState(null);

  const abrirAgendador = (barrio = null, servicio = null) => {
    setBarrioPreseleccionado(barrio);
    setServicioPreseleccionado(servicio);
    setAgendadorAbierto(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8FC]">
      <Header onOpenAgendador={() => abrirAgendador()} />
      <Hero onOpenAgendador={() => abrirAgendador()} />
      <Conocenos />
      
      {/* Recibe el servicio seleccionado desde las tarjetas */}
      <ServiciosDestacados onOpenAgendador={(servicio) => abrirAgendador(null, servicio)} />
      
      {/* Recibe el barrio desde la calculadora */}
      <CoberturaDestacada onOpenAgendador={(barrio) => abrirAgendador(barrio, null)} />

      {/* MODAL AGENDADOR CON AMBOS VALORES */}
      <AgendadorSection 
        isOpen={agendadorAbierto} 
        onClose={() => setAgendadorAbierto(false)}
        barrioInicial={barrioPreseleccionado}
        servicioInicial={servicioPreseleccionado}
      />

      <Footer />
    </div>
  );
}
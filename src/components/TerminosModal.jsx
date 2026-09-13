import React from 'react';

const TerminosModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-purple-100">
        
        {/* ENCABEZADO DEL MODAL */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-[#FAF8FC]">
          <h3 className="text-2xl font-bold text-[#A694D0] font-amatic sm:text-3xl tracking-wide">
            Términos y Condiciones · Dane Nails
          </h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-purple-100 text-[#A694D0] flex items-center justify-center font-bold hover:bg-[#A694D0] hover:text-white transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* CONTENIDO LARGO Y PROFESIONAL CON SCROLL */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
          <div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">1. Introducción y Aceptación</h4>
            <p>
              Bienvenida a <strong>Dane Nails</strong>. Al acceder y utilizar nuestro sitio web y servicios de manicura a domicilio en Barranquilla y Soledad, aceptas cumplir y estar sujeto a los siguientes términos y condiciones. Esta política está diseñada para garantizar un servicio seguro, puntual y de alta calidad adaptado a tus necesidades.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">2. Naturaleza del Servicio a Domicilio</h4>
            <p>
              Dane Nails opera bajo un modelo exclusivo de atención a domicilio. Nos desplazamos hasta la ubicación proporcionada por la clienta (casa u oficina) con todos los implementos de bioseguridad, esterilización y mobiliario necesario para realizar servicios de acrílico, soft gel y semipermanente, etc.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">3. Reservas y Gestión de Citas</h4>
            <p>
              Todas las reservas se gestionan de forma directa y ágil a través de nuestra pasarela conectada a WhatsApp. Es responsabilidad de la clienta proporcionar una dirección exacta, un número de contacto válido y el horario correcto para evitar retrasos en la ruta de atención domiciliaria.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">4. Privacidad y Uso de Datos</h4>
            <p>
              La información personal recopilada (como nombre, número telefónico, dirección y correo electrónico ingresado en nuestros formularios o canales de contacto) se utiliza estrictamente para coordinar las citas, gestionar entregas de servicios y enviar notificaciones o promociones exclusivas de Dane Nails. Nos comprometemos a mantener tus datos seguros y bajo ninguna circunstancia serán comercializados con terceros.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 text-lg mb-1">5. Modificaciones de los Términos</h4>
            <p>
              Dane Nails se reserva el derecho de modificar, actualizar o cambiar estos términos y condiciones en cualquier momento para reflejar mejoras operativas o normativas legales, recomendando a nuestras clientas revisarlos periódicamente.
            </p>
          </div>
        </div>

        {/* PIE DEL MODAL */}
        <div className="px-6 py-4 border-t border-gray-100 bg-[#FAF8FC] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#A694D0] text-white font-semibold rounded-xl hover:bg-[#8e7bb8] transition-all shadow-sm cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};

export default TerminosModal;
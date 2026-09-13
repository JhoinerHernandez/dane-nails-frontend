const PALETA_PLACEHOLDER = ['#8B6FB8', '#C9A227', '#ECE5F7', '#6E559A', '#F6F3FC', '#A9841D']

export default function Galeria() {
  return (
    <section id="galeria" className="bg-dane-mist">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
        <div className="max-w-lg mb-10">
          <h2 className="font-display text-3xl text-dane-ink mb-3">Trabajos recientes</h2>
          <p className="text-dane-ink/65 leading-relaxed">
            Una muestra de nuestros diseños. Síguenos en Instagram para ver el feed completo.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
          {PALETA_PLACEHOLDER.map((color, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${color}22` }}
            >
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 3c3 3 6 6.5 6 10.5A6 6 0 0 1 4 13.5C4 9.5 7 6 10 3Z"
                  fill={color}
                />
              </svg>
            </div>
          ))}
        </div>
        <p className="text-xs text-dane-ink/40 mt-4">
          * Espacio reservado para fotografías reales de trabajos — reemplázalas en{' '}
          <code className="text-dane-ink/50">src/sections/Galeria.jsx</code>.
        </p>
      </div>
    </section>
  )
}

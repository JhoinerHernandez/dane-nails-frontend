export default function Logo({ tamaño = 40 }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg width={tamaño} height={tamaño} viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#8B6FB8" />
        <circle cx="20" cy="20" r="20" fill="url(#dn-sheen)" fillOpacity="0.25" />
        <text
          x="20"
          y="26"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontSize="15"
          fill="#C9A227"
          fontWeight="600"
        >
          DN
        </text>
        <defs>
          <linearGradient id="dn-sheen" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-lg text-dane-ink leading-none">Dane Nails</span>
    </div>
  )
}

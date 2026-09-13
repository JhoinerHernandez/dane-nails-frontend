import React from 'react';

const instaPhotos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop',
    link: 'https://instagram.com'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=400&auto=format&fit=crop',
    link: 'https://instagram.com'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop',
    link: 'https://instagram.com'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=400&auto=format&fit=crop',
    link: 'https://instagram.com'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=400&auto=format&fit=crop',
    link: 'https://instagram.com'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1599847998803-125032598380?q=80&w=400&auto=format&fit=crop',
    link: 'https://instagram.com'
  }
];

const InstagramFeed = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
        .font-amatic { font-family: 'Amatic SC', cursive; }
      `}</style>

      {/* Le metemos -mt-10 (margen superior negativo) para tragarnos el espacio blanco de arriba */}
      <section className="w-full bg-[#F3EEF9] -mt-10 pt-16 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-1 mb-10 px-6">
            <h2 className="font-amatic text-5xl md:text-6xl font-bold text-[#A694D0]">
              Síguenos En Instagram
            </h2>
            <div className="inline-block border-b-2 border-[#A694D0] pb-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-amatic text-3xl font-bold text-gray-600 hover:text-[#A694D0] transition-colors"
              >
                @dane.nails
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 px-2">
            {instaPhotos.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-48 md:h-56 overflow-hidden relative group block shadow-sm rounded-lg"
              >
                <img
                  src={item.url}
                  alt="Instagram Dane Nails"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#A694D0]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center">
                  <svg className="w-8 h-8 mb-1 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-amatic text-2xl font-bold">@dane.nails</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramFeed;
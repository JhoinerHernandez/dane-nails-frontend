import React from 'react';

const InstagramFeed = () => {
  const posts = [
    {
      id: 1,
      image: '/dane-1.jpeg',
      link: 'https://www.instagram.com/danenails.barranquilla_/',
    },
    {
      id: 2,
      image: '/dane-2.jpeg',
      link: 'https://www.instagram.com/danenails.barranquilla_/',
    },
    {
      id: 3,
      image: '/dane-1.jpeg',
      link: 'https://www.instagram.com/danenails.barranquilla_/',
    },
    {
      id: 4,
      image: '/dane-2.jpeg',
      link: 'https://www.instagram.com/danenails.barranquilla_/',
    },
    {
      id: 5,
      image: '/dane-1.jpeg',
      link: 'https://www.instagram.com/danenails.barranquilla_/',
    },
  ];

  return (
    <section className="w-full bg-[#FAF8FC] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 text-center">
        
        {/* TÍTULO Y USERNAME IGUAL AL EJEMPLO */}
        <h3 className="font-amatic text-5xl md:text-6xl font-bold text-[#A694D0]">
          Síguenos en Instagram
        </h3>
        
        <div className="pb-6">
          <a
            href="https://www.instagram.com/danenails.barranquilla_/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-amatic text-3xl md:text-4xl text-gray-600 hover:text-[#A694D0] transition-colors border-b-2 border-[#A694D0]/40 pb-1 inline-block"
          >
            @danenails.barranquilla_
          </a>
        </div>

        {/* GRILLA DE IMÁGENES CON EL HOVER IDÉNTICO */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden aspect-square block bg-gray-100"
            >
              {/* IMAGEN BASE */}
              <img
                src={post.image}
                alt={`Dane Nails Instagram ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300"
              />

              {/* OVERLAY OSCURO + ÍCONO DE INSTAGRAM EN EL CENTRO */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white fill-current transform scale-90 group-hover:scale-100 transition-transform duration-300 drop-shadow-md"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramFeed;
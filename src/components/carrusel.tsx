  import React, { useState, useEffect } from 'react';
  import { ChevronLeft, ChevronRight } from 'lucide-react';

  const ClientCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Array de clientes argentinos - usando logos reales
    const clients = [
      { name: 'Bertora', logo: '/clientes/Bertora.png' },
      { name: 'Edesur', logo: '/clientes/edesur.png' },
      { name: 'Elea', logo: '/clientes/elea.png' },
      { name: 'Enarsa', logo: '/clientes/enarsa.png' },
      { name: 'Enel', logo: '/clientes/enel.png' },
      { name: 'Fuerza Aérea Argentina', logo: '/clientes/fuerzaaerea.png' },
      { name: 'Hanseática', logo: '/clientes/hanseatica.png' },
      { name: 'Hospital Británico', logo: '/clientes/hospitalbritanico.png' },
      { name: 'Lihue', logo: '/clientes/lihue.png' },
      { name: 'Luis Pasteur', logo: '/clientes/luispasteur.png' },
      { name: 'Mineconia', logo: '/clientes/mineconoia.png' },
      { name: 'Vidogar', logo: '/clientes/vidogar.png' }
    ];

    // Responsive items per slide - Mobile First
    const getItemsPerSlide = () => {
      if (typeof window === 'undefined') return 2; // SSR fallback

      const width = window.innerWidth;
      console.log('Window width:', width); // Debug - puedes quitar esto después

      if (width < 640) return 2;      // mobile: 2 items
      if (width < 1024) return 3;     // tablet: 3 items  
      return 4;                       // desktop: 4 items
    };

    const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);
    const totalSlides = Math.ceil(clients.length / itemsPerSlide);
    // Debounced navigation to prevent rapid clicking
    const [isNavigating, setIsNavigating] = useState(false);
    const nextSlide = () => {
      if (isNavigating) return;
      setIsNavigating(true);
      setCurrentIndex(prev => (prev + 1) % totalSlides);
      setTimeout(() => setIsNavigating(false), 300);
    };
    const prevSlide = () => {
      if (isNavigating) return;
      setIsNavigating(true);
      setCurrentIndex(prev => prev === 0 ? totalSlides - 1 : prev - 1);
      setTimeout(() => setIsNavigating(false), 300);
    };
    const goToSlide = (index: number) => {
      if (isNavigating || index === currentIndex) return;
      setIsNavigating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsNavigating(false), 300);
    };
    // Update items per slide on window resize
    useEffect(() => {
      const handleResize = () => {
        const newItemsPerSlide = getItemsPerSlide();
        console.log('Resize - new items per slide:', newItemsPerSlide); // Debug
        if (newItemsPerSlide !== itemsPerSlide) {
          setItemsPerSlide(newItemsPerSlide);
        }
      };

      // Set initial value
      setItemsPerSlide(getItemsPerSlide());

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [itemsPerSlide]);

    // Set correct items per slide on mount
    useEffect(() => {
      const timer = setTimeout(() => {
        setItemsPerSlide(getItemsPerSlide());
      }, 100);
      return () => clearTimeout(timer);
    }, []);
    // Reset current index when items per slide changes
    useEffect(() => {
      const newTotalSlides = Math.ceil(clients.length / itemsPerSlide);
      if (currentIndex >= newTotalSlides) {
        setCurrentIndex(0);
      }
    }, [itemsPerSlide, currentIndex, clients.length]);
    // Auto-play
    useEffect(() => {
      if (!isPlaying || isNavigating) return;
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }, [currentIndex, isPlaying, totalSlides, isNavigating]);

    return (
      <div 
        className="relative bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Botón Anterior - Oculto en mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 hidden sm:block"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>

        {/* Container de Logos */}
        <div className="overflow-hidden px-2 sm:mx-8 lg:mx-16">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="flex gap-3 sm:gap-4 lg:gap-8 min-w-full justify-center">
                {clients.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((client, index) => (
                  <div key={index} className="flex flex-col items-center group cursor-pointer">
                    {/* Logo - Mobile First sizing */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-gray-200 p-2 sm:p-3">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} Logo`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    {/* Nombre - Mobile First text sizing */}
                    <span className="text-gray-700 mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-center max-w-20 sm:max-w-24 lg:max-w-28 leading-tight">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Botón Siguiente - Oculto en mobile */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 hidden sm:block"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isNavigating}
              className={`rounded-full transition-all duration-300 touch-manipulation ${
                index === currentIndex
                  ? 'h-2 w-6 sm:h-2 sm:w-8 bg-gray-700'
                  : 'h-2 w-2 sm:h-2 sm:w-2 bg-gray-400 hover:bg-gray-600'
              } ${isNavigating ? 'pointer-events-none' : ''}`}
              style={{ minHeight: '12px', minWidth: '12px' }} // Better touch target
            />
          ))}
        </div>

          {/* Botones de navegación para mobile */}
          <div className="flex justify-center gap-4 mt-4 sm:hidden">
            <button
              onClick={prevSlide}
              disabled={isNavigating}
              className={`p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 touch-manipulation ${
                isNavigating ? 'opacity-50 pointer-events-none' : ''
              }`}
              style={{ minHeight: '44px', minWidth: '44px' }} // Better touch target
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isNavigating}
              className={`p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 touch-manipulation ${
                isNavigating ? 'opacity-50 pointer-events-none' : ''
              }`}
              style={{ minHeight: '44px', minWidth: '44px' }} // Better touch target
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
           </div>
          </div>
      );
    };

export default ClientCarousel;
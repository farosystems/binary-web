import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from "@/src/lib/utils";

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
      className={cn(
        "relative bg-transparent p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto"
      )}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Botón Anterior - Oculto en mobile */}
      <motion.button
        onClick={prevSlide}
        className={cn(
          "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3",
          "bg-dynamic-secondary rounded-full shadow-lg hover:shadow-xl",
          "hover:bg-dynamic-primary transition-all duration-300 hidden sm:block"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-dynamic-primary" />
      </motion.button>

      {/* Container de Logos */}
      <div className="overflow-hidden px-2 sm:mx-8 lg:mx-16">
        <motion.div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {Array.from({ length: totalSlides }, (_, slideIndex) => (
            <div key={slideIndex} className="flex gap-3 sm:gap-4 lg:gap-8 min-w-full justify-center">
              {clients.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((client, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Logo - Tamaño uniforme */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} Logo`} 
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        width: 'auto', 
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                    />
                  </div>
                  {/* Nombre - Mobile First text sizing */}
                  <span className="text-dynamic-primary mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-center max-w-20 sm:max-w-24 lg:max-w-28 leading-tight">
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Botón Siguiente - Oculto en mobile */}
      <motion.button
        onClick={nextSlide}
        className={cn(
          "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3",
          "bg-dynamic-secondary rounded-full shadow-lg hover:shadow-xl",
          "hover:bg-dynamic-primary transition-all duration-300 hidden sm:block"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-dynamic-primary" />
      </motion.button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isNavigating}
            className={cn(
              "rounded-full transition-all duration-300 touch-manipulation",
              index === currentIndex
                ? 'h-2 w-6 sm:h-2 sm:w-8 bg-dynamic-primary'
                : 'h-2 w-2 sm:h-2 sm:w-2 bg-dynamic-soft hover:bg-dynamic-primary',
              isNavigating ? 'pointer-events-none' : ''
            )}
            style={{ minHeight: '12px', minWidth: '12px' }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Botones de navegación para mobile */}
      <div className="flex justify-center gap-4 mt-4 sm:hidden">
        <motion.button
          onClick={prevSlide}
          disabled={isNavigating}
          className={cn(
            "p-3 bg-dynamic-secondary rounded-full shadow-lg hover:shadow-xl",
            "hover:bg-dynamic-primary transition-all duration-300 touch-manipulation",
            isNavigating ? 'opacity-50 pointer-events-none' : ''
          )}
          style={{ minHeight: '44px', minWidth: '44px' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-4 h-4 text-dynamic-primary" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          disabled={isNavigating}
          className={cn(
            "p-3 bg-dynamic-secondary rounded-full shadow-lg hover:shadow-xl",
            "hover:bg-dynamic-primary transition-all duration-300 touch-manipulation",
            isNavigating ? 'opacity-50 pointer-events-none' : ''
          )}
          style={{ minHeight: '44px', minWidth: '44px' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-4 h-4 text-dynamic-primary" />
        </motion.button>
       </div>
      </div>
    );
  };

export default ClientCarousel;
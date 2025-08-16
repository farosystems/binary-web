"use client"

import { cn } from "@/src/lib/utils"

// Datos de tecnologías Open Source con SVGs actualizados
const openSourceTechs = [
  { 
    name: "Java", 
    logo: "/logos/java.svg",
    logoLight: "/logos/java.svg",
    logoDark: "/logos/java.svg"
  },
  { 
    name: "React", 
    logo: "/logos/React_light.svg",
    logoLight: "/logos/React_light.svg",
    logoDark: "/logos/React_dark.svg"
  },
  { 
    name: "Go", 
    logo: "/logos/Go_light.svg",
    logoLight: "/logos/Go_light.svg",
    logoDark: "/logos/Go_light.svg",
    needsInvert: true
  },
  { 
    name: "Python", 
    logo: "/logos/python.svg",
    logoLight: "/logos/python.svg",
    logoDark: "/logos/python.svg"
  },
  { 
    name: "MySQL", 
    logo: "/logos/mysql.svg",
    logoLight: "/logos/mysql.svg",
    logoDark: "/logos/mysql.svg"
  },
  { 
    name: "MariaDB", 
    logo: "/logos/mariadb.svg",
    logoLight: "/logos/mariadb.svg",
    logoDark: "/logos/mariadb.svg"
  }
]

export default function OpenSourceMarquee() {
  return (
    <section className="py-12 bg-dynamic-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-dynamic-primary mb-2">
            Open Source
          </h3>
          <p className="text-dynamic-secondary">
            Desarrollo y Bases de Datos
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays para fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dynamic-primary to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dynamic-primary to-transparent z-10"></div>
          
          {/* Marquee infinito */}
          <div className="flex items-center space-x-12 animate-marquee-left whitespace-nowrap">
            {/* Primera iteración */}
            {openSourceTechs.map((tech, index) => (
              <div key={`first-${index}`} className="relative group flex items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300">
                  {/* Logo para light mode */}
                  <img 
                    src={tech.logoLight} 
                    alt={tech.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 dark:hidden"
                  />
                  {/* Logo para dark mode */}
                  <img 
                    src={tech.logoDark} 
                    alt={tech.name}
                    className={`w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 hidden dark:block ${tech.needsInvert ? 'dark:invert' : ''}`}
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </div>
              </div>
            ))}
            
            {/* Segunda iteración para continuidad */}
            {openSourceTechs.map((tech, index) => (
              <div key={`second-${index}`} className="relative group flex items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300">
                  {/* Logo para light mode */}
                  <img 
                    src={tech.logoLight} 
                    alt={tech.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 dark:hidden"
                  />
                  {/* Logo para dark mode */}
                  <img 
                    src={tech.logoDark} 
                    alt={tech.name}
                    className={`w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 hidden dark:block ${tech.needsInvert ? 'dark:invert' : ''}`}
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </div>
              </div>
            ))}

            {/* Tercera iteración para continuidad */}
            {openSourceTechs.map((tech, index) => (
              <div key={`third-${index}`} className="relative group flex items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-300">
                  {/* Logo para light mode */}
                  <img 
                    src={tech.logoLight} 
                    alt={tech.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 dark:hidden"
                  />
                  {/* Logo para dark mode */}
                  <img 
                    src={tech.logoDark} 
                    alt={tech.name}
                    className={`w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 hidden dark:block ${tech.needsInvert ? 'dark:invert' : ''}`}
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        
        .animate-marquee-left {
          animation: marquee-left 8s linear infinite;
        }
        
        @media (min-width: 768px) {
          .animate-marquee-left {
            animation: marquee-left 12s linear infinite;
          }
        }
        
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
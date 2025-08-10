"use client"

import { cn } from "@/src/lib/utils"

// Datos de tecnologías Open Source
const openSourceTechs = [
  { name: "Java", logo: "/logos/java-logo.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Go", logo: "/logos/go.png" },
  { name: "Python", logo: "/logos/python.png" },
  { name: "MySQL", logo: "/logos/mysql-logo.webp" },
  { name: "MariaDB", logo: "/logos/mariadb.png" },
  { name: "JavaFX", logo: "/logos/javafx-logo.png" },
  { name: "Apache Tomcat", logo: "/logos/tomcat-logo.png" },
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
              <div key={`first-${index}`} className="flex items-center flex-shrink-0">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="h-12 w-12 md:h-16 md:w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="ml-3 text-dynamic-secondary font-medium hidden sm:block md:text-lg">
                  {tech.name}
                </span>
              </div>
            ))}
            
            {/* Segunda iteración para continuidad */}
            {openSourceTechs.map((tech, index) => (
              <div key={`second-${index}`} className="flex items-center flex-shrink-0">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="h-12 w-12 md:h-16 md:w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="ml-3 text-dynamic-secondary font-medium hidden sm:block md:text-lg">
                  {tech.name}
                </span>
              </div>
            ))}

            {/* Tercera iteración para continuidad */}
            {openSourceTechs.map((tech, index) => (
              <div key={`third-${index}`} className="flex items-center flex-shrink-0">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="h-12 w-12 md:h-16 md:w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="ml-3 text-dynamic-secondary font-medium hidden sm:block md:text-lg">
                  {tech.name}
                </span>
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
          animation: marquee-left 20s linear infinite;
        }
        
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
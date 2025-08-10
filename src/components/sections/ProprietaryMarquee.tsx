"use client"

import { cn } from "@/src/lib/utils"

// Datos de tecnologías Propietarias (con SVGs para las que no tienen logo)
const proprietaryTechs = [
  { name: "Oracle Database", logo: "/logos/oracle.png" },
  { 
    name: "Oracle Forms", 
    logo: null,
    svg: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    )
  },
  { 
    name: "PL/SQL", 
    logo: null,
    svg: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      </svg>
    )
  },
  { 
    name: "SQL*PLUS", 
    logo: null,
    svg: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
      </svg>
    )
  },
  { 
    name: "SQL*LOADER", 
    logo: null,
    svg: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
      </svg>
    )
  },
  { 
    name: "PRO*C", 
    logo: null,
    svg: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 3a1 1 0 000 2v.25c0 .414.336.75.75.75s.75-.336.75-.75V5h5v.25c0 .414.336.75.75.75s.75-.336.75-.75V5a1 1 0 100-2H8zM6 7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V7z"/>
      </svg>
    )
  }
]

export default function ProprietaryMarquee() {
  return (
    <section className="py-12 bg-dynamic-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-dynamic-primary mb-2">
            Propietarias
          </h3>
          <p className="text-dynamic-secondary">
            Oracle Database (versión 19c) y Desarrollo (versión 12.2)
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays para fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dynamic-primary to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dynamic-primary to-transparent z-10"></div>
          
          {/* Marquee infinito (dirección opuesta) */}
          <div className="flex items-center space-x-12 animate-marquee-right whitespace-nowrap">
            {/* Primera iteración */}
            {proprietaryTechs.map((tech, index) => (
              <div key={`first-${index}`} className="flex items-center flex-shrink-0">
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-12 w-12 md:h-16 md:w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300">
                    {tech.svg}
                  </div>
                )}
                <span className="ml-3 text-dynamic-secondary font-medium hidden sm:block md:text-lg">
                  {tech.name}
                </span>
              </div>
            ))}
            
            {/* Segunda iteración para continuidad */}
            {proprietaryTechs.map((tech, index) => (
              <div key={`second-${index}`} className="flex items-center flex-shrink-0">
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-12 w-12 md:h-16 md:w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300">
                    {tech.svg}
                  </div>
                )}
                <span className="ml-3 text-dynamic-secondary font-medium hidden sm:block md:text-lg">
                  {tech.name}
                </span>
              </div>
            ))}

            {/* Tercera iteración para continuidad */}
            {proprietaryTechs.map((tech, index) => (
              <div key={`third-${index}`} className="flex items-center flex-shrink-0">
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-12 w-12 md:h-16 md:w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300">
                    {tech.svg}
                  </div>
                )}
                <span className="ml-3 text-dynamic-secondary font-medium hidden sm:block md:text-lg">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
        
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
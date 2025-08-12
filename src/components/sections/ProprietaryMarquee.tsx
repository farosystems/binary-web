"use client"

import { cn } from "@/src/lib/utils"

// Datos de tecnologías Propietarias (con SVGs para las que no tienen logo)
const proprietaryTechs = [
  { name: "Oracle Database", logo: "/logos/oracle.png" },
  { 
    name: "Oracle Forms", 
    logo: null,
    svg: (
      <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-gray-400 group-hover:text-red-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 19V5h16v14H4z"/>
        <path d="M6 7h12v2H6zM6 10h8v2H6zM6 13h10v2H6zM6 16h6v2H6z"/>
        <circle cx="17" cy="11" r="1.5" className="fill-gray-400 group-hover:fill-red-500 transition-colors duration-300"/>
        <circle cx="17" cy="15" r="1.5" className="fill-gray-400 group-hover:fill-red-500 transition-colors duration-300"/>
      </svg>
    )
  },
  { 
    name: "PL/SQL", 
    logo: null,
    svg: (
      <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 8h8v1.5H8zM8 10.5h6v1.5H8zM8 13h7v1.5H8z" fill="white"/>
        <text x="12" y="18" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">PL</text>
      </svg>
    )
  },
  { 
    name: "SQL*PLUS", 
    logo: null,
    svg: (
      <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-gray-400 group-hover:text-green-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor"/>
        <rect x="4" y="6" width="16" height="2" fill="white"/>
        <rect x="4" y="9" width="12" height="1.5" fill="white"/>
        <rect x="4" y="11.5" width="14" height="1.5" fill="white"/>
        <rect x="4" y="14" width="10" height="1.5" fill="white"/>
        <circle cx="18" cy="16" r="2" className="fill-gray-400 group-hover:fill-green-500 transition-colors duration-300"/>
        <text x="18" y="17" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">+</text>
      </svg>
    )
  },
  { 
    name: "SQL*LOADER", 
    logo: null,
    svg: (
      <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
        <path d="M14 2v6h6" fill="none" stroke="white" strokeWidth="2"/>
        <path d="M8 12h8M8 14h6M8 16h4" stroke="white" strokeWidth="1.5"/>
        <circle cx="16" cy="18" r="3" className="fill-gray-400 group-hover:fill-orange-500 transition-colors duration-300"/>
        <path d="M14.5 18l1.5-1.5 3 3" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
    )
  },
  { 
    name: "PRO*C", 
    logo: null,
    svg: (
      <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor"/>
        <path d="M7 8h10v1.5H7zM7 10.5h8v1.5H7zM7 13h6v1.5H7z" fill="white"/>
        <circle cx="17" cy="16" r="2.5" className="fill-gray-400 group-hover:fill-purple-600 transition-colors duration-300"/>
        <text x="17" y="17.5" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">C</text>
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
              <div key={`first-${index}`} className="relative group flex items-center flex-shrink-0">
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center transition-all duration-300">
                    {tech.svg}
                  </div>
                )}
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </div>
              </div>
            ))}
            
            {/* Segunda iteración para continuidad */}
            {proprietaryTechs.map((tech, index) => (
              <div key={`second-${index}`} className="relative group flex items-center flex-shrink-0">
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center transition-all duration-300">
                    {tech.svg}
                  </div>
                )}
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </div>
              </div>
            ))}

            {/* Tercera iteración para continuidad */}
            {proprietaryTechs.map((tech, index) => (
              <div key={`third-${index}`} className="relative group flex items-center flex-shrink-0">
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center transition-all duration-300">
                    {tech.svg}
                  </div>
                )}
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
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .animate-marquee-right {
          animation: marquee-right 8s linear infinite;
        }
        
        @media (min-width: 768px) {
          .animate-marquee-right {
            animation: marquee-right 12s linear infinite;
          }
        }
        
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
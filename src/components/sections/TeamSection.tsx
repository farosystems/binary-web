"use client"

import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"

export default function TeamSection() {
  return (
    <section 
      id="equipo" 
      className={cn(
        STYLES.layout.sectionLarge,
        "bg-dynamic-muted relative overflow-hidden"
      )}
    >
      {/* Patrón de fondo decorativo dinámico */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--text-primary) 2px, transparent 2px), radial-gradient(circle at 75% 75%, var(--text-primary) 1px, transparent 1px)`,        
            backgroundSize: '60px 60px, 40px 40px'
          }}
        />
      </div>

      {/* Contenedor principal */}
      <div className={cn(STYLES.layout.container, "relative z-10")}>
        {/* Header de la sección - DINÁMICO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dynamic-primary">
            Nuestro Equipo
          </h2>
          <p className="text-lg md:text-xl text-dynamic-secondary max-w-3xl mx-auto leading-relaxed">
            Líderes con más de 30 años de experiencia transformando empresas a través de la tecnología
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* Roberto Schettini */}
          <div className="group relative">
            <div className="bg-dynamic-secondary border border-dynamic backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:border-dynamic-soft transition-all duration-500 hover:transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
              {/* Photo Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="relative shrink-0">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/funders/RS.jpg" 
                        alt="Roberto Schettini" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">       
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-dynamic-primary">Roberto Schettini</h3>
                  <p className="text-blue-400 font-semibold mb-3">Socio Fundador & CTO</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="px-3 py-1 bg-dynamic-muted text-dynamic-secondary text-xs rounded-full">30+ años experiencia</span>
                    <span className="px-3 py-1 bg-dynamic-muted text-dynamic-secondary text-xs rounded-full">Lic. en Sistemas</span>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <p className="text-dynamic-secondary text-sm leading-relaxed">
                    <strong className="text-dynamic-primary">Educación:</strong> Licenciado en Sistemas, Universidad C.A.E.C.E, Buenos Aires (1989)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <p className="text-dynamic-secondary text-sm leading-relaxed">
                    <strong className="text-dynamic-primary">Especialización:</strong> Salud, Energía, Producción, Servicios Masivos, Integración de Negocios
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <p className="text-dynamic-secondary text-sm leading-relaxed">
                    <strong className="text-dynamic-primary">Experiencia destacada:</strong> Gerente de Sistemas, Presidente de Correo Privado, Gerente de Operaciones en Hospital Británico, Fleni, Sanatorio Finochietto e Instituto Fleming
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Jorge Boccanera */}
          <div className="group relative">
            <div className="bg-dynamic-secondary border border-dynamic backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:border-dynamic-soft transition-all duration-500 hover:transform hover:-translate-y-2 shadow-lg hover:shadow-xl">
              {/* Photo Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="relative shrink-0">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/funders/JB.jpeg" 
                        alt="Jorge A. Boccanera" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">     
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-dynamic-primary">Jorge A. Boccanera</h3>
                  <p className="text-green-400 font-semibold mb-3">Socio Fundador & CEO</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="px-3 py-1 bg-dynamic-muted text-dynamic-secondary text-xs rounded-full">35+ años experiencia</span>
                    <span className="px-3 py-1 bg-dynamic-muted text-dynamic-secondary text-xs rounded-full">Lic. Administración</span>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <p className="text-dynamic-secondary text-sm leading-relaxed">
                    <strong className="text-dynamic-primary">Educación:</strong> Lic. en Administración de Empresas (1987) y Contador Público Nacional (1989), UBA
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <p className="text-dynamic-secondary text-sm leading-relaxed">
                    <strong className="text-dynamic-primary">Organismos Internacionales:</strong> Consultor contratado por BM, PNUD y BID
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <p className="text-dynamic-secondary text-sm leading-relaxed">
                    <strong className="text-dynamic-primary">Trayectoria:</strong> Socio de ITG Consultores, THS, ISP y Binary. Especialista en Salud, Utilities, Energía y Producción
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-2">65+</div>
          <div className="text-dynamic-secondary text-sm">Años de experiencia combinada</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-2">50+</div>
          <div className="text-dynamic-secondary text-sm">Proyectos exitosos</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-2">3</div>
          <div className="text-dynamic-secondary text-sm">Países de operación</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-2">100%</div>
          <div className="text-dynamic-secondary text-sm">Compromiso con la excelencia</div>
        </div>
      </div>
    </div>
  </section>
  )
}
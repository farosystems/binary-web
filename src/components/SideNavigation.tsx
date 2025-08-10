"use client"

import { useState, useEffect } from "react"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"

// 🎯 CONFIGURACIÓN DE NAVEGACIÓN - Fácil de modificar
const NAVIGATION_SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "productos", label: "Productos" },
  { id: "actividad", label: "Actividad" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "casos-exito-argentina", label: "Casos de Éxito" },
  { id: "equipo", label: "Equipo" },
  { id: "contacto", label: "Contacto" }
] as const

interface SideNavigationProps {
  onSectionClick?: (sectionId: string) => void
}

export default function SideNavigation({ onSectionClick }: SideNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("inicio")

  // 👀 Detectar qué sección está visible usando Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Solo considera visible cuando está en el centro
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observar todas las secciones
    NAVIGATION_SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  // 🎯 Función para hacer scroll suave a una sección
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    
    // Llamar callback opcional
    onSectionClick?.(sectionId)
  }

  return (
    <>
      {/* Navegación lateral con dots - Solo visible en desktop */}
      <nav 
        className={cn(
          STYLES.scrollSnap.dotsNavigation,
          "hidden lg:flex" // Solo mostrar en pantallas grandes
        )}
        aria-label="Navegación por secciones"
      >
        {NAVIGATION_SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleSectionClick(id)}
            className={cn(
              STYLES.scrollSnap.dot,
              activeSection === id 
                ? STYLES.scrollSnap.dotActive 
                : STYLES.scrollSnap.dotInactive
            )}
            aria-label={`Ir a sección ${label}`}
            title={label}
          >
            {/* Tooltip con el nombre de la sección */}
            <span className="sr-only">{label}</span>
          </button>
        ))}
      </nav>

      {/* Tooltip flotante para mostrar el nombre de la sección activa */}
      <div 
        className={cn(
          "fixed right-16 top-1/2 transform -translate-y-1/2 z-40",
          "bg-black/80 text-white px-3 py-1 rounded-lg text-sm",
          "opacity-0 pointer-events-none transition-opacity duration-300",
          "hidden lg:block" // Solo en desktop
        )}
        id="section-tooltip"
      >
        {NAVIGATION_SECTIONS.find(section => section.id === activeSection)?.label}
      </div>
    </>
  )
}
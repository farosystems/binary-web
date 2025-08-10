"use client"

import { useState, useEffect } from "react"
import { Globe, Zap, Leaf } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import ClientCarousel from "@/src/components/carrusel"
import Header from "@/src/components/Header"
import ScrollToTop from "@/src/components/ScrollToTop"

// Import all section components
import HeroSection from "@/src/components/sections/HeroSection"
import ServicesSection from "@/src/components/sections/ServicesSection"
import ProductsSection from "@/src/components/sections/ProductsSection"
import TechnologiesSection from "@/src/components/sections/TechnologiesSection"
import TeamSection from "@/src/components/sections/TeamSection"
import ContactSection from "@/src/components/sections/ContactSection"

export default function BinaryLandingPage() {
  const [activeSection, setActiveSection] = useState("")

  const benefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Innovación Inteligente para Empresas Locales y Globales",
      description:
        "Entendemos la problemática de las empresas nacionales y conocemos la exigencia de las empresas internacionales, lo que nos permite innovar inteligentemente los procesos y los sistemas",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Eficiencia Inteligente: Más Enfoque, Menos Costos",
      description:
        "Desarrollamos soluciones que reducen al mínimo los tiempos de trabajo no significativo, contribuyendo a que los empleados se concentren en trabajos significativos, y eliminen los costos hundidos operativos",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Soluciones Sostenibles: Hacia un Futuro Libre de Papel",
      description:
        'Cuidamos el medio ambiente, nuestras soluciones priorizan el concepto "Libre de Papel" (Paper Less)',
    },
  ]

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="bg-dynamic-primary">
      {/* Header Componentizado */}
      <Header onNavigate={handleSmoothScroll} />


      {/* Hero Section */}
      <HeroSection onSmoothScroll={handleSmoothScroll} />

      {/* Services Section */}
      <ServicesSection />

      {/* Products Section */}
      <ProductsSection />

      {/* International Activity Section */}
        <section 
          id="actividad" 
          className={cn(
            STYLES.layout.sectionFullScreen,
            "bg-dynamic-primary"
          )}
        >
          <div className={STYLES.layout.container}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dynamic-primary">
                Binary: Actividad internacional
              </h2>
              <p className="text-xl text-dynamic-secondary">
                Soluciones ecológicas, inteligentes y ahorrativas
              </p>
            </div>
            <div className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            )}>
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center group transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-dynamic-secondary border-dynamic hover:shadow-xl"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-dynamic-primary">
                      {benefit.title}
                    </h3>
                    <p className="leading-relaxed text-dynamic-secondary">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Casos de Éxito Argentina */}
        <section 
          id="casos-exito-argentina" 
          className={cn(
            STYLES.layout.sectionFullScreen,
            "bg-dynamic-secondary"
          )}
        >
          <div className={STYLES.layout.container}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-4">
                Casos de Éxito - Argentina
              </h2>
              <p className="text-xl text-dynamic-secondary">
                Nuestros clientes de confianza en el mercado argentino
              </p>
            </div>

            <ClientCarousel />

            <div className="text-center mt-8">
              <p className="max-w-3xl mx-auto leading-relaxed text-dynamic-secondary">
                Trabajamos con empresas líderes en diversos sectores: energía, salud, servicios públicos,
                industria y defensa. Cada proyecto representa nuestro compromiso con la excelencia tecnológica
                y la innovación adaptada a las necesidades específicas del mercado argentino.
              </p>
            </div>
          </div>
        </section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Footer - DINÁMICO */}
      <footer className="py-8 px-4 bg-dynamic-muted border-t border-dynamic">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/logos/binary-logo.svg" alt="Binary Logo" className="h-12 sm:h-16 md:h-20 w-auto" />
            <span className="text-lg font-bold text-dynamic-primary">BINARY ARGENTINA</span>
          </div>
          <p className="text-dynamic-muted">© 2018, Binary Intelligent Solutions Argentina</p>
        </div>
      </footer>
    </div>
  )
}
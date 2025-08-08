"use client"

import { useState, useEffect } from "react"
import { Menu, ArrowRight, Globe, Zap, Leaf, FileText, Link, Building, Smartphone, Lock, TrendingUp, Check } from "lucide-react"
import { Database, HardHat, Calendar, ShieldCheck } from "lucide-react";
import { } from "lucide-react";
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet"
import { Badge } from "@/src/components/ui/badge"
import ClientCarousel from "@/src/components/carrusel"

export default function BinaryLandingPage() {
  const [activeSection, setActiveSection] = useState("")

  const services = [
    {
      title: "Gestión Digital",
      description:
        "Plataforma para recibir, controlar, administrar, e historiar documentos digitales en legajos digitales que facilitan la gestión...",
      icon: FileText,
    },
    {
      title: "IoT - Internet de las Cosas",
      subtitle: "IoT para Equipos y Máquinas",
      description:
        "Reporte automático de desperfectos en el funcionamiento de máquinas y equipos conectados al sistema de gestión...",
      icon: Link,
    },
    {
      title: "NFC - Proximidad",
      subtitle: "Proximidad aplicada a la calidad de servicio",
      description:
        "Aplicaciones que permiten identificar personas; proveer datos vitales en momentos críticos; registrar suministros valiosos...",
      icon: Smartphone,
    },
    {
      title: "Smart City",
      subtitle: "Gestión inteligente de ciudades",
      description:
        "Aplicaciones que acercan a los ciudadanos a las administraciones de gobiernos, ciudades, municipios, organizaciones...",
      icon: Building,
    },
  ]

  const products = [
    {
      name: "B-Contracts",
      subtitle: "Gestor Inteligente de Documentación Contractual",
      description:
        "Repositorio único de documentos legales, impositivos y de gestión, exigibles entre contratistas y contratantes",
      icon: FileText,
    },
    {
      name: "B-Documents",
      subtitle: "Gestor Inteligente de Documentos Digitalizados",
      description:
        "Repositorio único de cualquier tipo de documento digital de una organización. Buscador por etiqueta electrónica de documentos digitales",
      icon: FileText,
    },
    {
      name: "B-Report",
      subtitle: "Generador instantáneo de Reportes",
      description:
        "Genera Reportes instantáneamente con fotos e ingreso de datos básicos, y templates parametrizables. Recepciona, Deriva, y efectúa Seguimiento de Reportes en línea",
      icon: FileText,
    },
    {
      name: "CIS",
      subtitle: "Credencial Inteligente de Salud",
      description:
        "Reducción de costos y tiempos en Recepción de Pacientes. Visualización inmediata, por personal Asistencial Autorizado, de Factores de Riesgo, Pre-existencias, Datos clínicos sensibles para atención en Urgencias",
      icon: FileText,
    },
    {
      name: "LEV",
      subtitle: "Libreta Electrónica de Vacunación",
      description:
        "Seguimiento al Calendario Nacional de Vacunación a lo largo de la vida. Genera censos nominales de vacunación, proporciona información a nivel municipal, provincial y nacional con datos que se capturan una sola vez",
      icon: FileText,
    },
    {
      name: "SIRHBIAP",
      subtitle: "Sistema Integrado de Recursos Humanos + Business Intelligence para Administración Pública",
      description:
        "Consolida y explota la información de los liquidadores de haberes locales para presupuesto de gastos en personal, simulación salarial, detección de empleo múltiple, análisis salarial y ocupacional, y estadísticas salariales y ocupacionales",
      icon: FileText,
    },
  ]

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

  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [isProductCarouselPaused, setIsProductCarouselPaused] = useState(false)

  useEffect(() => {
    if (!isProductCarouselPaused) {
      const interval = setInterval(() => {
        setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isProductCarouselPaused, products.length])

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

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = [...products, ...products]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="absolute top-0 w-full z-40 bg-transparent">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center ml-2 md:ml-8">
              <img src="/logos/binary-logo.png" alt="Binary Logo" className="h-24 sm:h-32 md:h-40 w-auto" />
            </div>

            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              <button
                onClick={() => handleSmoothScroll("inicio")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Inicio
              </button>
              <button
                onClick={() => handleSmoothScroll("servicios")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Servicios
              </button>
              <button
                onClick={() => handleSmoothScroll("productos")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Productos
              </button>
              <button
                onClick={() => handleSmoothScroll("actividad")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Actividad
              </button>
              <button
                onClick={() => handleSmoothScroll("tecnologias")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Tecnologías
              </button>
              <button
                onClick={() => handleSmoothScroll("consultoria")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Consultoria
              </button>
              <button
                onClick={() => handleSmoothScroll("industria")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Industria 4.0
              </button>

                            <button
                  onClick={() => handleSmoothScroll("casos-exito-argentina")}
                  className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
                >
                  Casos Argentina
                </button>

              <button
                onClick={() => handleSmoothScroll("b-contracts")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                B-Contracts
              </button>
              <button
                onClick={() => handleSmoothScroll("infraestructura-rural")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Infraestructura Rural
              </button>

              <button
                onClick={() => handleSmoothScroll("casos-exito")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Casos de exito
              </button>

              <button
                onClick={() => handleSmoothScroll("contacto")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
              >
                Contacto
              </button>
            </nav>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black text-white">
                <nav className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => handleSmoothScroll("inicio")}
                    className="text-lg font-medium hover:text-gray-300 text-left cursor-pointer"
                  >
                    Inicio
                  </button>
                  <button
                    onClick={() => handleSmoothScroll("servicios")}
                    className="text-lg font-medium hover:text-gray-300 text-left cursor-pointer"
                  >
                    Servicios
                  </button>
                  <button
                    onClick={() => handleSmoothScroll("productos")}
                    className="text-lg font-medium hover:text-gray-300 text-left cursor-pointer"
                  >
                    Productos
                  </button>
                  <button
                    onClick={() => handleSmoothScroll("actividad")}
                    className="text-lg font-medium hover:text-gray-300 text-left cursor-pointer"
                  >
                    Actividad
                  </button>
                  <button
                    onClick={() => handleSmoothScroll("tecnologias")}
                    className="text-lg font-medium hover:text-gray-300 text-left cursor-pointer"
                  >
                    Tecnologías
                  </button>
                                  <button
                  onClick={() => handleSmoothScroll("equipo")}
                  className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer text-sm xl:text-base"
                >
                  Equipo
                </button>
                  <button
                    onClick={() => handleSmoothScroll("contacto")}
                    className="text-lg font-medium hover:text-gray-300 text-left cursor-pointer"
                  >
                    Contacto
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="px-4 relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/images/original-cityscape-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto py-8 sm:py-12 pt-12 sm:pt-16">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl px-2">
              Innovamos y transformamos tu negocio con{" "}
              <span className="text-white">el conocimiento y la estrategia adecuada</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-lg px-4">
              Soluciones ecológicas, inteligentes y ahorrativas para empresas locales y globales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-900 text-white px-6 sm:px-8 py-3 shadow-2xl border border-gray-600 text-sm sm:text-base"
                onClick={() => handleSmoothScroll("productos")}
              >
                Conocer Productos
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 backdrop-blur-sm bg-white/10 text-sm sm:text-base"
                onClick={() => handleSmoothScroll("contacto")}
              >
                Contactar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="py-16 px-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
        }}
      >
        {/* Network Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#000000" />
                <circle cx="80" cy="40" r="2" fill="#000000" />
                <circle cx="50" cy="70" r="2" fill="#000000" />
                <circle cx="10" cy="90" r="2" fill="#000000" />
                <circle cx="90" cy="10" r="2" fill="#000000" />
                <line x1="20" y1="20" x2="80" y2="40" stroke="#000000" strokeWidth="1" />
                <line x1="80" y1="40" x2="50" y2="70" stroke="#000000" strokeWidth="1" />
                <line x1="50" y1="70" x2="10" y2="90" stroke="#000000" strokeWidth="1" />
                <line x1="20" y1="20" x2="90" y2="10" stroke="#000000" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos especializamos en:</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold underline decoration-2 underline-offset-4 decoration-gray-400">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    {service.subtitle && (
                      <h4 className="text-lg font-semibold mb-3 text-gray-300">{service.subtitle}</h4>
                    )}
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    <button className="text-gray-400 hover:text-white font-medium transition-colors">ver más</button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Suite Section - Runway Style */}
      <section id="productos" className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Suite de productos</h2>
          </div>

          {/* Continuous Scrolling Runway */}
          <div className="relative">
            <style jsx>{`
              @keyframes scroll-right {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .scroll-runway {
                animation: scroll-right 15s linear infinite;
              }
              .scroll-runway:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex space-x-4 sm:space-x-6 scroll-runway">
              {duplicatedProducts.map((product, index) => {
                const IconComponent = product.icon
                return (
                  <div key={index} className="flex-shrink-0 w-72 sm:w-80">
                    <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                          <Badge variant="secondary" className="mb-2 sm:mb-3 bg-gray-100 text-gray-700 text-xs">
                            {product.subtitle}
                          </Badge>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                            {product.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* International Activity Section */}
      <section id="actividad" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Binary: Actividad internacional</h2>
            <p className="text-xl text-gray-600">Soluciones ecológicas, inteligentes y ahorrativas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultoria */}
      <section id="consultoria" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Consultoria de Software</h2>
            <p className="text-xl text-gray-600">Desarrollamos soluciones a medida para optimizar tu gestión</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1: APIs */}
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 9h16" />
                      <path d="M4 15h16" />
                      <path d="M10 3 8 21" />
                      <path d="M16 3 14 21" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Desarrollo de APIs</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Integramos componentes mediante APIs:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Aplicaciones existentes entre sí</li>
                  <li>Aplicaciones existentes con nuevas aplicaciones</li>
                  <li>Aplicaciones existentes con nuevos módulos</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2: Proceso */}
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                      <path d="M12 4v4l3 3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Proceso de Creación</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Metodología para lanzar soluciones:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Estrategia</li>
                  <li>Planificación</li>
                  <li>Diseño</li>
                  <li>Desarrollo</li>
                  <li>Prueba</li>
                  <li>Lanzamiento</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industria 4.0 Section */}
      <section id="industria" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Industria 4.0</h2>
            <p className="text-xl text-gray-600">Sistemas de Proximidad / NFC / Controles de Acceso</p>
          </div>

          {/* Intro Text */}
          <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <p className="text-gray-600 leading-relaxed">
              En el sector de Industria y Producción, la eficiencia y la seguridad son pilares fundamentales.
              Nuestra consultora de IT potencia su operación con soluciones tecnológicas de vanguardia.
              Implementamos tecnología NFC para una trazabilidad impecable de sus productos y activos,
              optimizando la gestión de inventario y garantizando la autenticidad.
            </p>
          </div>

          {/* Tecnologías */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Tecnología NFC",
                description: "Trazabilidad impecable de productos y activos con optimización de inventario",
                icon: <Smartphone className="h-6 w-6" />,
              },
              {
                title: "Automatización",
                description: "Integración de procesos clave para reducir costes y minimizar errores",
                icon: <Zap className="h-6 w-6" />,
              },
              {
                title: "Controles de Acceso",
                description: "Sistemas inteligentes y automatizados para proteger instalaciones y personal",
                icon: <Lock className="h-6 w-6" />,
              },
              {
                title: "Productividad",
                description: "Elevamos la eficiencia general de su operación industrial",
                icon: <TrendingUp className="h-6 w-6" />,
              },
            ].map((tech, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </Card>
            ))}
          </div>

          {/* Beneficios */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Beneficios Clave</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Trazabilidad completa de productos y activos",
                "Reducción significativa de costos operativos",
                "Minimización de errores humanos",
                "Seguridad avanzada de instalaciones",
                "Optimización de gestión de inventario",
                "Garantía de autenticidad de productos",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B-Contracts Section */}
      <section id="b-contracts" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">B-Contracts</h2>
            <p className="text-xl text-gray-600">Gestión Documental Digital</p>
          </div>

          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <p className="text-gray-600 leading-relaxed">
              Esta solución permite gestionar la documentación de una organización en forma totalmente digital,
              contribuyendo al cuidado del medio ambiente bajo el concepto de <strong>"paper less"</strong>.
            </p>
          </div>

          {/* Impacto Ambiental */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Cero Papel",
                description: "Eliminación completa de documentación impresa",
                icon: <FileText className="h-6 w-6" />,
              },
              {
                title: "Sostenibilidad",
                description: "Contribución activa al cuidado del medio ambiente",
                icon: <Leaf className="h-6 w-6" />,
              },
              {
                title: "Gestión Digital",
                description: "Optimización total de procesos documentales",
                icon: <Database className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Documentación Eliminada */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Documentación Digitalizada</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Legajos de personal",
                "Comunicaciones administrativas",
                "Emails corporativos",
                "Planillas y formularios",
                "Contratos y certificados",
                "Documentos legales",
                "Comprobantes fiscales",
                "Pólizas de seguros",
              ].map((doc, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infraestructura Rural Section */}
      <section id="infraestructura-rural" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Infraestructura Rural</h2>
            <p className="text-xl text-gray-600">Transitabilidad de Caminos de Tierra</p>
          </div>

          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center mb-12 px-4">
            <p className="text-gray-600 leading-relaxed">
              Transformamos los desafíos del terreno en caminos rurales duraderos y accesibles con
              nuestro producto <strong>no contaminante</strong> que petrifica superficies de tierra.
            </p>
          </div>

          {/* Tecnología */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Petrificación Avanzada",
                description: "Transforma caminos de tierra en superficies duraderas",
                icon: <HardHat className="h-6 w-6" />,
              },
              {
                title: "No Contaminante",
                description: "Producto ecológico que respeta el medio ambiente",
                icon: <Leaf className="h-6 w-6" />,
              },
              {
                title: "Larga Duración",
                description: "Estabilidad garantizada (8-10 años sin mantenimiento)",
                icon: <Calendar className="h-6 w-6" />,
              },
              {
                title: "Control Total",
                description: "Elimina polvo, barro y baches permanentemente",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
            ].map((tech, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </Card>
            ))}
          </div>

          {/* Video Demo */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Prueba de Campo Realizada</h3>
            <p className="text-gray-600 mb-6">
              Resultado en una calle de 100 metros (9 de Julio, Provincia de Buenos Aires).
            </p>
            <div className="aspect-w-16 aspect-h-9 bg-black/10 rounded-lg overflow-hidden">
              {/* Reemplaza con tu componente de video (YouTube, Vimeo, etc.) */}
              <div className="w-full h-64 flex items-center justify-center bg-gray-300 text-gray-500">
                [Video Embed - Click para reproducir]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito Internacionales */}
      <section id="casos-exito" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Casos de Éxito Internacionales</h2>
            <p className="text-xl text-gray-600">Proyectos destacados en múltiples países</p>
          </div>

          {/* Grid de Casos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Caso 1: RMI Solutions */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 mr-4 border border-gray-200">
                    <img
                      src="/logos/rmi.png"  // Reemplaza con la ruta correcta
                      alt="RMI Logo"
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">RMI Solutions</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Orlando, USA</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Tercerización del Gerenciamiento de Tecnología e Informática.
                </p>
              </CardContent>
            </Card>

            {/* Caso 2: FEMSA */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 mr-4 border border-gray-200">
                    <img
                      src="/logos/femsa.png"  // Reemplaza con la ruta correcta
                      alt="FEMSA Logo"
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">FEMSA</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">San Pablo, Brasil</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Implementación del Sistema de Control de Acceso.
                </p>
              </CardContent>
            </Card>

            {/* Caso 3: Solistica */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 mr-4 border border-gray-200">
                    <img
                      src="/logos/solistica.png"  // Reemplaza con la ruta correcta
                      alt="Solistica Logo"
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Solistica</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">San Pablo, Brasil</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Soluciones Open Source para Seguridad Patrimonial.
                </p>
              </CardContent>
            </Card>

            {/* Caso 4: CMS Energy */}
            <Card className="group hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 mr-4 border border-gray-200">
                    <img
                      src="/logos/cms.png"  // Reemplaza con la ruta correcta
                      alt="CMS Energy Logo"
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">CMS Energy</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Isla Margarita, Venezuela</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Sistema de Facturación Oracle para energía.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Nota adicional (opcional) */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
            >
              Ver todos los casos de éxito
            </Button>
          </div>
        </div>
      </section>

        {/* Technologies Section */}
        <section id="tecnologias" className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200">      
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tecnologías que usamos</h2>
              <p className="text-xl text-gray-600">Arquitectura Web para aplicaciones basadas en la nube u "on premise"</p>
            </div>

            {/* Open Source Technologies */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">Open Source</h3>
                <p className="text-gray-600">Desarrollo y Bases de Datos</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                {/* Java */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    <img src="/logos/java-logo.png" alt="Java Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">Java</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Enterprise Development</p>
                </div>

                {/* React */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    <img src="/logos/react.png" alt="React Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">React</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Frontend Framework</p>
                </div>

                {/* Go */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    <img src="/logos/go.png" alt="Go Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">Go</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Backend Development</p>
                </div>

                {/* Python */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    <img src="/logos/python.png" alt="Python Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">Python</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Data & Backend</p>
                </div>

                {/* MySQL */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    <img src="/logos/mysql-logo.webp" alt="MySQL Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">MySQL</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Database Management</p>
                </div>

                {/* MariaDB */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    <img src="/logos/mariadb.png" alt="MariaDB Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">MariaDB</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Database Management</p>
                </div>

                {/* JavaFX */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    <img src="/logos/javafx-logo.png" alt="JavaFX Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">JavaFX</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Desktop Applications</p>
                </div>

                {/* Apache Tomcat */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    <img src="/logos/tomcat-logo.png" alt="Apache Tomcat Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">Apache Tomcat</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Web Server</p>
                </div>
              </div>
            </div>

            {/* Proprietary Technologies */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">Propietarias</h3>
                <p className="text-gray-600">Oracle Database (versión 19c) y Desarrollo (versión 12.2)</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                {/* Oracle Database */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300">
                    <img src="/logos/oracle.png" alt="Oracle Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">Oracle Database</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Versión 19c</p>
                </div>

                {/* Oracle Forms */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-red-600 to-red-800 rounded-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">Oracle Forms</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Versión 12.2</p>
                </div>

                {/* PL/SQL */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">PL/SQL</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Stored Procedures</p>
                </div>

                {/* SQL*PLUS */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 
  bg-gradient-to-br from-green-600 to-green-800 rounded-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">SQL*PLUS</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Query Tool</p>
                </div>

                {/* SQL*LOADER */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 
  bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">SQL*LOADER</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Data Loading</p>
                </div>

                {/* PRO*C */}
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 3a1 1 0 000 2v.25c0 .414.336.75.75.75s.75-.336.75-.75V5h5v.25c0 .414.336.75.75.75s.75-.336.75-.75V5a1 1 0 100-2H8zM6 7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V7z"/>
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1">PRO*C</h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center">Embedded SQL</p>
                </div>
              </div>
            </div>

            {/* Platform Note */}
            <div className="text-center mt-12 bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Plataforma</h4>
              <p className="text-gray-600">Linux - Arquitectura Web para aplicaciones basadas en la nube u "on premise"</p>
            </div>
          </div>
        </section>

       {/* Casos de Éxito Argentina */}
        <section id="casos-exito-argentina" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Casos de Éxito - Argentina</h2>
              <p className="text-xl text-gray-600">Nuestros clientes de confianza en el mercado argentino</p>
            </div>

            {/* Usar el componente ClientCarousel */}
            <ClientCarousel />

            {/* Texto adicional */}
            <div className="text-center mt-8">
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Trabajamos con empresas líderes en diversos sectores: energía, salud, servicios públicos,
                industria y defensa. Cada proyecto representa nuestro compromiso con la excelencia tecnológica
                y la innovación adaptada a las necesidades específicas del mercado argentino.
              </p>
            </div>
          </div>
        </section>

                {/* Nuestro Equipo - Premium Section */}
        <section id="equipo" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,        
              backgroundSize: '60px 60px, 40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Nuestro Equipo
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Líderes con más de 30 años de experiencia transformando empresas a través de la tecnología
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

              {/* Roberto Schettini */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                  {/* Photo Section */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                    <div className="relative shrink-0">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                        {/* Placeholder - reemplazar con la foto real */}
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
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">Roberto Schettini</h3>
                      <p className="text-blue-400 font-semibold mb-3">Socio Fundador & CTO</p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">30+ años experiencia</span>
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">Lic. en Sistemas</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Educación:</strong> Licenciado en Sistemas, Universidad C.A.E.C.E, Buenos Aires (1989)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Especialización:</strong> Salud, Energía, Producción, Servicios Masivos, Integración de Negocios
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Experiencia destacada:</strong> Gerente de Sistemas, Presidente de Correo Privado, Gerente de Operaciones en Hospital Británico, Fleni, Sanatorio Finochietto e Instituto Fleming
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jorge Boccanera */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:-translate-y-2">
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
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">Jorge A. Boccanera</h3>
                      <p className="text-green-400 font-semibold mb-3">Socio Fundador & CEO</p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">35+ años experiencia</span>
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">Lic. Administración</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Educación:</strong> Lic. en Administración de Empresas (1987) y Contador Público Nacional (1989), UBA
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Organismos Internacionales:</strong> Consultor contratado por BM, PNUD y BID
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-white">Trayectoria:</strong> Socio de ITG Consultores, THS, ISP y Binary. Especialista en Salud, Utilities, Energía y Producción
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">65+</div>
              <div className="text-gray-400 text-sm">Años de experiencia combinada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Proyectos exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3</div>
              <div className="text-gray-400 text-sm">Países de operación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Compromiso con la excelencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CONTACTO</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div className="group">
              <h3 className="text-xl font-bold mb-2">Buenos Aires, Argentina</h3>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity">hello@bisbinary.com</p>
            </div>
            <div className="group">
              <h3 className="text-xl font-bold mb-2">San Pablo, Brasil</h3>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity">oguevara@bisbinary.com</p>
            </div>
            <div className="group">
              <h3 className="text-xl font-bold mb-2">Orlando, Florida</h3>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity">rschettini@bisbinary.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/logos/binary-logo.png" alt="Binary Logo" className="h-12 sm:h-16 md:h-20 w-auto" />
            <span className="text-lg font-bold">BINARY ARGENTINA</span>
          </div>
          <p className="text-gray-400">© 2018, Binary Intelligent Solutions Argentina</p>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet"
import ThemeToggle from "@/src/components/ThemeToggle"

const navigationItems = [
  { id: "inicio", label: "Inicio" },
  { 
    id: "soluciones", 
    label: "Soluciones",
    dropdown: [
      { id: "servicios", label: "Servicios" },
      { id: "productos", label: "Productos" }
    ]
  },
  { id: "tecnologias", label: "Tecnologías" },
  { 
    id: "nosotros", 
    label: "Nosotros",
    dropdown: [
      { id: "equipo", label: "Equipo" },
      { id: "actividad", label: "Actividad" },
      { id: "casos-exito-argentina", label: "Casos de Éxito" }
    ]
  },
  { id: "contacto", label: "Contacto" },
]

interface HeaderProps {
  onNavigate: (targetId: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center ml-2 md:ml-8">
            <div className="text-white text-lg md:text-xl font-bold leading-tight">
              <span className="text-yellow-400">BINARY</span>
              <br />
              <span className="text-sm md:text-base font-medium text-gray-300">ARGENTINA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="text-white hover:text-yellow-400 transition-colors font-medium flex items-center gap-1">
                      {item.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-1 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-40">
                      {item.dropdown.map((dropItem) => (
                        <button
                          key={dropItem.id}
                          onClick={() => onNavigate(dropItem.id)}
                          className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 hover:bg-white/10 first:rounded-t-lg last:rounded-b-lg transition-colors"
                        >
                          {dropItem.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-white hover:text-yellow-400 transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black text-white">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className="text-lg font-medium hover:text-yellow-400 text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
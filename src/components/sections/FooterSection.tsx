"use client"

import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { motion } from "framer-motion"
import { Mail, MapPin, Globe, ExternalLink, Heart } from "lucide-react"

export default function FooterSection() {
  const locations = [
    {
      country: "Argentina",
      city: "Buenos Aires",
      email: "hello@bisbinary.com",
      flag: "🇦🇷"
    },
    {
      country: "Brasil", 
      city: "San Pablo",
      email: "oguevara@bisbinary.com",
      flag: "🇧🇷"
    },
    {
      country: "Estados Unidos",
      city: "Orlando, Florida",
      email: "rschettini@bisbinary.com", 
      flag: "🇺🇸"
    }
  ]

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Productos", href: "#productos" },
    { name: "Tecnologías", href: "#tecnologias" },
    { name: "Equipo", href: "#equipo" },
    { name: "Contacto", href: "#contacto" }
  ]

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId.replace('#', ''))
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <footer className={cn("bg-dynamic-primary border-t border-dynamic", "relative")}>
      <div className={cn(STYLES.layout.container, "py-12")}>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <div className="text-dynamic-primary text-lg font-bold leading-tight">
                <span className="text-yellow-400">BINARY</span>
                <br />
                <span className="text-sm font-medium text-dynamic-secondary">ARGENTINA</span>
              </div>
            </div>
            <p className="text-dynamic-secondary text-sm leading-relaxed mb-4">
              Más de 30 años transformando empresas a través de soluciones tecnológicas inteligentes, 
              ecológicas y ahorrativas.
            </p>
            <div className="flex items-center gap-2 text-xs text-dynamic-secondary">
              <Globe className="w-3 h-3" />
              <span>Operando desde 1987</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-dynamic-primary mb-4">Navegación</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSmoothScroll(link.href)}
                    className="text-dynamic-secondary hover:text-dynamic-primary transition-colors text-sm block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-dynamic-primary mb-4">Nuestras Oficinas</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {locations.map((location, index) => (
                <motion.div 
                  key={index}
                  className="bg-dynamic-secondary rounded-lg p-4 border border-dynamic"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{location.flag}</span>
                    <h5 className="font-semibold text-dynamic-primary text-sm">{location.country}</h5>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-3 h-3 text-dynamic-secondary" />
                    <span className="text-xs text-dynamic-secondary">{location.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-dynamic-secondary" />
                    <a 
                      href={`mailto:${location.email}`}
                      className="text-xs text-dynamic-secondary hover:text-dynamic-primary transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-dynamic pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-dynamic-secondary text-sm">
                © 2018-{new Date().getFullYear()} Binary Intelligent Solutions Argentina. Todos los derechos reservados.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <button className="text-dynamic-secondary hover:text-dynamic-primary transition-colors text-sm">
                Política de Privacidad
              </button>
              <button className="text-dynamic-secondary hover:text-dynamic-primary transition-colors text-sm">
                Términos de Servicio
              </button>
            </div>
          </div>

          {/* Made by attribution */}
          <motion.div 
            className="text-center mt-6 pt-6 border-t border-dynamic"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-dynamic-secondary text-xs flex items-center justify-center gap-2 flex-wrap">
              <span>Desarrollado con</span>
              
              {/* Animated heart */}
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              </motion.span>
              
              <span>por</span>
              
              {/* Company name with gradient effect */}
              <motion.span
                className="font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Faro Sistemas
              </motion.span>
              
              {/* Subtle external link icon */}
              <motion.span
                animate={{ 
                  rotate: [0, 15, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
              >
                <ExternalLink className="w-3 h-3 text-dynamic-secondary" />
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
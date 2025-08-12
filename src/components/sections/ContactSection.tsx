"use client"

import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactSection() {

  return (
    <section 
      id="contacto" 
      className={cn(
        STYLES.layout.sectionFullScreen,
        "bg-dynamic-primary"
      )}
    >
      {/* Contenedor principal */}
      <div className={STYLES.layout.container}>
        {/* Header con animaciones */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contáctanos
          </motion.h2>
          <motion.p 
            className="text-xl text-dynamic-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Estamos aquí para ayudarte a transformar tu empresa
          </motion.p>
        </motion.div>

        {/* Información de contacto */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Información principal */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-dynamic-primary mb-4">
                Información de contacto
              </h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dynamic-secondary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-dynamic-primary" />
                </div>
                <div>
                  <p className="font-medium text-dynamic-primary">Email</p>
                  <a 
                    href="mailto:hello@bisbinary.com"
                    className="text-dynamic-secondary hover:text-dynamic-primary transition-colors"
                  >
                    hello@bisbinary.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dynamic-secondary rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-dynamic-primary" />
                </div>
                <div>
                  <p className="font-medium text-dynamic-primary">Ubicaciones</p>
                  <p className="text-dynamic-secondary">Argentina • Brasil • Estados Unidos</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dynamic-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-dynamic-primary" />
                </div>
                <div>
                  <p className="font-medium text-dynamic-primary">Respuesta</p>
                  <p className="text-dynamic-secondary">En menos de 24 horas</p>
                </div>
              </div>
            </motion.div>

            {/* Formulario de contacto */}
            <motion.div
              className="bg-dynamic-secondary rounded-xl p-6 border border-dynamic"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-dynamic-primary mb-6">
                Envíanos un mensaje
              </h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dynamic-primary mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-dynamic-muted border border-dynamic rounded-lg focus:outline-none focus:border-dynamic-primary transition-colors text-dynamic-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dynamic-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-dynamic-muted border border-dynamic rounded-lg focus:outline-none focus:border-dynamic-primary transition-colors text-dynamic-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dynamic-primary mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dynamic-muted border border-dynamic rounded-lg focus:outline-none focus:border-dynamic-primary transition-colors text-dynamic-primary"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dynamic-primary mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-dynamic-muted border border-dynamic rounded-lg focus:outline-none focus:border-dynamic-primary transition-colors text-dynamic-primary resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-dynamic-primary hover:bg-dynamic-secondary text-dynamic-secondary hover:text-dynamic-primary border border-dynamic-primary py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Globe, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const contacts = [
    {
      location: "Buenos Aires, Argentina",
      email: "hello@bisbinary.com",
      icon: Globe,
      gradient: "from-blue-500 to-blue-600",
      flag: "🇦🇷"
    },
    {
      location: "San Pablo, Brasil", 
      email: "oguevara@bisbinary.com",
      icon: Globe,
      gradient: "from-green-500 to-green-600",
      flag: "🇧🇷"
    },
    {
      location: "Orlando, Florida",
      email: "rschettini@bisbinary.com", 
      icon: Globe,
      gradient: "from-purple-500 to-purple-600",
      flag: "🇺🇸"
    }
  ]

  return (
    <section 
      id="contacto" 
      className={cn(
        STYLES.layout.section,
        "bg-dynamic-secondary relative overflow-hidden"
      )}
    >
      {/* Patrón de fondo animado */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-dynamic-primary rounded-full"
            style={{
              left: `${5 + (i % 4) * 25}%`,
              top: `${10 + Math.floor(i / 4) * 30}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Contenedor principal */}
      <div className={cn(STYLES.layout.container, "relative z-10")}>
        {/* Título de la sección IRRESISTIBLE */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-3 mb-6"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MessageCircle className="w-6 h-6 text-green-500" />
            </motion.div>
            <span className="text-dynamic-primary font-semibold text-lg">¡Hablemos!</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-dynamic-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            CONTACTA CON NOSOTROS
          </motion.h2>

          <motion.p
            className="text-xl text-dynamic-secondary max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Transformemos tu empresa juntos. Estamos en 3 países listos para ayudarte.
          </motion.p>
        </motion.div>

        {/* Grid de contactos ÉPICO */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-dynamic-muted border border-dynamic hover:border-blue-500/30 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center overflow-hidden">
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  {/* Bandera animada */}
                  <motion.div 
                    className="text-6xl mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {contact.flag}
                  </motion.div>

                  {/* Icono de ubicación */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center mb-4 shadow-lg relative z-10`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Ubicación */}
                  <h3 className="text-xl font-bold mb-3 text-dynamic-primary group-hover:text-blue-500 transition-colors duration-300">
                    {contact.location}
                  </h3>

                  {/* Email con animación */}
                  <motion.div 
                    className="flex items-center gap-2 text-dynamic-secondary group-hover:text-dynamic-primary transition-colors duration-300 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="font-medium">{contact.email}</span>
                  </motion.div>

                  {/* Botón de contacto ÉPICO */}
                  <motion.button
                    className={`mt-auto bg-gradient-to-r ${contact.gradient} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden group/btn`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(`mailto:${contact.email}`, '_blank')}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Escribir ahora
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Final IRRESISTIBLE */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="inline-block p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-dynamic-primary mb-4"
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🚀 ¿Listo para transformar tu empresa?
            </motion.h3>
            <p className="text-dynamic-secondary text-lg max-w-2xl mx-auto">
              No esperes más. Nuestros expertos están listos para ayudarte a innovar y crecer.
            </p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-6"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["💡 Consulta gratuita", "⚡ Respuesta en 24hs", "🌟 30+ años experiencia"].map((benefit, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="px-4 py-2 bg-dynamic-primary/5 border border-dynamic-soft rounded-full text-sm font-medium text-dynamic-primary"
                >
                  {benefit}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
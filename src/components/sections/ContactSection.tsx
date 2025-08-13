"use client"

import { useState } from "react"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import { textReveal, fadeInUp, fadeInLeft, fadeInRight, getViewport } from "@/src/lib/animations"
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: process.env.NEXT_PUBLIC_TO_EMAIL
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Auto-hide status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

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
        {/* Header con animaciones mejoradas */}
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
          whileInView={fadeInUp.animate}
          viewport={getViewport()}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-dynamic-primary mb-4"
            {...textReveal}
            whileInView={textReveal.animate}
            viewport={getViewport()}
            transition={{ ...textReveal.transition, delay: 0.2 }}
          >
            Contáctanos
          </motion.h2>
          <motion.p 
            className="text-xl text-dynamic-secondary"
            {...fadeInUp}
            whileInView={fadeInUp.animate}
            viewport={getViewport()}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            Estamos aquí para ayudarte a transformar tu empresa
          </motion.p>
        </motion.div>

        {/* Información de contacto mejorada */}
        <motion.div 
          className="max-w-4xl mx-auto"
          {...fadeInUp}
          whileInView={fadeInUp.animate}
          viewport={getViewport()}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Información principal */}
            <motion.div 
              className="space-y-6"
              {...fadeInLeft}
              whileInView={fadeInLeft.animate}
              viewport={getViewport()}
              transition={{ ...fadeInLeft.transition, delay: 0.5 }}
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
              {...fadeInRight}
              whileInView={fadeInRight.animate}
              viewport={getViewport()}
              transition={{ ...fadeInRight.transition, delay: 0.7 }}
            >
              <h3 className="text-xl font-bold text-dynamic-primary mb-6">
                Envíanos un mensaje
              </h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dynamic-primary mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
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
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
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
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dynamic-muted border border-dynamic rounded-lg focus:outline-none focus:border-dynamic-primary transition-colors text-dynamic-primary resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2 text-green-800"
                  >
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje enviado correctamente! Te responderemos pronto.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 border border-red-300 rounded-lg text-red-800"
                  >
                    Error al enviar el mensaje. Por favor, intenta de nuevo.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2",
                    isSubmitting
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-dynamic-primary hover:bg-dynamic-secondary text-dynamic-secondary hover:text-dynamic-primary border border-dynamic-primary"
                  )}
                  whileHover={isSubmitting ? {} : { y: -2 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
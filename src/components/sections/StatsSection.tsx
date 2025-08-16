"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { motion } from "framer-motion"
import { staggerContainer, scaleIn, getViewport } from "@/src/lib/animations"

const stats = [
  {
    number: 65,
    prefix: "+",
    suffix: "",
    label: "Años de experiencia combinada"
  },
  {
    number: 50,
    prefix: "+",
    suffix: "", 
    label: "Proyectos exitosos"
  },
  {
    number: 3,
    prefix: "",
    suffix: "",
    label: "Países de operación"
  },
  {
    number: 100,
    prefix: "",
    suffix: "%",
    label: "Compromiso con la excelencia"
  }
]

// Componente contador animado
function AnimatedCounter({ number, prefix, suffix }: { number: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000 // 2 segundos
          const steps = 60
          const increment = number / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= number) {
              setCount(number)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [number, hasAnimated])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section
      id="estadisticas"
      className="py-20 md:py-28 lg:py-32 bg-dynamic-primary"
    >
      <div className={STYLES.layout.container}>
        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={getViewport()}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={scaleIn}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-dynamic-primary mb-3">
                <AnimatedCounter number={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-dynamic-secondary text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
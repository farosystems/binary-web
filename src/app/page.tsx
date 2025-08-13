"use client"

import { useState, useEffect } from "react"
import { Globe, Zap, Leaf } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { cn } from "@/src/lib/utils"
import { STYLES } from "@/src/lib/styles"
import { BRANDING } from "@/src/lib/branding"
import Header from "@/src/components/Header"
import ScrollToTop from "@/src/components/ScrollToTop"
import { motion } from "framer-motion"
import { textReveal, fadeInUp, staggerContainer, staggerItem, getViewport } from "@/src/lib/animations"

// Import all section components
import HeroSection from "@/src/components/sections/HeroSection"
import ServicesSection from "@/src/components/sections/ServicesSection"
import ProductsSection from "@/src/components/sections/ProductsSection"
import TechnologiesSection from "@/src/components/sections/TechnologiesSection"
import SuccessStoriesSection from "@/src/components/sections/SuccessStoriesSection"
import EnvironmentalSection from "@/src/components/sections/EnvironmentalSection"
import TeamSection from "@/src/components/sections/TeamSection"
import ContactSection from "@/src/components/sections/ContactSection"
import FooterSection from "@/src/components/sections/FooterSection"

export default function BinaryLandingPage() {
  const [activeSection, setActiveSection] = useState("")

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

      {/* Environmental Section */}
      <EnvironmentalSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
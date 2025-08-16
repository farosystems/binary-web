// Animations library with best practices for scroll reveal
// Based on UX/UI research 2024

export const ANIMATION_CONFIG = {
  // Viewport settings optimized for performance
  viewport: {
    once: true, // IMPORTANTE: Solo se ejecuta una vez
    margin: "-80px", // Trigger earlier for smoother experience
    amount: 0.2 // Trigger when 20% is visible
  },
  
  // Durations following UX best practices
  durations: {
    fast: 0.4,
    normal: 0.6,
    slow: 0.8,
    very_slow: 1.0
  },
  
  // Easing curves for natural movement
  easing: {
    smooth: [0.25, 0.46, 0.45, 0.94] as const,
    bounce: [0.68, -0.55, 0.265, 1.55] as const,
    swift: [0.4, 0, 0.2, 1] as const
  }
}

// Enhanced entrance animations
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 60, // More dramatic movement
    scale: 0.95 // Subtle scale for depth
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1 
  },
  transition: { 
    duration: ANIMATION_CONFIG.durations.normal,
    ease: ANIMATION_CONFIG.easing.smooth 
  }
}

export const fadeInDown = {
  initial: { 
    opacity: 0, 
    y: -50,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1 
  },
  transition: { 
    duration: ANIMATION_CONFIG.durations.normal,
    ease: ANIMATION_CONFIG.easing.smooth 
  }
}

export const fadeInLeft = {
  initial: { 
    opacity: 0, 
    x: -60,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    x: 0, 
    scale: 1 
  },
  transition: { 
    duration: ANIMATION_CONFIG.durations.normal,
    ease: ANIMATION_CONFIG.easing.smooth 
  }
}

export const fadeInRight = {
  initial: { 
    opacity: 0, 
    x: 60,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    x: 0, 
    scale: 1 
  },
  transition: { 
    duration: ANIMATION_CONFIG.durations.normal,
    ease: ANIMATION_CONFIG.easing.smooth 
  }
}

export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    blur: "4px"
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    blur: "0px"
  },
  transition: { 
    duration: ANIMATION_CONFIG.durations.slow,
    ease: ANIMATION_CONFIG.easing.bounce 
  }
}

// Staggered animations for groups
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Faster stagger for better UX
      delayChildren: 0.1
    }
  }
}

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: ANIMATION_CONFIG.durations.normal,
      ease: ANIMATION_CONFIG.easing.smooth
    }
  }
}

// Text reveal animations
export const textReveal = {
  initial: { 
    opacity: 0, 
    y: 30,
    skewY: 3 // Subtle skew for dynamic effect
  },
  animate: { 
    opacity: 1, 
    y: 0,
    skewY: 0
  },
  transition: { 
    duration: ANIMATION_CONFIG.durations.slow,
    ease: ANIMATION_CONFIG.easing.swift 
  }
}

// Hero section special animations
export const heroTitle = {
  initial: { 
    opacity: 0, 
    y: 80,
    scale: 0.9,
    blur: "6px"
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    blur: "0px"
  },
  transition: { 
    duration: ANIMATION_CONFIG.durations.very_slow,
    ease: ANIMATION_CONFIG.easing.smooth,
    delay: 0.2
  }
}

// Card animations with hover enhancement
export const cardReveal = {
  initial: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
    rotateX: 15 // 3D tilt effect
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0
  },
  transition: { 
    duration: ANIMATION_CONFIG.durations.slow,
    ease: ANIMATION_CONFIG.easing.smooth
  }
}

// Utility function for consistent viewport settings
export const getViewport = (customMargin?: string) => ({
  ...ANIMATION_CONFIG.viewport,
  ...(customMargin && { margin: customMargin })
})
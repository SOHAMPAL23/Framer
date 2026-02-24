// =====================
// FRAMER MOTION VARIANTS
// =====================

// Spring physics config
export const springConfig = {
    type: 'spring',
    stiffness: 300,
    damping: 28,
    mass: 0.8,
}

export const springSmooth = {
    type: 'spring',
    stiffness: 200,
    damping: 30,
}

export const springBouncy = {
    type: 'spring',
    stiffness: 400,
    damping: 20,
    mass: 0.6,
}

// Easing curves
export const easeExpo = [0.16, 1, 0.3, 1]
export const easeSmooth = [0.4, 0, 0.2, 1]
export const easeIn = [0.4, 0, 1, 1]

// =====================
// CONTAINER VARIANTS
// =====================

export const staggerContainer = (staggerChildren = 0.10, delayChildren = 0.0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
})

export const staggerFast = staggerContainer(0.06, 0.0)
export const staggerSlow = staggerContainer(0.15, 0.1)

// =====================
// ELEMENT VARIANTS
// =====================

export const fadeUpVariant = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95,
        filter: 'blur(8px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

export const fadeInVariant = {
    hidden: { opacity: 0, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: easeSmooth },
    },
}

export const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeExpo },
    },
}

export const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeExpo },
    },
}

export const scaleInVariant = {
    hidden: { opacity: 0, scale: 0.85, y: 30, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

export const heroHeadlineVariant = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.85,
            ease: easeExpo,
        },
    },
}

// =====================
// CARD HOVER VARIANTS
// =====================

export const cardHoverVariants = {
    rest: {
        y: 0,
        scale: 1,
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        transition: { duration: 0.25, ease: easeSmooth },
    },
    hover: {
        y: -6,
        scale: 1.01,
        boxShadow: '0 16px 56px rgba(0,0,0,0.12)',
        transition: { duration: 0.3, ease: easeSmooth },
    },
}

// =====================
// DASHBOARD ANIMATION
// =====================

export const dashboardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95, rotateX: 8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.9,
            delay: 0.45,
            ease: easeExpo,
        },
    },
}

// =====================
// SCROLL VIEWPORT DEFAULTS
// =====================

export const viewportOnce = { once: true, margin: '-60px' }
export const viewportOnceSmall = { once: true, margin: '-30px' }

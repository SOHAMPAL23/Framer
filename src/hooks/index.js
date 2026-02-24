import { useEffect, useRef, useState, useCallback } from 'react'

// Tracks scroll position and returns whether we've scrolled past a threshold
export function useScrolled(threshold = 20) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > threshold)
        handler()
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [threshold])

    return scrolled
}

// Intersection Observer with options
export function useInView(options = {}) {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    if (options.once !== false) observer.disconnect()
                }
            },
            { threshold: 0.15, rootMargin: '-40px', ...options }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return [ref, inView]
}

// Throttle helper for performance
export function useThrottle(fn, delay = 100) {
    const lastCall = useRef(0)
    return useCallback((...args) => {
        const now = Date.now()
        if (now - lastCall.current >= delay) {
            lastCall.current = now
            fn(...args)
        }
    }, [fn, delay])
}

// Track mouse position for magnetic effects
export function useMousePosition() {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const handler = (e) => setPos({ x: e.clientX, y: e.clientY })
        window.addEventListener('mousemove', handler, { passive: true })
        return () => window.removeEventListener('mousemove', handler)
    }, [])
    return pos
}

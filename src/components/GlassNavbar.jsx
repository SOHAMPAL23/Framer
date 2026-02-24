import { useState, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScrolled } from '../hooks'

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Use cases', href: '#usecases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
]

const logoVariant = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const navVariant = {
    hidden: { opacity: 0, y: -18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 } },
}

const mobileMenu = {
    hidden: { opacity: 0, y: -12, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.18 } },
}

const GlassNavbar = memo(function GlassNavbar() {
    const scrolled = useScrolled(30)
    const [mobileOpen, setMobileOpen] = useState(false)

    const scrollTo = useCallback((href) => {
        setMobileOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
            {/* Desktop Pill Navbar */}
            <motion.nav
                variants={navVariant}
                initial="hidden"
                animate="visible"
                className={`hidden md:flex items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-500 ${scrolled
                    ? 'shadow-nav-pill scale-[0.99]'
                    : 'shadow-glass'
                    }`}
                style={{
                    background: scrolled
                        ? 'rgba(17, 17, 16, 0.92)'
                        : 'rgba(26, 26, 24, 0.80)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                }}
            >
                {/* Logo */}
                <motion.a
                    href="/"
                    variants={logoVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2 mr-3 pr-3"
                    style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
                >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shadow-[0_0_12px_rgba(255,51,102,0.6)]"
                        style={{ background: 'linear-gradient(135deg, #FF3366 0%, #8A2BE2 100%)' }}>
                        <span className="text-white font-bold text-sm leading-none">C</span>
                    </div>
                    <span className="text-white font-semibold text-sm tracking-tight">Compound</span>
                </motion.a>

                {/* Nav Links */}
                {navLinks.map((link) => (
                    <motion.button
                        key={link.label}
                        onClick={() => scrollTo(link.href)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                        style={{ color: 'rgba(255,255,255,0.65)' }}
                        onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,1)'}
                        onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
                    >
                        {link.label}
                    </motion.button>
                ))}

                {/* CTA */}
                <motion.button
                    whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(138,43,226,0.6)' }}
                    whileTap={{ scale: 0.97 }}
                    className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold text-white flex items-center gap-1.5 transition-all duration-300"
                    style={{
                        background: 'linear-gradient(135deg, #FF3366 0%, #00C0FF 100%)',
                        boxShadow: '0 0 16px rgba(255,51,102,0.4)',
                    }}
                >
                    Get started
                    <ChevronRight size={14} strokeWidth={2.5} />
                </motion.button>
            </motion.nav>

            {/* Mobile Navbar */}
            <div className="md:hidden w-full max-w-sm mx-auto">
                <motion.div
                    variants={navVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center justify-between px-4 py-3 rounded-2xl"
                    style={{
                        background: 'rgba(17, 17, 16, 0.88)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.08)',
                    }}
                >
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shadow-[0_0_12px_rgba(255,51,102,0.6)]"
                            style={{ background: 'linear-gradient(135deg, #FF3366 0%, #8A2BE2 100%)' }}>
                            <span className="text-white font-bold text-sm">C</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Compound</span>
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-1.5 rounded-lg text-white/70 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {mobileOpen ? (
                                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <X size={18} />
                                </motion.span>
                            ) : (
                                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <Menu size={18} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </motion.div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            variants={mobileMenu}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="mt-2 rounded-2xl p-3 flex flex-col gap-1"
                            style={{
                                background: 'rgba(17, 17, 16, 0.92)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollTo(link.href)}
                                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/05 transition-all duration-150"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                className="mt-1 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                                style={{ background: 'linear-gradient(135deg, #1DB954 0%, #15993E 100%)' }}
                            >
                                Get started
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
})

export default GlassNavbar

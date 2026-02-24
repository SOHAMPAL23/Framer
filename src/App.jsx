import { lazy, Suspense } from 'react'
import GlassNavbar from './components/GlassNavbar'
import Hero from './components/Hero'
import { motion } from 'framer-motion'

const FeatureCards = lazy(() => import('./components/FeatureCards'))
const Integrations = lazy(() => import('./components/Integrations'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

const SectionLoader = () => (
    <div className="h-64 flex items-center justify-center w-full">
        <div className="w-8 h-8 rounded-full border-2 border-[#1DB954] border-t-transparent animate-spin"></div>
    </div>
)

export default function App() {
    return (
        <div className="min-h-screen bg-compound-bg relative overflow-hidden transition-colors duration-500">
            {/* Animated Gradient Orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 80, -40, 0],
                        y: [0, 40, 80, 0],
                        scale: [1, 1.2, 0.9, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 bg-gradient-radial from-[#1DB954] to-transparent"
                    style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.3) 0%, transparent 60%)', willChange: 'transform' }}
                />
                <motion.div
                    animate={{
                        x: [0, -60, 40, 0],
                        y: [0, -40, -80, 0],
                        scale: [1, 1.3, 1.1, 1]
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-40"
                    style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 60%)', willChange: 'transform' }}
                />
                <motion.div
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -60, 60, 0],
                        scale: [1, 1.1, 1.2, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[150px] opacity-35"
                    style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 60%)', willChange: 'transform' }}
                />
                {/* Subtle noise pattern */}
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', transform: 'translateZ(0)' }}></div>
            </div>

            <div className="relative z-10 w-full">
                <GlassNavbar />
                <main>
                    <Hero />
                    <Suspense fallback={<SectionLoader />}>
                        <FeatureCards />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Integrations />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Testimonials />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <CTA />
                    </Suspense>
                </main>
                <Suspense fallback={null}>
                    <Footer />
                </Suspense>
            </div>
        </div>
    )
}

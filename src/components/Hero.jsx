import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight, TrendingUp, TrendingDown, ShoppingCart, Users } from 'lucide-react'
import {
    staggerContainer,
    heroHeadlineVariant,
    fadeUpVariant,
    scaleInVariant,
    dashboardVariant,
    easeExpo,
} from '../animations/variants'

// Mini metric card for the dashboard preview
function MetricCard({ label, value, change, isUp = true, icon: Icon, color }) {
    return (
        <div className="widget-card min-w-0">
            <div className="flex items-start justify-between mb-2">
                <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">{label}</p>
                    <p className="font-bold text-white stat-number text-lg">{value}</p>
                </div>
                <div className="p-1.5 rounded-lg" style={{ background: color + '15' }}>
                    <Icon size={14} style={{ color }} />
                </div>
            </div>
            <div className={`flex items-center gap-1 text-xs font-semibold ${isUp ? 'text-emerald-600' : 'text-red-500'}`}>
                {isUp ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                <span>{change}</span>
                <span className="text-gray-400 font-normal">today</span>
            </div>
        </div>
    )
}

// Simplified sparkline SVG
function Sparkline({ color = '#1DB954', up = true }) {
    const d = up
        ? 'M0,30 C20,28 30,22 50,18 S80,10 100,6 S130,2 160,0'
        : 'M0,0 C20,4 40,10 60,16 S90,24 120,28 S150,30 160,30'
    return (
        <svg width="100%" height="40" viewBox="0 0 160 32" preserveAspectRatio="none">
            <defs>
                <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}

// Dashboard mockup
function DashboardPreview() {
    return (
        <motion.div
            variants={dashboardVariant}
            className="relative mx-auto mt-16 max-w-4xl"
            style={{ perspective: '1200px' }}
        >
            {/* Glow effect below */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 blur-3xl opacity-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, #FF3366 0%, transparent 70%)' }} />

            {/* Dashboard container */}
            <div
                className="rounded-3xl overflow-hidden glass-dark"
                style={{
                    boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
            >
                {/* Dashboard top bar */}
                <div className="flex items-center justify-between px-5 py-3.5"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                        <div className="w-3 h-3 rounded-full bg-green-400/70" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                        <div className="green-dot" />
                        <span>Live data</span>
                    </div>
                    <div className="w-16 h-3 rounded-full bg-gray-100" />
                </div>

                {/* Metric cards row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5">
                    <MetricCard label="Revenue" value="$2,400" change="+10%" isUp icon={TrendingUp} color="#1DB954" />
                    <MetricCard label="Orders" value="1,480" change="+8%" isUp icon={ShoppingCart} color="#3B82F6" />
                    <MetricCard label="Success" value="1,392" change="+10%" isUp icon={Users} color="#8B5CF6" />
                    <MetricCard label="Cancelled" value="88" change="+5" isUp={false} icon={TrendingDown} color="#EF4444" />
                </div>

                {/* Chart area */}
                <div className="px-5 pb-5">
                    <div className="rounded-2xl p-4 glass-subtle">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <p className="text-xs text-gray-400 font-medium">Income</p>
                                <p className="text-sm font-semibold text-gray-400 mt-0.5">Revenue vs Orders</p>
                            </div>
                            <div className="flex gap-3">
                                {[['Revenue', '#1DB954'], ['Orders', '#3B82F6']].map(([label, color]) => (
                                    <div key={label} className="flex items-center gap-1.5 text-xs text-gray-500">
                                        <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Dual sparkline */}
                        <div className="relative h-12">
                            <div className="absolute inset-0">
                                <Sparkline color="#1DB954" up />
                            </div>
                            <div className="absolute inset-0 opacity-60">
                                <Sparkline color="#3B82F6" up={false} />
                            </div>
                        </div>
                        {/* Month labels */}
                        <div className="flex justify-between mt-2">
                            {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map(m => (
                                <span key={m} className="text-xs text-gray-300">{m}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-[0.25]"
                    style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,51,102,0.4) 0%, transparent 70%)' }} />
                <div className="absolute top-1/4 right-0 w-[500px] h-[400px] opacity-[0.25]"
                    style={{ background: 'radial-gradient(ellipse 60% 50%, rgba(0,192,255,0.4) 0%, transparent 70%)' }} />
                <div className="absolute top-1/3 left-0 w-[400px] h-[300px] opacity-[0.2]"
                    style={{ background: 'radial-gradient(ellipse 60% 50%, rgba(138,43,226,0.5) 0%, transparent 70%)' }} />
            </div>

            {/* Content */}
            <motion.div
                variants={staggerContainer(0.12, 0.05)}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center max-w-4xl mx-auto"
            >
                {/* Badge */}
                <motion.div variants={fadeUpVariant} className="flex justify-center mb-8">
                    <div className="section-tag">
                        <div className="green-dot" />
                        AI-Powered Analytics
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={heroHeadlineVariant}
                    className="text-hero font-display font-extrabold text-white mb-6"
                    style={{ fontFamily: 'Manrope, Inter, sans-serif' }}
                >
                    Compound is the AI-powered
                    <br />
                    <span className="green-gradient-text">analytics for eCommerce</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={fadeUpVariant}
                    className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 font-medium"
                >
                    Compound identifies hidden revenue opportunities in your customer data —
                    from abandoned carts to VIP buyers.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.04, boxShadow: '0 0 36px rgba(255,51,102,0.6)' }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className="btn-primary text-base px-8 py-3.5"
                    >
                        Get started
                        <ArrowRight size={16} strokeWidth={2.5} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className="btn-secondary text-base px-8 py-3.5"
                    >
                        See Pricing
                    </motion.button>
                </motion.div>

                {/* Social proof micro-line */}
                <motion.div variants={fadeUpVariant} className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-400">
                    <div className="flex -space-x-2">
                        {['#F59E0B', '#3B82F6', '#8B5CF6', '#EC4899', '#1DB954'].map((c, i) => (
                            <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0A0A0B] shadow-sm"
                                style={{ background: `linear-gradient(135deg, ${c} 0%, ${c}aa 100%)` }} />
                        ))}
                    </div>
                    <span><strong className="text-gray-200 font-semibold">2,400+</strong> eCommerce brands growing with Compound</span>
                </motion.div>
            </motion.div>

            {/* Dashboard preview */}
            <motion.div
                variants={scaleInVariant}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-5xl mx-auto"
            >
                <DashboardPreview />
            </motion.div>
        </section>
    )
}

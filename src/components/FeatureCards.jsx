import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShoppingCart, Star, Zap, BarChart2, Target } from 'lucide-react'
import {
    staggerContainer,
    fadeUpVariant,
    scaleInVariant,
    slideInLeft,
    slideInRight,
    viewportOnce,
} from '../animations/variants'

const features = [
    {
        id: 'cart',
        tab: 'Cart Rescue',
        icon: ShoppingCart,
        color: '#1DB954',
        headline: 'Turn abandoned carts into instant revenue',
        description:
            "Compound's AI dissects abandonment patterns (device, payment errors, shipping hesitations) and triggers hyper-personalized recovery campaigns. Clients see 31% recovery rates by targeting root causes, not generic discounts.",
        stats: [
            { value: '31%', label: 'Recovery rate' },
            { value: '4.2x', label: 'ROI on campaigns' },
            { value: '2 hrs', label: 'Avg response time' },
        ],
        visual: 'cart',
    },
    {
        id: 'vip',
        tab: 'CLV Maximizer',
        icon: Star,
        color: '#3B82F6',
        headline: 'Identify hidden VIPs buying 3X more',
        description:
            'Real-time scoring detects high-velocity buyers through purchase cadence, social advocacy, and service interactions. Automatically enrolls them in margin-boosting bundles and concierge offers — Proven 22% CLV lift.',
        stats: [
            { value: '22%', label: 'CLV increase' },
            { value: '3x', label: 'Purchase frequency' },
            { value: '$2.8M', label: 'Hidden revenue found' },
        ],
        visual: 'vip',
    },
    {
        id: 'pricing',
        tab: 'Smart Pricing',
        icon: Zap,
        color: '#F59E0B',
        headline: 'Outprice competitors without sacrificing margins',
        description:
            'AI adjusts prices in real-time based on inventory turnover, competitor MAP violations, and customer sensitivity tiers. Clients achieve 14% margin lifts while maintaining brand price integrity.',
        stats: [
            { value: '14%', label: 'Margin lift' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<50ms', label: 'Price updates' },
        ],
        visual: 'pricing',
    },
    {
        id: 'deadstock',
        tab: 'Deadstock AI',
        icon: BarChart2,
        color: '#8B5CF6',
        headline: 'Clear deadstock before it kills your margins',
        description:
            'Predictive inventory models forecast sell-through risk 90 days out. Compound surfaces actionable bundle and discount recommendations to liquidate slow-moving units while preserving brand equity.',
        stats: [
            { value: '90 days', label: 'Forecast window' },
            { value: '67%', label: 'Deadstock reduced' },
            { value: '$340K', label: 'Avg savings' },
        ],
        visual: 'deadstock',
    },
]

// Dashboard UI for each tab
function TabVisual({ feature }) {
    const colors = { cart: '#1DB954', vip: '#3B82F6', pricing: '#F59E0B', deadstock: '#8B5CF6' }
    const color = colors[feature.id] || '#1DB954'

    return (
        <div className="rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-[0_16px_56px_rgba(0,0,0,0.4),0_2px_12px_rgba(0,0,0,0.2)]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400/60" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" /><div className="w-2.5 h-2.5 rounded-full bg-green-400/60" /></div>
                <div className="flex-1 mx-3 h-5 rounded-md flex items-center justify-center bg-white/5">
                    <span className="text-xs text-gray-400">app.compound.io / analytics</span>
                </div>
            </div>
            {/* Content area */}
            <div className="p-5">
                {/* Top metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                    {feature.stats.map((s) => (
                        <div key={s.label} className="rounded-xl p-3 text-center bg-slate-800/40 border border-white/5">
                            <p className="font-bold text-white stat-number text-lg" style={{ color }}>{s.value}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Fake chart bars */}
                <div className="rounded-xl p-4 bg-slate-800/40 border border-white/5">
                    <div className="flex items-end gap-1.5 h-20">
                        {[40, 65, 50, 80, 60, 95, 72, 88, 55, 78, 90, 85].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="flex-1 rounded-t-sm origin-bottom"
                                style={{
                                    height: `${h}%`,
                                    background: i === 6 || i === 8 || i === 10
                                        ? color
                                        : `${color}30`,
                                }}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between mt-2">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                            <span key={m} className="text-xs text-gray-300">{m}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function FeatureCards() {
    const [activeTab, setActiveTab] = useState(0)
    const active = features[activeTab]

    return (
        <section id="features" className="section-padding bg-compound-bg relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(29,185,84,0.08) 0%, transparent 70%)' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    variants={staggerContainer(0.10)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeUpVariant} className="flex justify-center mb-4">
                        <div className="section-tag">
                            <Target size={12} />
                            Product Features
                        </div>
                    </motion.div>
                    <motion.h2 variants={fadeUpVariant} className="text-section-title font-display font-extrabold gradient-text mb-4">
                        Unlock hidden profits in your
                        <br />eCommerce data
                    </motion.h2>
                    <motion.p variants={fadeUpVariant} className="text-lg text-gray-500 max-w-xl mx-auto">
                        Compound is changing the game in the analytics world — traditional tools don't even come close.
                    </motion.p>
                </motion.div>

                {/* Feature tabs */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {features.map((f, i) => {
                        const Icon = f.icon
                        return (
                            <motion.button
                                key={f.id}
                                onClick={() => setActiveTab(i)}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250"
                                style={
                                    activeTab === i
                                        ? {
                                            background: f.color,
                                            color: 'white',
                                            boxShadow: `0 0 20px ${f.color}40`,
                                        }
                                        : {
                                            background: 'rgba(30,41,59,0.4)',
                                            color: '#9CA3AF',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                        }
                                }
                            >
                                <Icon size={14} />
                                {f.tab}
                            </motion.button>
                        )
                    })}
                </motion.div>

                {/* Feature content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="grid md:grid-cols-2 gap-10 items-center"
                    >
                        {/* Text side */}
                        <div>
                            <h3 className="text-feature-title font-display font-bold text-white mb-4">
                                {active.headline}
                            </h3>
                            <p className="text-gray-500 text-base leading-relaxed mb-8">
                                {active.description}
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(29,185,84,0.40)' }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-primary"
                            >
                                Get started
                                <ArrowRight size={15} />
                            </motion.button>
                        </div>

                        {/* Visual side */}
                        <TabVisual feature={active} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

import { motion } from 'framer-motion'
import { Check, X, Zap, BarChart2, Globe, ShoppingBag, Layers, Activity } from 'lucide-react'
import { staggerContainer, fadeUpVariant, scaleInVariant, viewportOnce } from '../animations/variants'

const compareRows = [
    { label: 'Real-time AI insights', old: false, compound: true },
    { label: 'Cart abandonment recovery', old: false, compound: true },
    { label: 'Predictive CLV scoring', old: false, compound: true },
    { label: 'Dynamic pricing engine', old: false, compound: true },
    { label: 'Deadstock AI forecasting', old: false, compound: true },
    { label: 'Segment auto-discovery', old: false, compound: true },
    { label: 'Basic sales reports', old: true, compound: true },
    { label: 'Data export (CSV)', old: true, compound: true },
]

const featureGrid = [
    {
        num: '01',
        icon: Activity,
        title: 'Real-time profit mapping',
        description: 'Live visibility into which products, channels, and customers are driving or draining profitability right now.',
        color: '#1DB954',
    },
    {
        num: '02',
        icon: Layers,
        title: 'Dynamic segmentation',
        description: 'Automatic micro-segments that update as customer behavior shifts — no manual rules required.',
        color: '#3B82F6',
    },
    {
        num: '03',
        icon: Globe,
        title: 'Multi-channel attribution',
        description: 'Understand true revenue impact across email, ads, SEO, and social with first-party attribution models.',
        color: '#8B5CF6',
    },
    {
        num: '04',
        icon: ShoppingBag,
        title: 'Inventory intelligence',
        description: 'AI-driven demand forecasting that prevents stockouts and over-ordering across your full catalog.',
        color: '#F59E0B',
    },
    {
        num: '05',
        icon: BarChart2,
        title: 'Cohort retention analytics',
        description: 'Track how different cohorts behave over time and spot churn signals before they hurt revenue.',
        color: '#EC4899',
    },
    {
        num: '06',
        icon: Zap,
        title: 'Automated action triggers',
        description: 'Connect insights to actions: auto-launch campaigns, adjust bids, or fire webhooks based on AI signals.',
        color: '#14B8A6',
    },
]

export default function Integrations() {
    return (
        <>
            {/* Comparison section */}
            <section id="usecases" className="section-padding relative overflow-hidden bg-compound-bg">
                <div className="absolute inset-0 pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        variants={staggerContainer(0.10)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="text-center mb-14"
                    >
                        <motion.div variants={fadeUpVariant} className="flex justify-center mb-4">
                            <div className="section-tag">Comparison</div>
                        </motion.div>
                        <motion.h2 variants={fadeUpVariant} className="text-section-title font-display font-extrabold gradient-text mb-4">
                            Traditional analytics tools
                            <br />don't cut it anymore
                        </motion.h2>
                        <motion.p variants={fadeUpVariant} className="text-gray-500 text-lg max-w-lg mx-auto">
                            Legacy tools show you the past. Compound shows you what to do next.
                        </motion.p>
                    </motion.div>

                    {/* Comparison table */}
                    <motion.div
                        variants={scaleInVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="rounded-3xl overflow-hidden bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-2xl"
                    >
                        {/* Table header */}
                        <div className="grid grid-cols-3 px-6 py-4 border-b border-white/10">
                            <div className="col-span-1" />
                            <div className="text-center">
                                <span className="text-sm font-semibold text-gray-400">Old Way</span>
                            </div>
                            <div className="text-center">
                                <span className="text-sm font-semibold text-white">Compound Way ✦</span>
                            </div>
                        </div>
                        {/* Rows */}
                        {compareRows.map((row, i) => (
                            <motion.div
                                key={row.label}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className={`grid grid-cols-3 px-6 py-4 items-center ${i < compareRows.length - 1 ? 'border-b border-white/5' : ''}`}
                            >
                                <span className="text-sm text-gray-300 font-medium">{row.label}</span>
                                <div className="flex justify-center">
                                    {row.old ? (
                                        <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center">
                                            <Check size={11} className="text-green-500" strokeWidth={2.5} />
                                        </div>
                                    ) : (
                                        <div className="w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center">
                                            <X size={11} className="text-red-400" strokeWidth={2.5} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center">
                                        <Check size={11} className="text-green-500" strokeWidth={2.5} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Numbered feature grid */}
            <section className="section-padding bg-compound-bg relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        variants={staggerContainer()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="text-center mb-14"
                    >
                        <motion.h2 variants={fadeUpVariant} className="text-section-title font-display font-extrabold gradient-text mb-4">
                            Everything you need to
                            <br />dominate your market
                        </motion.h2>
                        <motion.p variants={fadeUpVariant} className="text-gray-500 text-lg max-w-lg mx-auto">
                            Six AI-powered engines, orchestrated as one unified platform.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer(0.08)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {featureGrid.map((item) => {
                            const Icon = item.icon
                            return (
                                <motion.div
                                    key={item.num}
                                    variants={fadeUpVariant}
                                    whileHover={{ y: -5, boxShadow: '0 16px 56px rgba(0,0,0,0.11)' }}
                                    transition={{ duration: 0.25 }}
                                    className="feature-card group cursor-default"
                                >
                                    {/* Number + icon */}
                                    <div className="flex items-start justify-between mb-4">
                                        <span className="text-4xl font-black stat-number leading-none"
                                            style={{ color: `${item.color}20`, fontVariantNumeric: 'tabular-nums' }}>
                                            {item.num}
                                        </span>
                                        <div className="p-2.5 rounded-xl" style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}>
                                            <Icon size={18} style={{ color: item.color }} />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-white text-base mb-2 font-display">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>
        </>
    )
}

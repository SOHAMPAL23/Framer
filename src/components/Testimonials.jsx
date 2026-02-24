import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { staggerContainer, fadeUpVariant, scaleInVariant, viewportOnce } from '../animations/variants'

const testimonials = [
    {
        id: 1,
        quote: "Compound's AI uncovered $2.8M in hidden annual revenue we'd been missing — their predictive abandoned cart system alone boosted our bottom line by 31% in 90 days.",
        name: 'Jamie Rivera',
        role: 'CEO of Luxe Threads',
        avatar: '#1DB954',
        rating: 5,
        company: 'Luxe Threads',
    },
    {
        id: 2,
        quote: "We switched from three separate analytics tools to Compound and immediately started seeing insights we'd never had access to. The CLV scoring is scary accurate.",
        name: 'Sarah J.',
        role: 'Head of Retention @ Glow Beauty',
        avatar: '#3B82F6',
        rating: 5,
        company: 'Glow Beauty',
    },
    {
        id: 3,
        quote: "The deadstock AI saved us from a catastrophic overstock situation heading into Q4. It identified the risk three months out and our margins were protected.",
        name: 'Marcus Chen',
        role: 'Operations Lead @ Urban Supply Co.',
        avatar: '#8B5CF6',
        rating: 5,
        company: 'Urban Supply Co.',
    },
    {
        id: 4,
        quote: "I recommend Compound to every DTC brand I advise. The real-time profit mapping is unlike anything else out there — finally, analytics that drive action.",
        name: 'Anya Sharma',
        role: 'Founder @ Bloom Collective',
        avatar: '#EC4899',
        rating: 5,
        company: 'Bloom Collective',
    },
    {
        id: 5,
        quote: "Integration took less than an hour and within 48 hours we had our first recovered cart campaign live. The ROI is absolutely undeniable.",
        name: 'Tom Barker',
        role: 'CTO @ Meridian Store',
        avatar: '#F59E0B',
        rating: 5,
        company: 'Meridian Store',
    },
    {
        id: 6,
        quote: "Dynamic segmentation alone has changed our email marketing from batch-and-blast to precision targeting. Open rates up 40%, revenue per email up 2.8x.",
        name: 'Priya Nair',
        role: 'Marketing Director @ Vivid Goods',
        avatar: '#14B8A6',
        rating: 5,
        company: 'Vivid Goods',
    },
]

const StarRating = memo(function StarRating({ count = 5 }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} size={12} fill="#F59E0B" className="text-amber-400" />
            ))}
        </div>
    )
})

const TestimonialCard = memo(function TestimonialCard({ t, active }) {
    return (
        <motion.div
            layout
            className="feature-card h-full flex flex-col justify-between"
            style={active ? { border: '1px solid rgba(29,185,84,0.25)', boxShadow: '0 12px 48px rgba(0,0,0,0.10)' } : {}}
        >
            <div>
                <div className="mb-4">
                    <Quote size={20} className="text-gray-600" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed font-medium mb-6">"{t.quote}"</p>
            </div>
            <div className="flex items-center gap-3">
                <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.avatar} 0%, ${t.avatar}aa 100%)` }}
                >
                    {t.name[0]}
                </div>
                <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                </div>
                <div className="ml-auto">
                    <StarRating count={t.rating} />
                </div>
            </div>
        </motion.div>
    )
})

const Testimonials = memo(function Testimonials() {
    const [page, setPage] = useState(0)
    const perPage = 3
    const pages = Math.ceil(testimonials.length / perPage)
    const visible = testimonials.slice(page * perPage, page * perPage + perPage)

    // Feature quote (large pull-quote)
    const featured = testimonials[1]

    return (
        <section id="reviews" className="section-padding relative overflow-hidden bg-compound-bg">

            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(29,185,84,0.06) 0%, transparent 70%)' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Featured large pull quote */}
                <motion.div
                    variants={scaleInVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="mb-20 text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
                        style={{
                            background: 'rgba(15,23,42,0.6)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            backdropFilter: 'blur(16px)',
                        }}
                    >
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#F59E0B" className="text-amber-400" />)}
                        </div>
                        <span className="text-xs font-semibold text-gray-400">Rated 4.9 / 5 from 2,400+ customers</span>
                    </motion.div>

                    <blockquote
                        className="text-3xl md:text-4xl font-display font-bold leading-tight mb-8"
                        style={{ letterSpacing: '-0.025em', color: '#E2E8F0' }}
                    >
                        <span className="green-gradient-text">"Compound's AI uncovered $2.8M</span>
                        <span className="text-gray-400"> in hidden annual revenue we'd been missing — their predictive abandoned cart system alone boosted our bottom line by </span>
                        <span className="green-gradient-text">31% in 90 days."</span>
                    </blockquote>

                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                            style={{ background: 'linear-gradient(135deg, #1DB954 0%, #16A34A 100%)' }}>J</div>
                        <div className="text-left">
                            <p className="font-semibold text-white text-sm">Jamie Rivera</p>
                            <p className="text-gray-400 text-xs">CEO of Luxe Threads</p>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials grid header */}
                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="flex items-center justify-between mb-8"
                >
                    <motion.div variants={fadeUpVariant}>
                        <div className="section-tag mb-3">Customer Stories</div>
                        <h2 className="text-3xl font-display font-extrabold gradient-text">Loved by eCommerce teams</h2>
                    </motion.div>

                    <motion.div variants={fadeUpVariant} className="flex gap-2">
                        <button
                            onClick={() => setPage(p => Math.max(0, p - 1))}
                            disabled={page === 0}
                            className="p-2.5 rounded-xl transition-all duration-200 disabled:opacity-30 hover:bg-white/10"
                            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                        >
                            <ChevronLeft size={16} className="text-gray-400" />
                        </button>
                        <button
                            onClick={() => setPage(p => Math.min(pages - 1, p + 1))}
                            disabled={page === pages - 1}
                            className="p-2.5 rounded-xl transition-all duration-200 disabled:opacity-30 hover:bg-white/10"
                            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                        >
                            <ChevronRight size={16} className="text-gray-400" />
                        </button>
                    </motion.div>
                </motion.div>

                {/* Cards grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {visible.map((t, i) => (
                            <TestimonialCard key={t.id} t={t} active={i === 0} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Page dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: pages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: page === i ? '24px' : '8px',
                                height: '8px',
                                background: page === i ? '#1DB954' : 'rgba(255,255,255,0.15)',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
})

export default Testimonials

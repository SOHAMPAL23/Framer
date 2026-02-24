import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { staggerContainer, fadeUpVariant, viewportOnce } from '../animations/variants'

const plans = [
    {
        name: 'Free',
        price: '$0',
        period: '/mo',
        description: 'Perfect for exploring Compound and getting started.',
        features: [
            'Up to 500 orders/month',
            'Basic revenue dashboard',
            '3 audience segments',
            'Email support',
            '30-day data history',
        ],
        cta: 'Get started free',
        highlight: false,
        color: '#6B7280',
    },
    {
        name: 'Pro',
        price: '$49',
        period: '/mo',
        description: 'The full AI engine for growing eCommerce brands.',
        features: [
            'Unlimited orders',
            'AI cart recovery campaigns',
            'CLV scoring & VIP detection',
            'Dynamic pricing engine',
            'Deadstock AI forecasting',
            'Unlimited segments',
            'Priority support',
            '2-year data history',
        ],
        cta: 'Start free trial',
        highlight: true,
        badge: 'Most popular',
        color: '#1DB954',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large-scale retailers with enterprise needs.',
        features: [
            'Everything in Pro',
            'Dedicated success manager',
            'Custom AI model training',
            'SSO & SAML',
            'SLA uptime guarantee',
            'On-premise deployment option',
            'Custom integrations',
        ],
        cta: 'Contact sales',
        highlight: false,
        color: '#111110',
    },
]

const faqs = [
    {
        q: 'How long does it take to set up Compound?',
        a: 'Most stores are fully connected in under an hour. We support Shopify, WooCommerce, BigCommerce, and custom platforms via API. Our onboarding team guides you through every step.',
    },
    {
        q: 'Is my data secure?',
        a: 'Yes. Compound is SOC 2 Type II certified, GDPR compliant, and we never sell your data. All data is encrypted in transit and at rest. We have 99.99% uptime SLA.',
    },
    {
        q: 'Can I cancel anytime?',
        a: 'Absolutely. No long-term contracts — cancel anytime with a click. Your data remains accessible for 30 days after cancellation.',
    },
    {
        q: 'Which platforms do you integrate with?',
        a: 'We natively integrate with Shopify, WooCommerce, BigCommerce, Klaviyo, Meta Ads, Google Ads, Amazon Seller Central, and 60+ more via our partner ecosystem.',
    },
    {
        q: 'How does the AI cart recovery work?',
        a: 'Our AI analyzes 40+ abandonment signals (device type, exit speed, hovered elements, payment errors) and generates personalized recovery sequences via email and SMS, with optimal timing predictions per customer.',
    },
    {
        q: 'Do you offer a free trial?',
        a: 'Yes — all Pro features are available free for 14 days. No credit card required. If you\'re not satisfied, we\'ll refund you, no questions asked, within the first 30 days.',
    },
]

const FAQItem = memo(function FAQItem({ item, index }) {
    const [open, setOpen] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-2xl overflow-hidden transition-colors duration-200 bg-slate-900/60 backdrop-blur-md border ${open ? 'border-sky-400/30' : 'border-white/10'}`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
            >
                <span className="font-semibold text-white text-sm">{item.q}</span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0"
                >
                    <ChevronDown size={16} className={open ? 'text-blue-500' : 'text-gray-400'} />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{item.a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
})

const CTA = memo(function CTA() {
    return (
        <>
            {/* Pricing section */}
            <section id="pricing" className="section-padding bg-compound-bg relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, rgba(29,185,84,0.07) 0%, transparent 70%)' }} />

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        variants={staggerContainer()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="text-center mb-14"
                    >
                        <motion.div variants={fadeUpVariant} className="flex justify-center mb-4">
                            <div className="section-tag">Pricing</div>
                        </motion.div>
                        <motion.h2 variants={fadeUpVariant} className="text-section-title font-display font-extrabold gradient-text mb-4">
                            Simple, transparent pricing
                        </motion.h2>
                        <motion.p variants={fadeUpVariant} className="text-gray-500 text-lg max-w-md mx-auto">
                            Start free. Scale when you're ready. No hidden fees.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer(0.10)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {plans.map((plan) => (
                            <motion.div
                                key={plan.name}
                                variants={fadeUpVariant}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className={`relative rounded-3xl p-7 flex flex-col ${plan.highlight ? 'bg-slate-800/60 backdrop-blur-lg border border-pink-500/25 shadow-[0_24px_72px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,51,102,0.15),0_0_40px_rgba(255,51,102,0.08)]' : 'bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-lg'}`}
                            >
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="text-xs font-bold text-white px-3 py-1 rounded-full"
                                            style={{ background: 'linear-gradient(135deg, #1DB954 0%, #16A34A 100%)' }}>
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-gray-500 mb-2">{plan.name}</p>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl font-black font-display text-white stat-number">{plan.price}</span>
                                        {plan.period && <span className="text-gray-400 text-sm">{plan.period}</span>}
                                    </div>
                                    <p className="text-xs text-gray-400">{plan.description}</p>
                                </div>

                                <ul className="space-y-2.5 mb-8 flex-1">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                                            <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{ background: plan.highlight ? 'rgba(255,51,102,0.2)' : 'rgba(255,255,255,0.1)' }}>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                    <path d="M1 4L3 6L7 2" stroke={plan.highlight ? '#FF3366' : '#9CA3AF'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${plan.highlight ? 'btn-primary justify-center' : 'btn-secondary justify-center'
                                        }`}
                                    style={plan.highlight ? {} : { width: '100%' }}
                                >
                                    {plan.cta}
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ section */}
            <section id="faqs" className="section-padding relative overflow-hidden bg-compound-bg">
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        variants={staggerContainer()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="text-center mb-12"
                    >
                        <motion.div variants={fadeUpVariant} className="flex justify-center mb-4">
                            <div className="section-tag">FAQs</div>
                        </motion.div>
                        <motion.h2 variants={fadeUpVariant} className="text-section-title font-display font-extrabold gradient-text mb-4">
                            Frequently asked questions
                        </motion.h2>
                        <motion.p variants={fadeUpVariant} className="text-gray-500 text-base">
                            Everything you need to know about Compound.
                        </motion.p>
                    </motion.div>

                    <div className="flex flex-col gap-3">
                        {faqs.map((item, i) => (
                            <FAQItem key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA banner */}
            <section className="section-padding relative overflow-hidden bg-compound-bg">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-3xl overflow-hidden px-8 py-14 text-center"
                        style={{
                            background: 'linear-gradient(135deg, #111110 0%, #1C1C1A 60%, #0f2318 100%)',
                            boxShadow: '0 24px 80px rgba(0,0,0,0.20), 0 4px 24px rgba(0,0,0,0.12)',
                        }}
                    >
                        {/* Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse, rgba(29,185,84,0.18) 0%, transparent 70%)' }} />

                        {/* Content */}
                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportOnce}
                                transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="section-tag" style={{ background: 'rgba(29,185,84,0.15)', borderColor: 'rgba(29,185,84,0.25)', color: '#4ADE80' }}>
                                        <div className="green-dot" />
                                        Free 14-day trial
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
                                    Start growing with
                                    <br /><span className="green-gradient-text">AI-powered analytics</span>
                                </h2>
                                <p className="text-white/55 text-lg mb-10 max-w-lg mx-auto">
                                    Join 2,400+ eCommerce brands already uncovering hidden revenue with Compound. No credit card required.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(29,185,84,0.50)' }}
                                        whileTap={{ scale: 0.97 }}
                                        className="btn-primary text-base px-8 py-3.5"
                                    >
                                        Get started free
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-all duration-200"
                                        style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                                    >
                                        Talk to sales
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
})

export default CTA

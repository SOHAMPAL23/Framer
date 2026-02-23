import { motion } from 'framer-motion'
import { Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
    Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Integrations'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'API Reference', 'Community', 'Status'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
}

const socials = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
    return (
        <footer
            className="relative overflow-hidden pt-16 pb-8 px-6 md:px-12 lg:px-24"
            style={{ background: '#111110' }}
        >
            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(29,185,84,0.3), transparent)' }} />

            <div className="max-w-6xl mx-auto">
                {/* Top row */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-12 pb-14"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

                    {/* Logo + tagline */}
                    <div className="col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-4"
                        >
                            <a href="/" className="flex items-center gap-2 mb-4 w-fit">
                                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg, #1DB954 0%, #16A34A 100%)' }}>
                                    <span className="text-white font-black text-base">C</span>
                                </div>
                                <span className="text-white font-bold text-base">Compound</span>
                            </a>
                            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.40)' }}>
                                The AI-powered analytics platform for eCommerce brands that want to find and act on hidden revenue.
                            </p>
                            {/* Social icons */}
                            <div className="flex gap-2">
                                {socials.map(({ icon: Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="p-2 rounded-lg transition-all duration-200"
                                        style={{
                                            background: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            color: 'rgba(255,255,255,0.45)',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = 'rgba(29,185,84,0.15)'
                                            e.currentTarget.style.color = '#1DB954'
                                            e.currentTarget.style.borderColor = 'rgba(29,185,84,0.25)'
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                                            e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                                        }}
                                    >
                                        <Icon size={15} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links], ci) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: ci * 0.07, duration: 0.45 }}
                        >
                            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                {category}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map(link => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm transition-all duration-150 group flex items-center gap-1"
                                            style={{ color: 'rgba(255,255,255,0.50)' }}
                                            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.90)'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.50)'}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        © 2026 Compound Analytics, Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        <span>Built with</span>
                        <span className="text-red-400">♥</span>
                        <span>using React, Vite, Tailwind CSS & Framer Motion</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

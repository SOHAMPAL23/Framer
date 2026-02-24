/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                compound: {
                    bg: '#000000',
                    bgAlt: '#121214',
                    dark: '#FFFFFF',
                    mid: '#1C1C1A',
                    surface: 'rgba(20,20,22,0.6)',
                    border: 'rgba(255,255,255,0.08)',
                    green: '#1DB954',
                    greenLight: '#22C55E',
                    greenMid: '#16A34A',
                    greenGlow: 'rgba(29,185,84,0.25)',
                    text: '#E2E8F0',
                    muted: '#9CA3AF',
                    subtle: '#6B7280',
                    navy: '#0D1117',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Manrope', 'Inter', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '12px',
                lg: '20px',
                xl: '40px',
                '2xl': '60px',
            },
            boxShadow: {
                glass: '0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                'glass-md': '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
                'glass-lg': '0 16px 64px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08)',
                'glass-xl': '0 24px 80px rgba(0,0,0,0.18), 0 8px 32px rgba(0,0,0,0.10)',
                'green-glow': '0 0 32px rgba(29,185,84,0.35), 0 0 12px rgba(29,185,84,0.20)',
                'green-sm': '0 0 16px rgba(29,185,84,0.25)',
                card: '0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05)',
                'card-hover': '0 8px 48px rgba(0,0,0,0.12), 0 2px 12px rgba(0,0,0,0.08)',
                'nav-pill': '0 4px 32px rgba(0,0,0,0.20), 0 1px 6px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
                inset: 'inset 0 1px 0 rgba(255,255,255,0.15)',
            },
            backgroundImage: {
                'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(29,185,84,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 40%, rgba(168,85,247,0.04) 0%, transparent 60%)',
                'glass-card': 'linear-gradient(135deg, rgba(30,30,35,0.7) 0%, rgba(15,15,18,0.4) 100%)',
                'green-gradient': 'linear-gradient(135deg, #1DB954 0%, #16A34A 100%)',
                'dark-gradient': 'linear-gradient(180deg, #1C1C1A 0%, #000000 100%)',
                'section-glow': 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(29,185,84,0.06) 0%, transparent 70%)',
                'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E\")",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
                'gradient-x': 'gradient-x 4s ease infinite',
                'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                'gradient-x': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'bounce-subtle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-4px)' },
                },
            },
            transitionTimingFunction: {
                spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
                expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            spacing: {
                18: '4.5rem',
                22: '5.5rem',
                30: '7.5rem',
            },
        },
    },
    plugins: [],
}

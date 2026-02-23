# Compound Glass Clone

A pixel-perfect, production-ready clone of the [Compound](https://compound.framer.ai/) eCommerce analytics landing page — built with a premium glassmorphism design system, cinematic Framer Motion animations, and Tailwind CSS.

---

## 🎨 Design Philosophy

This project is built on three design pillars:

### 1. Glassmorphism Done Right
- `backdrop-filter: blur()` applied only to surfaces that float above the background — navbar, cards, modals
- White at 40–75% opacity with subtle white borders creates genuine depth without hurting readability
- Layered shadows (`box-shadow` stacking) simulate physical card depth

### 2. Purposeful Motion
Every animation serves a UX function:
- **Hero entrance**: staggered `fade + slide + blur` using Framer Motion `staggerChildren` to guide the eye through the page hierarchy
- **Scroll reveals**: `y: 28 → 0` with `blur(4px) → blur(0)` so elements feel like they emerge from the surface
- **Tab switching**: `AnimatePresence` cross-fade with directional slide (`mode="wait"`) for smooth content swaps
- **Card hovers**: Spring physics (`stiffness: 300, damping: 28`) for satisfying lift with no overshoot
- **FAQ accordion**: Height animation with `overflow: hidden` to avoid layout reflow

### 3. Typography Hierarchy
- `Manrope` for display/hero text (high character, strong personality)
- `Inter` for body and UI text (unbeatable legibility)
- Fluid type using `clamp()` ensures beautiful scaling from 375px to 1920px

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Google Fonts (Inter + Manrope) |
| Build | Vite (ESM, tree-shaken) |

---

## 🚀 Setup Instructions

```bash
# 1. Enter the project
cd compound-glass-clone

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
open http://localhost:5173

# 5. Production build
npm run build && npm run preview
```

---

## 📁 Folder Structure

```
compound-glass-clone/
├── public/
│   └── favicon.svg                # SVG favicon
├── src/
│   ├── animations/
│   │   └── variants.js            # All Framer Motion variants & spring configs
│   ├── components/
│   │   ├── GlassNavbar.jsx        # Dark pill navbar, mobile drawer, scroll detection
│   │   ├── Hero.jsx               # Cinematic hero + dashboard mockup preview
│   │   ├── FeatureCards.jsx       # Interactive feature tabs with animated charts
│   │   ├── Integrations.jsx       # Comparison table + numbered feature grid
│   │   ├── Testimonials.jsx       # Pull quote + paginated testimonial cards
│   │   ├── CTA.jsx                # Pricing cards + FAQ accordion + dark CTA banner
│   │   └── Footer.jsx             # Multi-column footer with social icons
│   ├── hooks/
│   │   └── index.js               # useScrolled, useInView, useThrottle, useMousePosition
│   ├── styles/
│   │   └── index.css              # Global CSS, Tailwind layers, glass utilities
│   ├── App.jsx                    # Root component — section composition
│   └── main.jsx                   # ReactDOM entry point
├── tailwind.config.js             # Custom palette, blur, shadows, animations
├── postcss.config.js              # PostCSS + Autoprefixer
├── vite.config.js                 # Vite + React plugin
├── index.html                     # HTML shell with font pre-connects + SEO meta
└── package.json
```

---

## 🎬 Animation Decisions

### Why `filter: blur()` on reveal?
Blurring text from `4px → 0` as it reveals mimics the focus-pull of a camera lens. It adds premium polish without feeling gimmicky. The blur resolves before the user can read the text, so it never reduces legibility.

### Why spring physics on cards?
Linear or ease transitions feel mechanical. Spring physics (`stiffness: 300, damping: 28`) create organic resistance — like picking up a real card. The slight overshoot of `scaleInVariant` (0.88 → 1.0) reads as confidence, not jank.

### Why `mode="wait"` on Testimonials pager?
Without `wait`, the exit and enter animations run simultaneously, causing visual overlap. `wait` ensures the departing content fully exits before new content enters — essential for paginated interfaces.

### Why stagger on the hero?
Eye-tracking research shows users scan top-to-bottom. Staggering elements 120ms apart guides that scan deliberately, making the page feel orchestrated rather than chaotic.

---

## 📊 Performance Notes

- Dashboard preview uses SVG sparklines (zero canvas, zero canvas repaints)
- `IntersectionObserver` for scroll-based animations — no scroll event listeners on the main thread
- Testimonials grid uses `AnimatePresence` `mode="wait"` to prevent redundant render cycles
- All `backdrop-filter` surfaces have `will-change: transform` implied by Framer Motion to prevent repaint cascades
- `useScrolled` hook uses `passive: true` event listener to never block the scroll thread

---

## 🎯 Design Decisions vs Reference

| Element | Reference | Clone Approach |
|---|---|---|
| Navbar | Dark pill floating above page | `rgba(17,17,16,0.88)` + `backdrop-blur-xl` pill |
| Background | Off-white `#F5F5F4` | `#F4F3EF` — marginally warmer, same feel |
| Green accent | Emerald green CTAs | `#1DB954` with green-glow `box-shadow` |
| Dashboard | Screenshot mockup | Fully coded SVG + HTML widget mockup |
| Typography | Inter | `Manrope` (display) + `Inter` (body) |
| Animations | Framer (Framer AI) | All hand-coded in Framer Motion |

---

## 🌐 Deployment

Deploy instantly to Vercel:

```bash
npm install -g vercel
vercel --prod
```

Or connect the GitHub repo to Vercel for zero-config CI/CD.

---

*Built as a frontend hiring assignment — clean, original, modular, explainable.*

<div align="center">
  
# ✦ Compound Analytics Clone

**A pixel-perfect, production-ready clone of the Compound eCommerce analytics landing page.**

[![Built with React](https://img.shields.io/badge/Built_with-React_18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Bundler-Vite_5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Animated_with-Framer_Motion-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📖 Overview

This project is a high-fidelity replica of the **[Compound](https://compound.framer.ai/)** landing page. It showcases modern web development best practices, featuring a premium dark mode **glassmorphism** design system, highly optimized **Framer Motion** animations, and a fully responsive layout built with **Tailwind CSS**.

It is designed to be instantly deployable, accessible, and easily readable for developers and designers alike.

---

## ✨ Key Features

- **🖤 Premium Dark Theme**: Deep black backgrounds with Compound's signature vibrant green (`#1DB954`) and subtle glowing accents.
- **🪟 Advanced Glassmorphism**: Beautiful translucent surfaces utilizing `backdrop-filter: blur()`, stacked box-shadows, and micro-borders to simulate physical depth.
- **🎬 Cinematic Animations**: 
  - Staggered hero entrances 
  - Smooth scroll-reveal elements
  - Hover micro-interactions with spring physics
- **📱 Fully Responsive**: Fluid typography (`clamp()`) and adaptive grid layouts ensure it looks stunning from mobile phones to 4K displays.
- **⚡ Performance Optimized**: Built with Vite for lightning-fast HMR and minimal production bundle sizes.

---

## 🛠️ Technology Stack

| Category | Technology Used | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | `React 18` | Component-based UI architecture |
| **Build Tool** | `Vite 5` | Next-generation frontend tooling |
| **Styling** | `Tailwind CSS 3.4` | Utility-first CSS framework |
| **Animations** | `Framer Motion 11` | Declarative animations and gestures |
| **Icons** | `Lucide React` | Beautiful, consistent iconography |
| **Typography** | `Inter & Manrope` | High-legibility modern sans-serif fonts |

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running on your machine.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Installation Setup

Clone the repository and install dependencies:

```bash
# Clone the repository (if applicable)
git clone https://github.com/SOHAMPAL23/Framer.git

# Enter the project directory
cd Framer

# Install all required NPM packages
npm install
```

### 3. Running Locally

Start the Vite development server:

```bash
npm run dev
```
Open your browser and visit `http://localhost:5173` to view the app!

### 4. Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

The codebase is highly modular and easy to navigate. Here is a brief overview:

```text
📦 src
 ┣ 📂 animations      # Framer Motion configuration and variants
 ┣ 📂 components      # Reusable UI sections
 ┃ ┣ 📜 Hero.jsx        # Top cinematic section
 ┃ ┣ 📜 FeatureCards.jsx# Interactive feature tabs
 ┃ ┣ 📜 Integrations.jsx# Comparison tables
 ┃ ┣ 📜 Testimonials.jsx# Quotes and reviews
 ┃ ┣ 📜 CTA.jsx         # Call-to-action banners
 ┃ ┣ 📜 GlassNavbar.jsx # Floating sticky navigation
 ┃ ┗ 📜 Footer.jsx      # Multi-column footer
 ┣ 📂 hooks           # Custom React hooks (scroll, in-view)
 ┣ 📂 styles          # Global CSS and Tailwind directives
 ┣ 📜 App.jsx         # Main layout composer
 ┗ 📜 main.jsx        # React application entry point
```

---

## ☁️ Deployment

This project is configured right out of the box for modern hosting platforms like **Vercel** or **Netlify**.

### Deploying to Vercel

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy instantly
vercel --prod
```
*Alternatively, you can just link your GitHub repository directly in the Vercel dashboard for automatic CI/CD deployments connected to your `main` branch!*

---

<div align="center">
  <p>Built with ❤️ for clean, modern web design.</p>
</div>

# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project type and quick start
- Framework: Next.js (App Router) with TypeScript and Tailwind CSS v4.
- Start dev server: `npm run dev` then open http://localhost:3000
- Build: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint`
- Typecheck: `npx tsc --noEmit`
- Tests: Not configured (no test runner or scripts). Running a single test is not applicable.

High-level architecture
- App Router entrypoints
  - `src/app/layout.tsx`: Global HTML shell. Loads Geist fonts via `next/font` and imports `src/app/globals.css`.
  - `src/app/page.tsx`: Client component that drives the entire UI. It sequences a multi-part message, tracks "likes", and conditionally renders effects.
- UI behavior and effects
  - Keyboard easter egg: `src/app/hooks/useKonamiCode.ts` listens for the Konami key sequence and exposes a boolean that gates special effects.
  - Confetti: `src/app/components/KonamiConfetti.tsx` uses `framer-motion` and `lucide-react` Hearts to animate celebratory particles when the Konami code is active.
  - Background particles: `src/app/components/Particles.tsx` integrates `@tsparticles/react` (Slim bundle) with a local options object for interactive, repulsing particles.
  - Animated heart explosion (currently unused): `src/app/components/Heart.tsx` renders ephemeral SVG hearts with CSS keyframes.
- Styling
  - Tailwind CSS v4 via PostCSS: `postcss.config.mjs` enables `@tailwindcss/postcss`; `src/app/globals.css` imports `tailwindcss` and defines a small `fade-in` keyframe.
- Configuration
  - ESLint (flat config): `eslint.config.mjs` extends `next/core-web-vitals` and `next/typescript`; ignores `.next/`, `node_modules/`, build outputs.
  - Next.js: `next.config.ts` currently holds no custom options.
  - TypeScript: `tsconfig.json` enables strict mode and sets the path alias `@/*` → `./src/*`.
    - Example: `import Particles from "@/app/components/Particles"`.

Notes
- The app is entirely client-driven (no API routes or server components present).
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Kailash Rajh built with **Astro** and **React**. It's a statically generated site that showcases professional experience, skills, and projects.

### Tech Stack
- **Astro**: Static site generator with islands architecture
- **React**: Component library for interactive elements
- **TypeScript**: For type safety
- **Tailwind CSS**: Styling with custom Kanagawa color palette
- **Framer Motion**: Animations and interactions
- **Lucide React**: Icons

### Project Structure
```
src/
├── components/           # React components for each portfolio section
│   ├── Hero.tsx         # Landing/intro section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills and technologies
│   ├── Experience.tsx   # Work experience
│   ├── Education.tsx    # Educational background
│   ├── Certifications.tsx # Certifications
│   ├── Contact.tsx      # Contact information
│   └── Navigation.tsx   # Navigation component
├── layouts/
│   └── Layout.astro     # Main layout with navigation
├── pages/
│   └── index.astro      # Main page that assembles all components
├── App.tsx              # React app with scroll detection
├── main.tsx             # React entry point
└── index.css            # Global styles
```

## Common Development Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

### Deployment
```bash
npm run deploy       # Build and deploy to GitHub Pages
```

## Architecture Details

### Astro Integration
- Uses Astro's islands architecture where React components are hydrated with `client:load`
- Main page (`index.astro`) imports and renders all portfolio sections
- Layout (`Layout.astro`) provides HTML structure and includes navigation

### Component Architecture
- Each portfolio section is a self-contained React component
- Components use Framer Motion for animations
- Tailwind classes for styling with custom Kanagawa color palette
- Navigation uses scroll detection to highlight active sections

### Styling System
- **Tailwind CSS** with custom configuration
- **Kanagawa color palette** - dark theme inspired colors
- Custom animations: fade-in, slide-up, float
- Responsive design with mobile-first approach

### State Management
- Minimal state management using React hooks
- Scroll position tracking for navigation highlighting
- No external state management library needed

## Development Notes

### Color Palette
The site uses a custom "Kanagawa" color palette defined in `tailwind.config.js`:
- Primary colors: Beige tones for light theme
- Kanagawa colors: Dark theme with blues, greens, and accent colors
- Custom animations and typography

### Content Updates
To update portfolio content, modify the respective component files:
- Personal info: `Hero.tsx`, `Contact.tsx`
- Professional experience: `Experience.tsx`
- Skills: `Skills.tsx`
- Education: `Education.tsx`

### Deployment
- Auto-deploys to GitHub Pages via GitHub Actions
- Base URL configured as `/kr-cv/` in `astro.config.mjs`
- Manual deployment available via `npm run deploy`

## TypeScript Configuration
- Uses TypeScript with strict mode
- ESLint configured for React and TypeScript
- Vite for development and building
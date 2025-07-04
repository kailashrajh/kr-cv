# Kailash Rajh - Portfolio Website

A modern, responsive portfolio website showcasing the professional experience and skills of Kailash Rajh, a Full Stack Developer and Software Development Engineer in Test.

## 🚀 Built With

- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for modern, responsive styling
- **Framer Motion** for smooth animations and interactions
- **Lucide React** for beautiful icons

## ✨ Features

- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Smooth Animations**: Engaging transitions and micro-interactions
- **Modern UI/UX**: Clean, professional design with attention to detail
- **Performance Optimized**: Fast loading and smooth scrolling
- **Accessibility**: Built with semantic HTML and accessibility best practices
- **SEO Friendly**: Proper meta tags and structure

## 📋 Sections

- **Hero**: Introduction with name, title, and call-to-action
- **About**: Professional background and core competencies
- **Skills**: Technical skills with proficiency levels and technologies
- **Experience**: Detailed work history with achievements and projects
- **Education**: Academic background and coursework
- **Contact**: Multiple ways to get in touch

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brisingr
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## � Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Live Site
Visit the live portfolio at: `https://kailashrajh.github.io/kr-cv/`

### Automatic Deployment
- Every push to the `main` branch triggers an automatic build and deployment
- The site is built using Vite and deployed to GitHub Pages
- Build status can be monitored in the Actions tab of the repository

### Manual Deployment
If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` folder

### GitHub Pages Setup
To enable GitHub Pages for your repository:
1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select "GitHub Actions"
4. The workflow will handle the rest automatically

## �📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The primary color palette uses blue tones but can be easily adjusted.

### Content
All content is defined within the individual components in the `src/components` directory:
- Personal information in `Hero.tsx` and `Contact.tsx`
- Professional experience in `Experience.tsx`
- Skills and technologies in `Skills.tsx`
- Education details in `Education.tsx`

### Animations
Animations are handled by Framer Motion and can be customized in each component's motion variants.

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactive elements

## 🌟 Performance

- Lazy loading for images
- Optimized animations
- Minimal bundle size
- Fast loading times

## 📞 Contact

**Kailash Rajh**
- Email: kailash.rajh@gmail.com
- Phone: 071-605-3159
- Location: South Africa

## 📄 License

This project is for personal portfolio use. Feel free to use it as inspiration for your own portfolio!

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Tech Stack

## Core Technologies

### HTML5
- **Version**: HTML5
- **Purpose**: Semantic page structure
- **Key Features Used**:
  - Semantic elements (`<main>`, `<section>`, `<header>`, `<footer>`, `<nav>`)
  - ARIA attributes for accessibility
  - JSON-LD structured data

### CSS3
- **Purpose**: Styling, animations, responsive design
- **Key Features Used**:
  - CSS Custom Properties (variables)
  - `backdrop-filter` for glassmorphism
  - CSS Grid & Flexbox for layout
  - `@keyframes` animations
  - Media queries for responsive design
  - `prefers-reduced-motion` and `prefers-color-scheme`

### JavaScript (ES6+)
- **Purpose**: Interactivity and theme management
- **Key Features Used**:
  - ES6 modules
  - localStorage API
  - Intersection Observer API
  - Event delegation
  - matchMedia API

## Build Tools

### Vite
- **Version**: 7.3.1
- **Purpose**: Development server and production bundler
- **Why Vite**:
  - Instant hot module replacement (HMR)
  - Native ES modules for fast development
  - Optimized production builds
  - Zero configuration for vanilla HTML/CSS/JS

## External Services

### GitHub Stats APIs
- `github-readme-stats.vercel.app` - GitHub statistics cards
- `github-profile-summary-cards.vercel.app` - Profile summary
- `skillicons.dev` - Technology skill icons
- `readme-typing-svg.herokuapp.com` - Animated typing effect
- `visitor-badge.laobi.icu` - Visitor counter

### Fonts
- **Outfit** (Google Fonts) - Modern, clean sans-serif
- Weights: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold)

## File Structure

```
01-profile-readme/
├── index.html       # Main HTML with SEO/accessibility
├── style.css        # All styles with theme support
├── main.js          # Theme toggle & interactions
├── package.json     # Project config & scripts
├── .github/
│   └── workflows/
│       └── deploy.yml  # CI/CD pipeline
└── docs/
    ├── GETTING_STARTED.md
    ├── FEATURES.md
    ├── STACK.md
    └── DEPLOY.md
```

## Bundle Size

| File | Size (gzip) |
|------|-------------|
| HTML | ~2.5 KB |
| CSS | ~2.0 KB |
| JS | ~1.0 KB |
| **Total** | **~5.5 KB** |

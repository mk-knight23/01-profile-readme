# Getting Started

This guide will help you set up and customize this profile template.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+ 
- npm or yarn
- Git

## Installation

### Option 1: Clone

```bash
git clone https://github.com/mk-knight23/01-profile-readme.git
cd 01-profile-readme
npm install
npm run dev
```

### Option 2: Use as Template

Click the "Use this template" button on GitHub to create your own repository.

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mk-knight23/01-profile-readme)

## Customization

### 1. Personal Information

Edit `index.html`:

```html
<!-- Your name -->
<h1>Hi, I'm <span class="gradient-text">YOUR NAME</span></h1>

<!-- Your roles -->
<img src="https://readme-typing-svg.herokuapp.com?...&lines=Your+Role+1;Your+Role+2">
```

### 2. GitHub Stats

Replace `mk-knight23` with your GitHub username:

```html
<img src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME...">
```

### 3. Tech Stack

Update the skill icons URL:

```html
<img src="https://skillicons.dev/icons?i=react,vue,python,...">
```

Browse available icons at [skillicons.dev](https://skillicons.dev)

### 4. Social Links

Update links in the footer section:

```html
<a href="https://twitter.com/YOUR_HANDLE">Twitter</a>
<a href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
```

### 5. Colors

Edit CSS custom properties in `style.css`:

```css
:root {
    --accent: #a78bfa;        /* Primary accent color */
    --accent-secondary: #ec4899; /* Secondary accent */
}
```

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

## Next Steps

- Update meta tags with your information
- Replace `og-image.png` with your preview image
- Deploy to Vercel or Netlify

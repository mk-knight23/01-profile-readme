# Features

## Design

### Glassmorphism UI
- Frosted glass effect panels with `backdrop-filter: blur()`
- Semi-transparent backgrounds with subtle borders
- Smooth hover animations with lift effect

### Animated Background
- Three floating gradient blobs
- Subtle movement animations
- Non-intrusive visual interest

### Dark/Light Mode
- System preference detection via `prefers-color-scheme`
- Manual toggle with persistent localStorage
- Smooth transition between themes
- Keyboard shortcut: `Alt + T`

## Accessibility

### Skip Link
- Hidden link appears on focus
- Allows keyboard users to skip to main content

### ARIA Labels
- All interactive elements properly labeled
- Semantic HTML structure with landmarks
- Section headings linked with `aria-labelledby`

### Keyboard Navigation
- All elements focusable via Tab
- Visible focus indicators
- Theme toggle via Alt+T

### Reduced Motion
- `prefers-reduced-motion` media query support
- Animations disabled for users who prefer reduced motion

## SEO

### Meta Tags
- Title, description, keywords
- Author and robots directives
- Theme color for mobile browsers

### Social Previews
- OpenGraph tags for Facebook/LinkedIn
- Twitter Card tags
- Preview image support

### Structured Data
- JSON-LD Person schema
- Job title, skills, social links
- Search engine rich snippet support

## Performance

### Optimizations
- Preconnect to external domains
- Lazy loading for images
- Minimal JavaScript (~2KB)
- CSS custom properties for theming

### Print Styles
- Clean print layout
- Background effects hidden
- Links underlined for visibility

## Template Features

### Fork-Ready
- Clear code comments
- Easy customization points
- Well-structured files

### Deploy Buttons
- One-click Vercel deploy
- One-click Netlify deploy
- GitHub template support

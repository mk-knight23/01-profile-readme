# Deployment Guide

## Vercel (Recommended)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mk-knight23/01-profile-readme)

### Manual Deploy

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production:
   ```bash
   vercel --prod
   ```

## Netlify

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mk-knight23/01-profile-readme)

### Manual Deploy

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

## GitHub Pages

1. Update `vite.config.js` (create if needed):
   ```js
   export default {
     base: '/01-profile-readme/'
   }
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Push `dist` folder to `gh-pages` branch

## Manual/Static Hosting

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload contents of `dist/` folder to your hosting provider

## Environment Variables

This template doesn't require any environment variables. All external API calls are to public services.

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS as instructed

## Troubleshooting

### Images Not Loading
- Ensure external services (skillicons.dev, etc.) are accessible
- Check CORS settings if self-hosting

### Theme Not Persisting
- localStorage must be enabled in browser
- Check for console errors

### Build Fails
- Run `npm install` to ensure dependencies are installed
- Check Node.js version (18+ required)

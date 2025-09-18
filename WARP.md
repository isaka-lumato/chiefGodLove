# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React-based personal portfolio website for Chief Godlove, built with Create React App. The site showcases his work as a motivational speaker, spiritual healer, and social entrepreneur, featuring modern UI components with animations and responsive design.

**Live Site:** https://chiefgodlove.vip/

## Development Commands

### Core Development
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Image & Deployment
```bash
# Compress images for optimization
npm run compress-images

# Build and deploy to production (FTP)
npm run deploy

# Build and deploy using secure environment variables
npm run deploy-secure
```

## Architecture & Component Structure

### Modern UI System
The project uses a **dual-component architecture** with both original and modern variants:

- **Original Components:** `HeroSection`, `AboutMe`, `MyPortfolio` - Basic implementations
- **Modern Components:** `HeroMinimal`, `AboutMeModern`, `MyPortfolioClean` - Enhanced with Framer Motion animations and modern styling
- **Toggle System:** Controlled by `useModernUI` flag in `src/Pages/Home/Homescreen/index.jsx`

### Key Architectural Patterns

1. **Section-Based Layout:** Each major section is a separate component (Hero, About, Portfolio, Mission, Political, etc.)

2. **Styled-JSX Implementation:** Components use `styled-jsx` for component-scoped CSS instead of external stylesheets

3. **Animation System:** Framer Motion for complex animations, AOS (Animate On Scroll) for scroll-based animations

4. **Navigation System:** React Scroll for smooth scrolling between sections with active state management

### Component Hierarchy
```
App.js
├── NavbarMinimal (current active navbar)
├── Home (main page container)
    ├── HeroMinimal (current hero variant)
    ├── AboutMeModern (current about variant) 
    ├── MyPortfolioClean (current portfolio variant)
    ├── ContactMe (achievements section)
    ├── PoliticalSection
    ├── MissionSection 
    ├── CoreValuesSection
    ├── YouTubeSection
    ├── Testimonial
    └── Footer
```

## Styling & Design System

### Theme Colors
- **Primary Red:** `#dc2626` (main brand color)
- **Dark Red:** `#991b1b` (hover states)
- **Text Colors:** `#1e293b` (headings), `#64748b` (body), `#475569` (secondary)
- **Backgrounds:** Gradient combinations of whites and light reds

### Component Styling Approach
- **Styled-JSX:** All styles are component-scoped using `<style jsx>` tags
- **CSS-in-JS:** Styles are co-located with components for better maintainability
- **Responsive Design:** Mobile-first approach with consistent breakpoints

### Animation Libraries
- **Framer Motion:** Complex animations, page transitions, hover effects
- **AOS (Animate On Scroll):** Simple scroll-triggered animations
- **Custom CSS Animations:** Pulse effects, gradients, smooth transitions

## Content Management

### Data Structure
Portfolio content is managed through `src/data/index.json` containing:
- Portfolio/venture items with images, titles, descriptions
- Structured data for easy content updates

### Image Management
- **Source Images:** `public/img_backup/` (original high-quality images)
- **Optimized Images:** `public/img/` (compressed for web)
- **Compression Script:** `compress-images.js` uses Sharp library for optimization

## Deployment System

### FTP Deployment
Two deployment scripts available:

1. **Standard Deploy** (`upload.js`):
   - Direct FTP credentials in file
   - Uploads build folder to `/public_html`

2. **Secure Deploy** (`upload-secure.js`):
   - Uses environment variables from `.env` file
   - Required variables: `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, `FTP_REMOTE_DIR`

### Environment Setup
Create `.env` file for secure deployment:
```env
FTP_HOST=your-ftp-host
FTP_USER=your-ftp-username
FTP_PASSWORD=your-ftp-password
FTP_REMOTE_DIR=/public_html
FTP_SECURE=false
```

## Development Workflow

### Adding New Sections
1. Create new component in `src/Pages/Home/`
2. Follow existing naming convention (e.g., `NewSection.jsx`)
3. Import and add to `src/Pages/Home/Homescreen/index.jsx`
4. Use Framer Motion for animations and styled-jsx for styling

### Modifying Content
1. **Text Content:** Edit directly in component files
2. **Portfolio Items:** Update `src/data/index.json`
3. **Images:** Add to `public/img_backup/`, run `npm run compress-images`

### Component Switching
To switch between UI variants, modify the `useModernUI` boolean in `Homescreen/index.jsx`:
```javascript
const useModernUI = true; // Set to false for original components
```

## Performance Optimizations

- **Image Compression:** Automated Sharp-based image optimization
- **Code Splitting:** React lazy loading where appropriate
- **Smooth Scrolling:** React Scroll for performant navigation
- **Animation Optimization:** Framer Motion with proper viewport settings

## Key Libraries & Dependencies

### Core
- **React 18.2.0** - Main framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Advanced animations
- **AOS** - Scroll animations
- **React Scroll** - Smooth scrolling navigation

### Icons & Media
- **React Icons** - Icon library (FontAwesome, etc.)
- **React Player** - Video player component
- **Swiper** - Touch slider components

### Utilities
- **Sharp** - Image compression (dev dependency)
- **Basic-FTP** - FTP deployment
- **Styled-JSX** - Component-scoped CSS
- **@vercel/speed-insights** - Performance monitoring

## Browser Support
- Modern browsers with ES6+ support
- Mobile-responsive design
- Progressive enhancement approach

## Performance Monitoring
- Vercel Speed Insights integration
- Web Vitals tracking
- Optimized for Core Web Vitals

## Notes for Future Development

1. **Component Architecture:** The dual-component system allows for easy A/B testing of UI variants
2. **Styling Approach:** Styled-JSX keeps styles scoped and prevents conflicts
3. **Animation Performance:** Framer Motion animations use GPU acceleration and proper viewport detection
4. **Content Strategy:** JSON-based content management makes updates straightforward
5. **Deployment Flexibility:** Both secure and direct deployment options available
6. **Image Pipeline:** Automated compression workflow maintains quality while optimizing performance
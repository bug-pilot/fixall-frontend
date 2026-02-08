# FixAll Home Service - Production Code Standards

## Project Overview

FixAll Home Service is a modern React-based website for a professional home service company offering plumbing, electrical, and handyman services in Edison, NJ.

### Key Features
- 5 fully responsive pages (Home, Services, About, Reviews, Contact)
- 9 service categories with custom images
- Google-style customer testimonials with 5-star ratings
- Interactive service area map
- Professional quote request form with validation
- Modern orange/navy/yellow color scheme
- Mobile-first responsive design

## Code Quality Standards

### Testing
- **Test Framework**: Vitest + React Testing Library
- **Test Coverage**: 95 passing tests across all components and pages
- **Command**: `npm test` or `npm run test:ui`

### Linting & Formatting
- **Linter**: ESLint 9.39.2
- **Formatter**: Prettier 3.8.1
- **Command**: `npm run lint`
- **Status**: 0 errors, fully compliant

### Code Organization

```
src/
├── components/          # Reusable React components
│   ├── CTAButton.*      # Call-to-action button (primary/secondary)
│   ├── Header.*         # Navigation header with logo
│   ├── Hero.*           # Hero section (home, services, etc)
│   ├── QuoteForm.*      # Contact form with validation
│   ├── ServiceCard.*    # Individual service card
│   └── TestimonialCard.*# Customer review card
├── pages/               # Route-based pages
│   ├── Home.*           # Homepage with hero, features, testimonials
│   ├── Services.*       # Services listing with 9 services
│   ├── About.*          # About company and values
│   ├── Reviews.*        # Customer testimonials page
│   └── Contact.*        # Contact form and information
├── layout/              # Layout wrapper
│   └── Layout.*         # Header, footer, outlet wrapper
├── pictures/            # Service images
│   ├── leak-repair.png
│   ├── plumbing-services.png
│   ├── Fixture_instalation.png
│   ├── Electrical-services.png
│   ├── Outlet-Switch-Repair.png
│   ├── Lighting-solutions.png
│   ├── Interior-Exterior-Painting.png
│   ├── General-Handyman-Work.png
│   └── Door-WindowRepair.png
├── tests/               # Test files
│   ├── *.test.jsx       # Component and page tests
│   └── setup.ts         # Test configuration
├── App.jsx              # Router configuration
├── main.jsx             # React entry point
├── index.css            # Global styles and CSS variables
└── App.css              # Layout styles
```

## Component Standards

### 1. Functional Components
All components are modern functional React components:
```jsx
function ComponentName({ prop1, prop2 }) {
  return <div>{prop1}</div>;
}

export default ComponentName;
```

### 2. Props Validation
- Props are clearly documented in component comments
- Default values provided where appropriate
- Type hints in comments for clarity

### 3. Styling
- **Architecture**: CSS-in-files (CSS modules would be next upgrade)
- **Naming**: BEM-like naming convention (`.component-name`, `.component-name__element`)
- **Variables**: CSS custom properties in `:root` for theming
- **Breakpoints**: Mobile-first approach with max-width 768px breakpoint

### 4. Component List

#### CTAButton.jsx
- Props: `children`, `onClick`, `href`, `variant` (primary/secondary)
- Handles both button and link elements
- Primary: Orange gradient
- Secondary: White background, white border

#### Header.jsx
- Navigation header with logo
- Active route highlighting
- Responsive mobile menu ready
- CTA button in header for quote requests

#### Hero.jsx
- Reusable hero section
- Props: `headline`, `subheadline`, `children` (actions)
- Navy-to-orange gradient
- Radial gradient overlays for depth
- Responsive typography

#### QuoteForm.jsx
- 5-field form: Name, Email, Phone, Service Type, Message
- Client-side validation
- Error messages with touched state
- Service dropdown with 4 options
- Submit button with form state management

#### ServiceCard.jsx
- Props: `title`, `description`, `icon`, `image`, `tags`
- Image display with fallback
- Orange left border accent
- Gradient icon badges
- Hover animations

#### TestimonialCard.jsx
- Props: `quote`, `author`, `service`, `rating`, `daysAgo`
- Google-style design
- Star rating display (gold/yellow)
- Avatar with first letter
- Timestamp display

## Pages Documentation

### Home Page
- Hero section with CTAs
- Why Choose FixAll (4 feature cards)
- Areas We Serve (map + city list)
- Customer testimonials (3 reviews)

### Services Page
- Hero section
- 9 services organized in 3 categories:
  - Plumbing (3 services)
  - Electrical (3 services)
  - Handyman (3 services)
- Each service has image, description, tags, icon

### About Page
- Hero section
- Company story
- Core values (3 value cards)
- Service area information

### Reviews Page
- Hero section
- All customer testimonials (Google-style cards)
- 5-star ratings
- Customer avatars

### Contact Page
- Hero section
- Contact information
- Contact form
- Service areas list

## Styling System

### Color Variables
```css
:root {
  /* Primary */
  --primary: #ff6b35;           /* Orange - main brand color */
  --primary-dark: #e55a2b;      /* Darker orange */
  --primary-light: #ff8457;     /* Lighter orange */
  
  /* Secondary */
  --secondary: #004e89;         /* Navy blue - headers */
  --secondary-dark: #003d6b;    /* Darker navy */
  --secondary-light: #1a6db8;   /* Lighter blue */
  
  /* Accent */
  --accent: #f7b801;            /* Golden yellow */
  --accent-light: #ffc93a;      /* Light yellow */
  
  /* Neutral */
  --text-dark: #1a1a1a;         /* Dark text */
  --text-light: #555555;        /* Regular text */
  --text-muted: #888888;        /* Muted text */
  --bg-light: #f8f9fa;          /* Light background */
  --bg-white: #ffffff;          /* White background */
}
```

### Typography
- **Font Family**: System fonts (San Francisco, Segoe UI, Roboto, etc.)
- **Font Sizes**: 
  - h1: 3.2rem
  - h2: 2.2rem
  - h3: 1.4rem
  - p: 1rem (default)

### Spacing
- Uses rem units for scalability
- Consistent gap and padding: 1rem, 1.5rem, 2rem, 2.5rem, 3rem, 5rem
- Mobile adjustments: 50-70% of desktop spacing

## Production Checklist

### Code Quality
- [x] All tests passing (95 tests)
- [x] ESLint clean (0 errors)
- [x] No console.log in production code
- [x] No unused imports
- [x] Proper error handling
- [x] Form validation working
- [x] Accessibility standards (semantic HTML)

### Performance
- [x] Lazy loading ready (routing with React Router)
- [x] CSS optimization (tree-shaken by Vite)
- [x] Image optimization (local PNG files, sized appropriately)
- [x] Bundle analysis shows good sizes
- [x] No unnecessary dependencies

### Security
- [x] Form inputs validated
- [x] XSS protection (React escapes by default)
- [x] No hardcoded secrets
- [x] Environment-ready for sensitive data

### SEO & Meta
- [x] Page titles set
- [x] Meta descriptions added
- [x] Semantic HTML used
- [x] Responsive design
- [x] Mobile-first approach

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive down to 320px width

## Deployment Preparation

### Pre-Deployment Steps
1. Run `npm test` - Verify all 95 tests pass
2. Run `npm run lint` - Verify 0 ESLint errors
3. Run `npm run build` - Verify build succeeds
4. Test `npm run preview` - Verify production build works locally

### Environment Variables (if needed in future)
Create `.env` file:
```
VITE_API_URL=https://api.fixall-home-service.com
VITE_GOOGLE_MAPS_KEY=your_key_here
```

### Build Output
```
dist/
├── index.html          # Main entry point
├── assets/
│   ├── index-*.js      # Main bundle
│   ├── vendor-*.js     # Vendor dependencies
│   └── style-*.css     # Global styles
└── pictures/           # Service images
```

## Future Enhancements

Recommended improvements for next phases:

1. **Backend Integration**
   - Form submission endpoint
   - Email notifications
   - Quote request database

2. **Authentication** (if admin panel needed)
   - Login system
   - Admin dashboard
   - Content management

3. **Performance**
   - Image CDN integration
   - Service worker for offline support
   - Code splitting optimization

4. **Features**
   - Multi-language support
   - Dark mode toggle
   - Blog section
   - Client gallery
   - Online booking system

5. **Monitoring**
   - Error tracking (Sentry)
   - Analytics (Google Analytics)
   - Performance monitoring

## References

- React Documentation: https://react.dev
- Vite Documentation: https://vite.dev
- Vitest Documentation: https://vitest.dev
- React Router: https://reactrouter.com
- ESLint: https://eslint.org

## Support

For questions or issues, refer to:
1. Component JSDoc comments
2. Test files for usage examples
3. DEPLOYMENT.md for deployment questions

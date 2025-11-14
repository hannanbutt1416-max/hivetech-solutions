# hive tech solutions - Portfolio Website

A production-ready, SEO-first, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🎨 Brand Identity

- **Name:** hive tech solutions (lowercase in header/wordmark)
- **Theme:** Dark Zink - Cyber-Tech aesthetic
- **Primary Colors:**
  - Dark Zink (`#14141A`) - Base canvas
  - Electric Cyan (`#00D0FF`) - Connectivity & lines
  - Digital Lime (`#75FF00`) - CTAs, success, metrics

## 🚀 Features

### Core Pages
- **Home (/)** - Comprehensive landing page with hero, services, metrics, testimonials, and pricing
- **About (/about)** - Team, values, timeline, and company culture
- **Services (/services)** - Filterable service hub with all offerings
- **Service Detail (/service/:slug)** - Individual service pages with detailed information
- **Work (/work)** - Case studies with filterable categories and detailed metrics
- **Pricing (/pricing)** - Interactive pricing tables with ROI calculator
- **Blog (/blog)** - SEO-optimized content hub with search and filtering
- **Contact (/contact)** - Multi-method contact with forms and info
- **Demo (/demo)** - Consultation booking system
- **Privacy (/privacy)** - Privacy policy
- **Terms (/terms)** - Terms of service

### Key Components

#### Navigation & Layout
- **Header** - Sticky header with mega menu (hover-triggered)
- **Footer** - Comprehensive footer with links and social icons
- **StickyArrowSidebar** - Right-side quick actions panel
- **ScrollToTop** - Auto-scroll on route change

#### Animated Components
- **HeroHub** - Animated SVG hexagon hub with data nodes
- **Marquee** - Horizontal and vertical infinite scroll components
- **Motion Effects** - Framer Motion animations throughout

### Design System

#### Typography
- **Primary:** Poppins (weights: 300, 400, 600, 800)
- **Data/Metrics:** Space Mono (weight: 700)

#### Color Tokens
```css
--bg-primary: #14141A        /* Dark Zink */
--bg-surface: #1C1C22        /* Zinc Shadow */
--accent-cyan: #00D0FF       /* Electric Cyan */
--accent-plasma: #00B5E2     /* Plasma Blue */
--accent-lime: #75FF00       /* Digital Lime */
--accent-cyber-lime: #99FF33 /* Cyber Lime */
--text-primary: #FFFFFF      /* Pure White */
--text-neutral: #C2C2CC      /* Cool Silver */
--text-secondary: #8A8A94    /* Graphite Grey */
```

#### Visual Effects
- Hexagonal background patterns
- Neon glow effects (cyan and lime)
- Card hover animations with border glow
- Smooth transitions and micro-interactions
- Parallax scrolling effects

### Accessibility Features
- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Focus visible states
- Screen reader friendly
- Respects `prefers-reduced-motion`
- WCAG AA compliant color contrast

### Performance Optimizations
- Lazy loading animations
- Optimized re-renders with React best practices
- Efficient state management
- Smooth 60fps animations
- Lightweight components

## 🛠 Tech Stack

- **React** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

## 📁 Project Structure

```
/
├── components/
│   ├── Header.tsx              # Main navigation with mega menu
│   ├── Footer.tsx              # Site footer
│   ├── MegaMenu.tsx           # Dropdown mega menu
│   ├── StickyArrowSidebar.tsx # Quick actions sidebar
│   ├── HeroHub.tsx            # Animated hero visualization
│   ├── Marquee.tsx            # Infinite scroll component
│   ├── ScrollToTop.tsx        # Route change scroll handler
│   └── SEOMeta.tsx            # SEO meta tags component
├── pages/
│   ├── Home.tsx               # Landing page
│   ├── About.tsx              # Company information
│   ├── Services.tsx           # Services hub
│   ├── ServiceDetail.tsx      # Individual service pages
│   ├── Work.tsx               # Case studies
│   ├── Pricing.tsx            # Pricing & ROI calculator
│   ├── Blog.tsx               # Blog listing
│   ├── Contact.tsx            # Contact page
│   ├── Demo.tsx               # Demo booking
│   ├── Privacy.tsx            # Privacy policy
│   └── Terms.tsx              # Terms of service
├── styles/
│   └── globals.css            # Global styles & tokens
└── App.tsx                    # Main app component

```

## 🎯 Service Offerings

1. **Local SEO** - Dominate local search results
2. **Technical SEO** - Core Web Vitals optimization
3. **Web Applications** - Custom business solutions
4. **Workflow Automation** - Eliminate manual tasks
5. **SaaS Platforms** - Scalable cloud software
6. **GMB Optimization** - Google Business Profile mastery
7. **CRO** - Conversion rate optimization
8. **Process Optimization** - Efficiency improvements

## 🎨 Design Patterns

### Cards
All cards use the `.card-tech` class with hover effects:
- 8px border radius
- Clipped corner (top-right)
- Cyan border glow on hover
- Smooth transitions

### CTAs
- Primary: Lime background with glow effect
- Secondary: Cyan border with transparent background
- Ghost: Text only with underline animation

### Animations
- Page entrance: Fade + slide up
- Scroll triggers: IntersectionObserver with viewport
- Hover effects: Scale, rotate, and color transitions
- Stagger children for list animations

## 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices
- **Breakpoints:**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Touch Friendly:** Large tap targets, swipe gestures
- **Mobile Menu:** Slide-in panel navigation

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card integration
- Canonical URLs
- Structured data ready (JSON-LD)
- Mobile-friendly design
- Fast load times
- Accessible alt text
- Breadcrumb navigation

## 🚀 Getting Started

The application is ready to run. All routes are configured and functional.

### Available Routes
- `/` - Home page
- `/about` - About us
- `/services` - Services hub
- `/service/local-seo` - Local SEO service
- `/service/technical-seo` - Technical SEO service
- `/service/webapps` - Web Applications service
- `/service/automations` - Automation service
- `/service/cro` - CRO service
- `/service/saas` - SaaS service
- `/service/gmb` - GMB service
- `/service/process` - Process Optimization
- `/work` - Case studies
- `/pricing` - Pricing plans
- `/blog` - Blog listing
- `/contact` - Contact page
- `/demo` - Schedule demo
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## 💡 Key Interactions

1. **Mega Menu** - Hover over "Services" in header
2. **Sticky Sidebar** - Click arrow on right side of screen
3. **Marquees** - Horizontal client scroll, vertical reviews scroll
4. **Filters** - Click category chips on Services, Work, and Blog pages
5. **ROI Calculator** - Adjust sliders on Pricing page
6. **Forms** - Submit contact, demo booking, and quick contact forms
7. **Pricing Toggle** - Switch between monthly/yearly billing

## 🎭 Brand Voice

- **Professional yet approachable**
- **Data-driven and results-focused**
- **Technical but accessible**
- **Future-forward and innovative**

## 📊 Metrics Display

All metrics use the `data-font` class (Space Mono) with lime accent color:
- ROI percentages
- Time saved
- Conversion improvements
- Client retention rates
- Performance scores

## 🔐 Legal & Compliance

- GDPR-ready privacy policy
- Comprehensive terms of service
- Cookie consent ready
- Data protection guidelines
- Transparent data collection

## 🎨 Custom Utilities

- `.hex-pattern` - Hexagonal background
- `.glow-cyan` - Cyan box shadow
- `.glow-lime` - Lime box shadow
- `.text-gradient-cyan` - Cyan gradient text
- `.text-gradient-lime` - Lime gradient text
- `.clip-corner` - Clipped corner shape
- `.data-font` - Space Mono monospace font

## 📈 Performance Goals

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms
- Lighthouse Score: 90+

---

Built with ❤️ by hive tech solutions

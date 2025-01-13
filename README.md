# IQ7 Smart Locks - Official Website

A modern, responsive website for IQ7 Smart Locks showcasing our innovative security solutions for homes and businesses.

## Features

### Modern Hero Section
- Full-width hero banner with dynamic content
- Aesthetic call-to-action buttons with glassmorphism effects
- Smooth scroll functionality to products section
- WhatsApp integration for instant contact

### Smart Features Showcase
- Interactive feature cards with custom SVG icons
- Modern grid layout with hover animations
- Product images with WhatsApp integration
- Responsive design across all devices

### Product Grid
- Dynamic product filtering (All Products, Drawer Locks, Door Locks)
- Modern product cards with discount displays
- "Explore More Products" card with WhatsApp integration
- Smooth animations and transitions

### Testimonials Section
- Dynamic testimonial carousel using Swiper
- Modern avatar system with initials
- Star rating display
- Smooth animations and transitions

### Trusted Partners
- Showcase of prestigious clients (Indian Oil, OYO)
- Interactive logo display with zoom effects
- Professional gradient backgrounds
- Responsive layout

### Contact Integration
- WhatsApp integration for instant communication
- Location map integration
- Business hours display
- Modern contact cards with hover effects

## Technical Stack
- Next.js 14 with TypeScript
- TailwindCSS for modern styling
- Framer Motion for smooth animations
- Swiper for modern carousels
- React Intersection Observer for scroll animations
- GSAP for advanced animations
- Modern responsive design principles
- SEO optimized structure

## Project Structure
```
iq7/
├── public/
│   └── images/          # Static images and assets
├── components/         # Reusable UI components
│   ├── HeroSection.tsx
│   ├── ProductGrid.tsx
│   ├── SmartFeatures.tsx
│   └── ...
├── pages/             # Next.js pages
│   ├── _app.tsx
│   └── index.tsx
├── styles/           # Global styles
│   └── globals.css
├── next.config.js    # Next.js configuration
├── tailwind.config.js # Tailwind configuration
└── package.json      # Dependencies and scripts
```

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/iq7.git
cd iq7
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

4. Build for production:
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint for code quality

## Deployment

This project is optimized for deployment on Vercel:
1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

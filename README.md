# BrewCraft ☕

A modern, fully-functional coffee shop e-commerce website built with React and TypeScript. Experience the art of coffee brewing with our premium selection of handcrafted beverages and gourmet food items.


## 🌟 Features

### 🛍️ E-commerce Functionality
- **Complete Shopping Cart** - Add, remove, and manage items with real-time updates
- **Order Management** - Full order flow from browsing to confirmation
- **Payment Gateway** - Integrated UPI QR code payments and card payment options
- **Order Tracking** - Real-time order status and confirmation system


### 🎨 Professional Design
- **Modern UI/UX** - Clean, sophisticated design with coffee-themed aesthetics
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Subtle Framer Motion animations for enhanced user experience
- **Professional Color Scheme** - Elegant brown and gold palette inspired by coffee

### 📱 Core Pages
- **Homepage** - Hero section with featured products and call-to-action
- **Menu** - Comprehensive catalog with Coffee, Food, and Specialty items
- **Locations** - Store finder with addresses and contact information
- **About Us** - Brand story and company information
- **Cart & Checkout** - Complete purchase flow with payment integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full type coverage
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing for SPA navigation

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and micro-interactions
- **Custom Color Palette** - Coffee-inspired design system
- **Google Fonts** - Professional typography (Inter, Playfair Display)

### State Management
- **React Context** - Global cart state management
- **Custom Hooks** - Reusable logic for cart operations

### UI Components
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible primitives
- **Lucide React** - Beautiful, customizable icons

### Additional Features
- **Sonner** - Toast notifications for user feedback
- **QR Code Integration** - UPI payment QR codes
- **Responsive Images** - Optimized loading and display

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brewcraft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Client-specific builds
npm run build:client # Build client application
npm run dev:client   # Start client development server

# Server
npm run build:server # Build server application
npm run dev:server   # Start server development

# Linting & Formatting
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🏗️ Project Structure

```
brewcraft/
├── client/                 # Frontend React application
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   └── Layout.tsx     # Main layout component
│   ├── contexts/          # React Context providers
│   │   └── CartContext.tsx # Global cart state
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Application pages/routes
│   │   ├── Index.tsx      # Homepage
│   │   ├── Menu.tsx       # Menu page
│   │   ├── Cart.tsx       # Shopping cart
│   │   ├── Payment.tsx    # Payment gateway
│   │   └── ...           # Other pages
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── global.css        # Global styles
├── server/               # Backend API (if applicable)
├── public/               # Static assets
├── netlify/              # Netlify deployment config
└── dist/                 # Production build output
```

## 🌐 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build:client
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist/spa` folder to Netlify
   - Or connect your Git repository for automatic deployments

3. **Configuration**
   - Build command: `npm run build:client`
   - Publish directory: `dist/spa`
   - Node version: 18+

### Manual Deployment

The production build is located in `dist/spa/` and can be deployed to any static hosting service.

## 🎯 Key Features Explained

### Shopping Cart System
- **Global State** - Cart persists across page navigation
- **Real-time Updates** - Instant cart count and total updates
- **Size Selection** - Multiple size options for beverages
- **Quantity Management** - Increase/decrease item quantities

### Payment Integration
- **UPI QR Codes** - Scan and pay with any UPI app
- **Card Payments** - Secure card payment processing
- **Order Confirmation** - Immediate confirmation with order details

### Responsive Design
- **Mobile-First** - Optimized for mobile devices
- **Tablet Support** - Perfect tablet viewing experience
- **Desktop Enhanced** - Rich desktop experience with hover effects

## 🎨 Design System

### Color Palette
- **Primary**: Coffee browns (#2F241D, #815731)
- **Secondary**: Gold accents (#F0A90A, #D4AF37)
- **Background**: Warm cream (#FAF7F5)
- **Text**: Dark brown (#2F241D)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Weights**: 400, 500, 600, 700

### Animation
- **Hover Effects**: Subtle lift animations (y: -5px)
- **Transitions**: Smooth 300ms transitions
- **Loading States**: Elegant loading indicators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


---

**Built with ❤️ and lots of ☕ by the BrewCraft team**

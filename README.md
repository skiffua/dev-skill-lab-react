# Skill Lab - React Interview Pet Project

A modern, full-featured React application built with Next.js 16, React 19, and TypeScript, designed as a portfolio project for technical interviews.

## Features

### 🎨 **3 Theme System**
- **Light Theme** - Clean, bright design
- **Dark Theme** - Easy on the eyes
- **Ocean Theme** - Unique blue gradient theme
- Powered by CSS custom properties
- Theme persistence via localStorage
- No flash of unstyled content (FOUC)

### 🔐 **Authentication**
- Client-side authentication using localStorage
- Protected routes with automatic redirects
- Demo credentials:
  - Username: `demo`
  - Password: `demo123`

### 📱 **6 Content Pages**
1. **Алгоритми** (`/algorithms`) - Algorithms showcase
2. **JavaScript** (`/javascript`) - Modern JS features
3. **CSS Features** (`/css-showcase`) - CSS techniques
4. **Components** (`/components-demo`) - React patterns
5. **Animations** (`/animations`) - Animation examples
6. **Data Visualization** (`/data-visualization`) - Charts & graphs

### 🎯 **Modern Tech Stack**
- **Next.js 16.3.8** - App Router with route groups
- **React 19.2.8** - Latest React features
- **TypeScript 5** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **CSS Custom Properties** - Dynamic theming

### ✨ **UI/UX Features**
- Responsive design (mobile-first)
- Smooth animations and transitions
- Mobile hamburger menu
- Active link highlighting
- Loading states
- Modern, professional design

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
dev-skill-lab-react/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth route group
│   │   └── login/                # Login page
│   ├── (protected)/              # Protected route group
│   │   ├── algorithms/
│   │   ├── javascript/
│   │   ├── css-showcase/
│   │   ├── components-demo/
│   │   ├── animations/
│   │   ├── data-visualization/
│   │   └── layout.tsx            # Protected layout with auth
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles & themes
├── components/
│   ├── auth/                     # Auth components
│   ├── layout/                   # Header, Footer, Navigation
│   ├── theme/                    # Theme toggle
│   └── ui/                       # Reusable UI components
├── lib/
│   ├── contexts/                 # React contexts
│   ├── hooks/                    # Custom hooks
│   ├── types/                    # TypeScript types
│   └── utils/                    # Utility functions
└── config/                       # App configuration
```

## How to Use

1. **Visit the landing page** at `/` - showcases the project features
2. **Click "Get Started"** or **"Sign In"** to go to the login page
3. **Enter demo credentials**: `demo` / `demo123`
4. **Explore the 6 content pages** using the navigation menu
5. **Switch themes** using the theme toggle buttons in the header
6. **Test responsive design** by resizing your browser
7. **Logout** using the logout button in the header

## Key Technical Highlights

### Theme System
- CSS custom properties mapped to Tailwind utilities
- Three complete color schemes
- Smooth theme transitions
- Inline script prevents FOUC
- Theme persistence across sessions

### Authentication Flow
- AuthContext provides auth state globally
- Protected layout checks authentication on mount
- Redirects to login with return URL
- localStorage stores user session
- Simple but demonstrates auth patterns

### Component Architecture
- Reusable UI components (Button, Input, Card, etc.)
- Composition patterns with Container and layouts
- Proper TypeScript typing with forwardRef
- Clean separation of concerns

### Routing
- Route groups for organization (`(auth)`, `(protected)`)
- Different layouts per route group
- File-based routing with App Router
- Client and server component patterns

## Adding Content

Each page has placeholder `ContentSection` components. To add actual content:

1. Create demo components in `components/sections/`
2. Import and use them in the respective page files
3. Add interactive examples, code snippets, or visualizations

## Interview Talking Points

This project demonstrates:
- ✅ Modern React patterns (hooks, contexts, composition)
- ✅ Next.js App Router expertise
- ✅ TypeScript proficiency
- ✅ CSS theming with custom properties
- ✅ Client-side state management
- ✅ Authentication flow implementation
- ✅ Responsive design
- ✅ Component architecture
- ✅ Clean code organization
- ✅ Professional UI/UX

## License

This is a portfolio/interview project. Feel free to use as reference.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

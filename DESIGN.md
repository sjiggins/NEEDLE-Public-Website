# NEEDLE Website - Visual Design Preview

## Design Philosophy

The NEEDLE website features a modern, scientific aesthetic that balances professionalism with visual interest. The design evokes particle physics through subtle visual cues while maintaining readability and usability.

## Color Palette

### Light Theme
- **Background**: Clean white (#ffffff) with light gray accents (#f8f9fa)
- **Text**: Dark gray (#1a1a1a) for maximum readability
- **Accents**: Electric blue (#0066cc) with purple gradients (#a855f7)
- **Particle Colors**: 
  - Cyan (#00d4ff) - High-energy particles
  - Orange (#ff6b35) - Collision energy
  - Purple (#a855f7) - Secondary particles

### Dark Theme
- **Background**: Deep space black (#0d1117) with dark gray accents (#161b22)
- **Text**: Light gray (#e6edf3) for comfortable reading
- **Accents**: Bright blue (#58a6ff) maintaining brand consistency
- **Particle Colors**: Same as light theme but with enhanced glow

## Typography

### Display Text (Headings)
- **Font**: Space Mono (monospace)
- **Style**: Bold, technical, evokes code and precision
- **Usage**: Main headings, navigation, hero title

### Body Text
- **Font**: IBM Plex Sans
- **Style**: Clean, modern, highly readable
- **Usage**: Paragraphs, descriptions, general content

### Accent Text (Code/Data)
- **Font**: JetBrains Mono
- **Style**: Monospace, technical
- **Usage**: Status labels, technical details

## Page-by-Page Breakdown

### Landing Page (index.html)

**Hero Section:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              Fixed Navigation Bar                   │
│     [NEEDLE Logo]    [Home] [Team] [Project] [🌙]  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│                  Particle Background                │
│           (Animated collision effects)              │
│                                                     │
│                    [Logo - "N"]                     │
│                                                     │
│                    NEEDLE                           │
│        (Large gradient text, 4.5rem)               │
│                                                     │
│   Next-generation Orchestration and ML              │
│   Infrastructure for High-Energy Physics            │
│              (Subtitle, 1.4rem)                     │
│                                                     │
│    [Explore Project]  [Meet the Team]              │
│    (Blue button)      (Outlined button)            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Overview Section:**
- Centered content, max-width 1400px
- Section title with decorative underline
- Introductory text in highlighted box (border-left accent)
- Three feature cards in responsive grid:
  - 🔬 Research Focus
  - ⚙️ Infrastructure
  - 🌐 Collaboration
- Cards have hover effects (lift up, change border color)

**Visual Effects:**
- Particle canvas background with animated dots and connections
- Subtle gradient overlays
- Logo floating animation
- Fade-in animations on scroll
- Smooth color transitions

### Team Page (pages/team.html)

```
┌─────────────────────────────────────────────────────┐
│                Navigation Bar                       │
├─────────────────────────────────────────────────────┤
│                                                     │
│                   Our Team                          │
│             (Centered title with underline)         │
│                                                     │
│    A diverse, collaborative team of physicists...   │
│                (Subtitle text)                      │
│                                                     │
├──────────┬──────────┬──────────┬──────────┤
│          │          │          │          │
│  [Photo] │  [Photo] │  [Photo] │  [Photo] │
│          │          │          │          │
│   Name   │   Name   │   Name   │   Name   │
│  Title   │  Title   │  Title   │  Title   │
│   Role   │   Role   │   Role   │   Role   │
│          │          │          │          │
│  Desc... │  Desc... │  Desc... │  Desc... │
│          │          │          │          │
│ Affil... │ Affil... │ Affil... │ Affil... │
│          │          │          │          │
├──────────┼──────────┼──────────┼──────────┤
│  [Photo] │  [Photo] │  [Photo] │  [Photo] │
│   ...    │   ...    │   ...    │   ...    │
└──────────┴──────────┴──────────┴──────────┘
```

**Card Design:**
- Light background with border
- Circular profile images (120px)
- Gradient top border (appears on hover)
- Hover effect: Lifts card up with shadow
- Fade-in animation as cards enter viewport
- Responsive: 4 columns → 2 columns → 1 column

### Project Page (pages/project.html)

```
┌─────────────────────────────────────────────────────┐
│                Navigation Bar                       │
├─────────────────────────────────────────────────────┤
│                                                     │
│              Project Overview                       │
│                                                     │
│              Mission Statement                      │
│         (Highlighted box with accent)               │
│                                                     │
│  ┌─────────────────────────────────────┐          │
│  │   📚 Software Stack                 │          │
│  │   • Core Technologies               │          │
│  │   • Development Tools               │          │
│  └─────────────────────────────────────┘          │
│                                                     │
│  ┌─────────────────────────────────────┐          │
│  │   🏗️ Architecture Design            │          │
│  │   • DAG-Based Orchestration         │          │
│  │   • Key Features                    │          │
│  └─────────────────────────────────────┘          │
│                                                     │
│  ┌─────────────────────────────────────┐          │
│  │   🤖 Machine Learning Research      │          │
│  │   • Current Research Areas          │          │
│  │   • Models and Methods              │          │
│  └─────────────────────────────────────┘          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Status Cards:**
- Full-width cards stacked vertically
- Icon + Title header
- Detailed content with lists
- Hover effect: Border color change, subtle shadow
- Fade-in on scroll

### Navigation Bar

**Design Elements:**
- Fixed position (stays at top during scroll)
- Translucent background with blur effect
- Logo with gradient "N"
- Links with underline animation on hover
- Theme toggle button (moon/sun icon)
- Becomes opaque with shadow on scroll

### Footer

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   © 2026 NEEDLE Project. Advancing Machine         │
│   Learning for High-Energy Physics at the LHC.     │
│                                                     │
│     [GitHub]  [Contact]  [Documentation]           │
│                                                     │
│        Built with Jekyll • Hosted on GitHub Pages  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Interactive Elements

### Theme Toggle
- **Light Mode**: 🌙 Moon icon
- **Dark Mode**: ☀️ Sun icon
- **Animation**: 180° rotation on toggle
- **Persistence**: Saves to localStorage
- **Smooth Transition**: All colors fade over 0.3s

### Hover Effects
- **Links**: Underline slides in from left
- **Buttons**: Lift up 2px, enhanced shadow
- **Cards**: Lift 5px, border color change, shadow
- **Navigation Links**: Color change + underline

### Scroll Animations
- **Fade In**: Opacity 0 → 1, translateY(20px) → 0
- **Stagger**: Sequential delays for multiple elements
- **Intersection Observer**: Triggers when 10% visible

### Loading Animations
- **Hero**: Fade in from bottom with delays
- **Logo**: Float up and down continuously
- **Particles**: Slow movement, connecting lines

## Responsive Breakpoints

### Desktop (> 1400px)
- Max content width: 1400px
- 4-column team grid
- Full navigation

### Tablet (768px - 1400px)
- Flexible width with padding
- 2-column team grid
- Condensed navigation

### Mobile (< 768px)
- Single column layout
- 1-column team grid
- Hamburger menu (not implemented, should be added)
- Larger touch targets
- Stacked buttons

## Animation Timing

- **Fast**: 0.2s (hover effects, link underlines)
- **Standard**: 0.3s (theme toggle, card hover)
- **Smooth**: 0.6s (fade-in animations)
- **Slow**: 3s (logo float), 20s (particle background)

## Accessibility Features

- **Color Contrast**: WCAG AA compliant
- **Focus States**: Visible keyboard navigation
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Required for images
- **Smooth Scroll**: Respects reduced motion preferences
- **Theme Toggle**: Clear visual indication

## Visual Hierarchy

1. **Hero Title**: Largest, gradient, impossible to miss
2. **Section Titles**: Large, monospace, distinctive underline
3. **Card Headers**: Icon + bold title
4. **Body Text**: Readable size, good line height
5. **Meta Information**: Smaller, muted color

## Brand Elements

- **Logo**: Letter "N" in gradient square
- **Colors**: Blue to purple gradient (brand signature)
- **Particle Motif**: Represents LHC collisions
- **Monospace Typography**: Evokes code, precision, science
- **Clean Minimalism**: Professional, modern, focused

## Design Inspiration

- **Scientific Visualization**: Particle collision imagery
- **Tech Startups**: Modern, professional aesthetic
- **Research Institutions**: Academic credibility
- **Dark Themes**: Popular in developer communities

---

The design successfully balances scientific professionalism with modern web aesthetics, creating a memorable and functional experience for visitors.

# NEEDLE Website - Project Structure

## Complete File Tree

```
needle-website/
│
├── .github/
│   └── workflows/
│       └── jekyll.yml              # GitHub Actions deployment workflow
│
├── _data/
│   └── team.yml                    # Team member data (YAML)
│
├── _includes/
│   ├── footer.html                 # Site footer component
│   └── header.html                 # Navigation header component
│
├── _layouts/
│   └── default.html                # Main layout template
│
├── _sass/                          # (empty - CSS in assets/)
│
├── assets/
│   ├── css/
│   │   └── style.css              # Main stylesheet (3000+ lines)
│   ├── images/
│   │   ├── lhc-collision-bg.svg   # Background image (particle collisions)
│   │   ├── needle-logo.svg        # Project logo
│   │   └── team/                  # (create this folder for team photos)
│   └── js/
│       └── main.js                # JavaScript (theme toggle, animations)
│
├── pages/
│   ├── project.html               # Project details page
│   └── team.html                  # Team members page
│
├── .gitignore                      # Git ignore rules
├── _config.yml                     # Jekyll configuration
├── CUSTOMIZATION.md               # Step-by-step customization guide
├── DEPLOYMENT.md                  # Deployment instructions
├── Gemfile                        # Ruby dependencies
├── index.html                     # Landing page (homepage)
├── LICENSE                        # MIT License
├── QUICKSTART.md                  # Quick start guide
├── README.md                      # Main documentation
└── STRUCTURE.md                   # This file
```

## Key Files Explained

### Configuration Files

**_config.yml**
- Jekyll site configuration
- Site title, description, URL settings
- Plugin configuration
- Build settings

**Gemfile**
- Ruby gem dependencies
- Jekyll version
- Required plugins
- GitHub Pages compatibility

**.gitignore**
- Files to exclude from version control
- Jekyll build directories
- System files

### Layout & Templates

**_layouts/default.html**
- Base HTML structure
- Includes header and footer
- Loads stylesheets and scripts
- SEO tags

**_includes/header.html**
- Navigation menu
- Logo
- Theme toggle button
- Mobile-responsive

**_includes/footer.html**
- Footer content
- Contact information
- Social links
- Copyright notice

### Content Pages

**index.html**
- Landing page with hero section
- Project overview
- Key features showcase
- Animated background effects

**pages/team.html**
- Team members grid
- Auto-populated from team.yml
- Responsive card layout
- Scroll animations

**pages/project.html**
- Detailed project information
- Software stack details
- Architecture description
- ML research overview
- Status updates
- Publications list

### Data Files

**_data/team.yml**
- Team member information (YAML format)
- Name, title, role, description
- Affiliation details
- Image URLs
- Easy to update without touching HTML

### Assets

**assets/css/style.css**
- Complete styling system
- CSS custom properties (variables)
- Light/dark theme support
- Responsive design
- Animations and transitions
- Component styles
- Utility classes

**assets/js/main.js**
- Theme toggle functionality
- Smooth scrolling
- Scroll animations
- Intersection Observer for fade-ins
- Particle background animation
- Navbar effects

**assets/images/**
- Logo files
- Background images
- Team photos (to be added)
- Icons

### Documentation

**README.md**
- Complete project documentation
- Installation instructions
- Usage guide
- Customization tips
- Troubleshooting

**QUICKSTART.md**
- Fast setup guide
- 5-minute deployment
- Essential steps only

**DEPLOYMENT.md**
- Detailed deployment instructions
- Step-by-step GitHub Pages setup
- Custom domain configuration
- Troubleshooting

**CUSTOMIZATION.md**
- Comprehensive checklist
- All customization options
- File locations
- Testing checklist

**STRUCTURE.md** (this file)
- Project organization
- File purposes
- Directory structure

### GitHub Actions

**.github/workflows/jekyll.yml**
- Automated deployment workflow
- Builds site on push to main
- Deploys to GitHub Pages
- Ruby and Jekyll setup

## Directory Purposes

### `_includes/`
Reusable HTML components that can be included in layouts and pages using `{% include filename.html %}`

### `_layouts/`
HTML templates that wrap around page content. Pages specify which layout to use in their front matter.

### `_data/`
YAML, JSON, or CSV files containing structured data accessible in templates via `site.data`

### `_sass/`
Sass/SCSS files (optional). Currently using plain CSS in assets/css/

### `assets/`
Static files (CSS, JavaScript, images) that are copied to the built site

### `pages/`
Additional site pages (Team, Project). Can also be in root directory.

### `.github/workflows/`
GitHub Actions workflow definitions for CI/CD

## Data Flow

1. **Content** is written in HTML files with Liquid templating
2. **Data** is stored in `_data/team.yml` for easy updates
3. **Styles** are applied from `assets/css/style.css`
4. **Interactivity** is added via `assets/js/main.js`
5. **Layouts** wrap content with header/footer from `_includes/`
6. **Jekyll** builds everything into a static site in `_site/`
7. **GitHub Actions** deploys `_site/` to GitHub Pages

## Build Process

```
Source Files → Jekyll Processing → Static Site (_site/) → GitHub Pages
```

### What Jekyll Does:

1. Reads `_config.yml` for settings
2. Processes Liquid templating (`{% %}` and `{{ }}`)
3. Compiles layouts and includes
4. Injects data from `_data/`
5. Copies assets to `_site/`
6. Generates final HTML files

## Customization Workflow

1. **Content**: Edit HTML files and `_data/team.yml`
2. **Styling**: Modify `assets/css/style.css` (CSS variables at top)
3. **Functionality**: Update `assets/js/main.js`
4. **Structure**: Adjust layouts in `_layouts/` and `_includes/`
5. **Configuration**: Change `_config.yml` for site-wide settings

## File Size Summary

- **Total HTML**: ~500 lines across all pages
- **CSS**: ~1,000 lines (style.css)
- **JavaScript**: ~200 lines (main.js)
- **YAML Data**: ~100 lines (team.yml)
- **Documentation**: ~1,500 lines combined

## External Dependencies

- **Jekyll**: Static site generator
- **GitHub Pages**: Free hosting
- **Google Fonts**: IBM Plex Sans, JetBrains Mono, Space Mono
- **No external CSS frameworks** (fully custom)
- **No JavaScript libraries** (vanilla JS)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6 JavaScript
- Progressive enhancement approach

## Performance Features

- Minimal external dependencies
- Optimized CSS (no bloat)
- Lazy loading for images (via Intersection Observer)
- Local font loading from Google Fonts
- Efficient animations (CSS-based)

---

This structure provides a maintainable, scalable foundation for the NEEDLE project website.

# Website Customization Checklist

Use this checklist to customize the NEEDLE website for your project.

## Essential Changes (Do These First!)

### 1. Site Configuration (`_config.yml`)

- [ ] Change `title` to your project name
- [ ] Update `email` with your contact email
- [ ] Modify `description` to match your project
- [ ] Set `url` to your GitHub Pages URL or custom domain
- [ ] Update `baseurl` if needed (leave empty for `username.github.io/repo-name`)

### 2. Landing Page (`index.html`)

- [ ] Update hero title and subtitle
- [ ] Modify project description in overview section
- [ ] Update the three status cards (Research Focus, Infrastructure, Collaboration)
- [ ] Replace placeholder text with your actual project information

### 3. Team Members (`_data/team.yml`)

- [ ] Replace sample team members with your actual team
- [ ] For each member, update:
  - [ ] Name
  - [ ] Title
  - [ ] Role
  - [ ] Description
  - [ ] Affiliation
  - [ ] Image URL (upload photos to `assets/images/team/`)

### 4. Project Page (`pages/project.html`)

- [ ] Update mission statement
- [ ] Modify Software Stack section with your actual technologies
- [ ] Update Architecture Design section
- [ ] Replace Machine Learning Research content
- [ ] Update Recent Progress milestones
- [ ] Add your actual publications

### 5. Contact Information

- [ ] Update email in footer (`_includes/footer.html`)
- [ ] Add links to your GitHub, documentation, etc.
- [ ] Update social media links if applicable

## Visual Customization

### 6. Colors and Branding (`assets/css/style.css`)

- [ ] Change primary accent color (`--accent-primary`)
- [ ] Modify secondary accent color (`--accent-secondary`)
- [ ] Adjust particle colors if desired
- [ ] Update font families if you prefer different typefaces

### 7. Images

- [ ] Replace logo in `assets/images/` with your actual logo
- [ ] Add team member photos to `assets/images/team/`
- [ ] Consider adding a custom collision background
- [ ] Add any additional images for your content

### 8. Logo (`_includes/header.html` and `index.html`)

- [ ] Replace the "N" placeholder with your actual logo
- [ ] Or keep the letter-based logo but change the letter
- [ ] Update `hero-logo` section in index.html

## Content Enhancement

### 9. Additional Pages (Optional)

- [ ] Create a `publications.html` page for detailed publication list
- [ ] Add a `documentation.html` page for technical docs
- [ ] Create a `news.html` page for updates and announcements
- [ ] Add a `contact.html` page with contact form

### 10. Navigation (`_includes/header.html`)

- [ ] Update navigation links if you added new pages
- [ ] Reorder menu items if needed
- [ ] Add dropdown menus if you have many pages

### 11. SEO and Meta Information

- [ ] Add favicon files (`.ico`, `.png`)
- [ ] Update meta descriptions for better SEO
- [ ] Add Open Graph tags for social media sharing
- [ ] Add Twitter Card meta tags

## Advanced Customization

### 12. Functionality

- [ ] Customize theme toggle behavior if needed
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Add a blog section using Jekyll posts
- [ ] Implement a search feature

### 13. Performance

- [ ] Optimize images (compress, convert to WebP)
- [ ] Minimize CSS and JavaScript
- [ ] Add lazy loading for images
- [ ] Implement caching strategies

### 14. Accessibility

- [ ] Add alt text to all images
- [ ] Ensure proper heading hierarchy
- [ ] Test with screen readers
- [ ] Check color contrast ratios

## Testing Checklist

### 15. Before Deployment

- [ ] Test locally with `bundle exec jekyll serve`
- [ ] Check all links work correctly
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Verify theme switching works
- [ ] Check for console errors in browser dev tools
- [ ] Validate HTML/CSS
- [ ] Test site speed (Google PageSpeed Insights)

### 16. After Deployment

- [ ] Verify GitHub Pages deployment succeeded
- [ ] Test the live site URL
- [ ] Check that all assets load correctly
- [ ] Test all navigation links
- [ ] Verify responsive design on actual mobile devices
- [ ] Check that theme persists across page loads
- [ ] Test in incognito/private mode

## Maintenance

### 17. Regular Updates

- [ ] Add new team members as they join
- [ ] Update project status regularly
- [ ] Add new publications when published
- [ ] Update milestones and progress
- [ ] Keep software stack information current
- [ ] Refresh content every 3-6 months

### 18. Security and Updates

- [ ] Keep Jekyll and dependencies updated
- [ ] Monitor GitHub security alerts
- [ ] Update copyright year annually
- [ ] Review and update links regularly

## Quick Reference

### File Locations

- **Main content**: `index.html`, `pages/team.html`, `pages/project.html`
- **Team data**: `_data/team.yml`
- **Styles**: `assets/css/style.css`
- **JavaScript**: `assets/js/main.js`
- **Site config**: `_config.yml`
- **Navigation**: `_includes/header.html`
- **Footer**: `_includes/footer.html`

### Color Variables

Edit these in `assets/css/style.css` under `:root`:

```css
--accent-primary: #0066cc;      /* Main brand color */
--accent-secondary: #0052a3;    /* Hover states */
--particle-blue: #00d4ff;       /* Particle effect 1 */
--particle-orange: #ff6b35;     /* Particle effect 2 */
--particle-purple: #a855f7;     /* Particle effect 3 */
```

### Useful Commands

```bash
# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve

# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Deploy to GitHub
git add .
git commit -m "Update content"
git push
```

---
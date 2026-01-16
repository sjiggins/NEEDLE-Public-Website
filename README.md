# NEEDLE Project Website

Jekyll-based website for the NEEDLE (NEural-basEd Diffusion Likelihood Estimations) project - a machine learning project funded by Helmholtz AI for particle physics at the Large Hadron Collider and future colliders, tasked with enabling Simulation-based Inference for high data experiments.

## Features

- **Light/Dark Theme**: Automatic theme switching with localStorage persistence
- **Three Main Sections**:
  - Landing page with project overview
  - Team members showcase
  - Detailed project information and status updates

## Quick Start

### Prerequisites

- Ruby (version 2.7 or higher)
- RubyGems
- GCC and Make

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/needle-public-website.git
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser and navigate to `http://localhost:4000`

The site will automatically rebuild when you make changes to files.

## Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. **Create a GitHub repository** for your website

2. **Push your code**
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

3. **Create `.github/workflows/jekyll.yml`**
   ```yaml
   name: Deploy Jekyll site to Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Ruby
           uses: ruby/setup-ruby@v1
           with:
             ruby-version: '3.1'
             bundler-cache: true
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Build with Jekyll
           run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
           env:
             JEKYLL_ENV: production
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

5. **Push the workflow file**
   ```bash
   git add .github/workflows/jekyll.yml
   git commit -m "Add GitHub Actions workflow"
   git push
   ```

Your site will be available at `https://your-username.github.io/your-repo-name/`

### Option 2: Manual Deployment

1. **Build the site**
   ```bash
   JEKYLL_ENV=production bundle exec jekyll build
   ```

2. **Push the `_site` directory to a `gh-pages` branch**
   ```bash
   git subtree push --prefix _site origin gh-pages
   ```

3. **Configure GitHub Pages**
   - Go to repository settings
   - Navigate to "Pages"
   - Select `gh-pages` branch as source

## Customization

### Updating Team Members

Edit `_data/team.yml` to add, remove, or modify team members:

```yaml
- name: "Your Name"
  title: "Your Title"
  role: "Your Role"
  description: "Your description and involvement"
  affiliation: "Your affiliation"
  image: "path/to/image.jpg"
```

### Changing Colors and Themes

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  --accent-primary: #0066cc;
  /* ... other variables */
}
```

### Updating Project Content

Edit the following files:
- `index.html` - Landing page content
- `pages/project.html` - Project details and status updates
- `pages/team.html` - Team page structure

### Site Configuration

Edit `_config.yml` to change site-wide settings:

```yaml
title: Your Project Name
email: your@email.com
description: Your project description
url: "https://yourdomain.com"
```

## Project Structure

```
needle-website/
├── _config.yml           # Jekyll configuration
├── _data/
│   └── team.yml         # Team member data
├── _includes/
│   ├── header.html      # Site header/navigation
│   └── footer.html      # Site footer
├── _layouts/
│   └── default.html     # Main layout template
├── assets/
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/          # Image assets
├── pages/
│   ├── team.html        # Team page
│   └── project.html     # Project page
├── index.html           # Landing page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **Jekyll** - Static site generator
- **Liquid** - Templating language
- **CSS3** - Custom styling with CSS variables
- **JavaScript** - Theme switching and animations
- **GitHub Pages** - Free hosting

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions:
- Open an issue on GitHub
- Contact: stephen.pw.jiggins@gmail.com

## Acknowledgments

- Inspired by the Agency Jekyll theme
- Built for the particle physics and ML communities
---

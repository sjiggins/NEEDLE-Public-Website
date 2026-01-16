# Quick Start Guide

Get your NEEDLE website running in 5 minutes!

## Option 1: Deploy to GitHub Pages (Fastest)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Name: `needle-website` (or your preferred name)
3. Set to "Public"
4. Click "Create repository"

### Step 2: Upload Files

**Via Command Line:**
```bash
cd needle-website
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

**Or via GitHub Web Interface:**
1. Click "uploading an existing file"
2. Drag and drop all files from the `needle-website` folder
3. Commit directly to main

### Step 3: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Wait 2-3 minutes for deployment

### Step 4: Visit Your Site

Your site is live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Option 2: Test Locally First

### Prerequisites

Install Ruby (if not already installed):

**macOS:**
```bash
brew install ruby
```

**Ubuntu/Debian:**
```bash
sudo apt-get install ruby-full build-essential
```

**Windows:**
Download from https://rubyinstaller.org/

### Run Locally

```bash
cd needle-website
bundle install
bundle exec jekyll serve
```

Visit: http://localhost:4000

## Customize Your Site

### Essential Edits

1. **_config.yml** - Update site title, email, description
2. **_data/team.yml** - Add your team members
3. **index.html** - Update hero text and overview
4. **pages/project.html** - Update project details

See `CUSTOMIZATION.md` for complete checklist!

## Need Help?

- 📖 Full documentation: `README.md`
- 🚀 Deployment guide: `DEPLOYMENT.md`
- ✅ Customization checklist: `CUSTOMIZATION.md`

## Common Issues

**Bundle install fails?**
```bash
gem install bundler
bundle install
```

**GitHub Pages not working?**
- Ensure repository is public
- Check Actions tab for build errors
- Wait 5-10 minutes for first deployment

**Site looks broken locally?**
- Make sure you're at http://localhost:4000
- Clear browser cache
- Check console for errors

---

**That's it!** You're ready to go. 🎉

# NEEDLE Website Deployment Guide

This guide will walk you through deploying the NEEDLE website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Basic familiarity with command line

## Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `needle-website`)
4. Choose "Public" (required for free GitHub Pages)
5. Do NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Prepare Your Local Repository

Open your terminal and navigate to the website directory:

```bash
cd needle-website
```

Initialize git (if not already done):

```bash
git init
```

Add all files:

```bash
git add .
```

Commit the files:

```bash
git commit -m "Initial commit - NEEDLE website"
```

### Step 3: Connect to GitHub

Link your local repository to GitHub (replace `YOUR-USERNAME` and `YOUR-REPO` with your actual GitHub username and repository name):

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
```

### Step 4: Push to GitHub

Push your code to GitHub:

```bash
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top menu bar)
3. In the left sidebar, click "Pages"
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The site will automatically build and deploy

### Step 6: Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You should see a workflow running called "Deploy Jekyll site to Pages"
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, you'll see a green checkmark

### Step 7: Access Your Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

For example: `https://johnsmith.github.io/needle-website/`

## Custom Domain (Optional)

If you want to use a custom domain like `needle-project.org`:

1. Purchase a domain from a registrar
2. In your GitHub repository settings, go to "Pages"
3. Under "Custom domain", enter your domain
4. Configure your DNS settings with your registrar:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`
5. Enable "Enforce HTTPS" once DNS propagates (can take 24-48 hours)

## Updating Your Site

After making changes to your website:

```bash
git add .
git commit -m "Description of your changes"
git push
```

The site will automatically rebuild and deploy within a few minutes.

## Troubleshooting

### Build Failed

If the GitHub Actions workflow fails:

1. Go to the "Actions" tab
2. Click on the failed workflow
3. Read the error message
4. Common issues:
   - Missing dependencies: Check your `Gemfile`
   - Syntax errors: Check your HTML/CSS/YAML files
   - File paths: Ensure all paths are correct

### Site Not Updating

1. Check the Actions tab to ensure the workflow completed successfully
2. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Wait a few minutes for GitHub's CDN to update

### 404 Error

If you get a 404 error:

1. Ensure GitHub Pages is enabled in Settings
2. Check that your repository is public
3. Verify the URL format: `https://username.github.io/repository-name/`
4. Make sure the workflow completed successfully

## Testing Locally Before Deployment

Always test your changes locally before pushing:

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser.

## Best Practices

1. **Branch Strategy**: Create a `develop` branch for testing
   ```bash
   git checkout -b develop
   ```
   
2. **Test Changes**: Always test locally before pushing

3. **Commit Messages**: Write clear, descriptive commit messages

4. **Regular Backups**: Keep backups of your content

5. **Monitor Performance**: Check site speed and accessibility

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Git Documentation](https://git-scm.com/doc)

## Need Help?

If you encounter issues:

1. Check the [README.md](README.md) file
2. Review GitHub Actions logs in the Actions tab
3. Open an issue on GitHub
4. Contact the project maintainer

---

Happy deploying! 🚀

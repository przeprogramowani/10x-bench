# Deployment Guide

This guide explains how to deploy the Przeprogramowani.pl website to Cloudflare Pages.

## Prerequisites

- Cloudflare account
- GitHub/GitLab repository (optional, for automatic deployments)
- Node.js 18+ installed locally

## Method 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Build the Site Locally

```bash
npm install
npm run build
```

This creates a `dist` folder with the static site.

### Step 2: Deploy to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Choose **Direct Upload**
5. Give your project a name (e.g., `przeprogramowani`)
6. Upload the `dist` folder
7. Click **Deploy site**

Your site will be live at `https://przeprogramowani.pages.dev` (or your custom domain)

## Method 2: Deploy via Git Integration (Automatic)

### Step 1: Push to GitHub/GitLab

1. Create a new repository on GitHub or GitLab
2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Choose **Connect to Git**
5. Select your repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
   - **Environment variables**: None required

7. Click **Save and Deploy**

Cloudflare will automatically:
- Build your site on every push to main branch
- Deploy to production
- Create preview deployments for pull requests

## Method 3: Deploy via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Authenticate

```bash
wrangler login
```

### Step 3: Build and Deploy

```bash
npm run build
wrangler pages deploy dist --project-name przeprogramowani
```

## Custom Domain Setup

### Step 1: Add Custom Domain in Cloudflare

1. Go to your Pages project in Cloudflare Dashboard
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `przeprogramowani.pl`)

### Step 2: Update DNS Records

Cloudflare will provide DNS records to add:

- CNAME record pointing to your Pages domain
- Or A/AAAA records for apex domain

Add these records in your DNS settings.

### Step 3: Wait for Propagation

DNS propagation typically takes 5-60 minutes. Your site will be live on your custom domain once complete.

## Environment-Specific Settings

### Production Build

The site is already optimized for production:
- Static site generation (SSG)
- Minified CSS and JavaScript
- Optimized images
- SEO-friendly HTML

### Performance Tips

1. **Enable HTTP/3**: Available by default on Cloudflare
2. **Enable Brotli Compression**: Automatic on Cloudflare
3. **Use CDN**: Cloudflare's global CDN distributes your site worldwide
4. **Cache Settings**: Cloudflare automatically caches static assets

## Monitoring

### Analytics

Enable Cloudflare Web Analytics:
1. Go to your Pages project
2. Navigate to **Analytics**
3. Enable Web Analytics

### Error Tracking

Monitor 404 errors and performance:
1. Check **Analytics** tab in Pages dashboard
2. Review traffic patterns and popular pages

## Troubleshooting

### Build Fails

**Issue**: Build command fails on Cloudflare

**Solution**:
- Check Node.js version (must be 18+)
- Verify `package.json` has correct build script
- Check build logs in Cloudflare dashboard

### 404 Errors

**Issue**: Pages return 404 after deployment

**Solution**:
- Ensure `dist` folder contains `index.html`
- Check `_redirects` file is in `public` folder
- Verify all routes exist in `src/pages`

### Styling Issues

**Issue**: Tailwind CSS not working

**Solution**:
- Ensure Tailwind config is correct
- Run `npm run build` locally to test
- Check that Astro config includes Tailwind integration

## Updating the Site

### Manual Updates

1. Make changes to your code
2. Build locally: `npm run build`
3. Upload `dist` folder to Cloudflare Pages

### Automatic Updates (Git Integration)

1. Make changes to your code
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Cloudflare automatically builds and deploys

## Rollback

If you need to rollback to a previous version:

1. Go to Pages project in Cloudflare Dashboard
2. Navigate to **Deployments**
3. Find the previous deployment
4. Click **Rollback to this deployment**

## Cost

Cloudflare Pages is **free** for:
- Unlimited sites
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- 1 build at a time

Perfect for this static site!

## Support

For Cloudflare Pages support:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Community Forum](https://community.cloudflare.com/)
- [Discord](https://discord.cloudflare.com/)

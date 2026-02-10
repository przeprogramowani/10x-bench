# Deployment Guide - Cloudflare Pages

This guide explains how to deploy the Przeprogramowani.pl website to Cloudflare Pages.

## Prerequisites

- Cloudflare account (free tier is sufficient)
- Git repository with the project
- Node.js 18+ installed locally for testing

## Method 1: Automatic Deployment via GitHub/GitLab

### Step 1: Push to Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repository-url>
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** > **Pages**
3. Click **Create a project**
4. Click **Connect to Git**
5. Authorize Cloudflare to access your repository
6. Select your repository

### Step 3: Configure Build Settings

Set the following build configuration:

- **Project name:** `przeprogramowani` (or your preferred name)
- **Production branch:** `main` (or `master`)
- **Framework preset:** `Astro`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (leave empty if project is in root)

### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be available at `https://przeprogramowani.pages.dev`

### Step 5: Custom Domain (Optional)

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `przeprogramowani.pl`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (automatic)

## Method 2: Direct Upload via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Authenticate

```bash
wrangler login
```

This will open a browser window to authenticate with Cloudflare.

### Step 3: Build the Project

```bash
npm run build
```

### Step 4: Deploy

```bash
wrangler pages deploy dist --project-name=przeprogramowani
```

Follow the prompts to create a new project or deploy to an existing one.

## Method 3: Manual Upload via Dashboard

### Step 1: Build Locally

```bash
npm run build
```

### Step 2: Create Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** > **Pages**
3. Click **Create a project**
4. Click **Upload assets**

### Step 3: Upload

1. Name your project: `przeprogramowani`
2. Drag and drop the `dist` folder or select it
3. Click **Deploy site**

## Environment Variables (if needed)

If your project requires environment variables:

1. Go to project **Settings** > **Environment variables**
2. Add variables for Production and/or Preview environments
3. Redeploy the project

Example variables (none required for this project):
```
NODE_VERSION=18
```

## Continuous Deployment

With the Git integration (Method 1):

- **Production:** Every push to `main` branch triggers a production deployment
- **Preview:** Every pull request creates a preview deployment
- **Rollback:** Easy rollback to previous deployments via dashboard

## Build Optimization

### Enable Build Optimizations

In your project settings:
1. Go to **Settings** > **Builds & deployments**
2. Enable **Build caching** (speeds up subsequent builds)
3. Set **Node version:** `18` or higher

### Check Build Logs

If build fails:
1. Go to **Deployments** tab
2. Click on failed deployment
3. View build logs to identify issues

## Performance & Caching

The project includes a `_headers` file that configures:
- Security headers (X-Frame-Options, CSP, etc.)
- Cache headers for static assets (1 year)
- Optimal caching for CSS, JS, images

Cloudflare automatically provides:
- Global CDN distribution
- HTTP/3 and Brotli compression
- DDoS protection
- Analytics

## Monitoring

### Analytics

1. Go to **Analytics** tab in your project
2. View page views, requests, bandwidth
3. Geographic distribution of visitors

### Real User Monitoring (RUM)

Enable Web Analytics (free):
1. Go to **Settings** > **Web Analytics**
2. Enable analytics
3. Add the provided script (optional for static sites)

## Custom Domain Setup Details

### Cloudflare Managed Domain

If your domain is managed by Cloudflare:
1. Go to project **Custom domains**
2. Add domain: `przeprogramowani.pl`
3. Add www subdomain: `www.przeprogramowani.pl`
4. DNS records are automatically created
5. SSL certificate is automatically provisioned

### External Domain

If your domain is managed elsewhere:
1. Add custom domain in Cloudflare Pages
2. You'll receive CNAME records to add at your DNS provider:
   ```
   przeprogramowani.pl    CNAME    przeprogramowani.pages.dev
   www.przeprogramowani.pl    CNAME    przeprogramowani.pages.dev
   ```
3. Add these records at your DNS provider
4. Wait for DNS propagation (can take up to 48 hours)

## Rollback & Versions

To rollback to a previous version:
1. Go to **Deployments** tab
2. Find the deployment you want to rollback to
3. Click **⋯** (three dots)
4. Select **Rollback to this deployment**
5. Confirm

## Troubleshooting

### Build Fails

**Error:** "Command not found: npm"
- Solution: Ensure Node.js version is set in settings (18+)

**Error:** "Module not found"
- Solution: Ensure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Error:** "Build exceeded time limit"
- Solution: Check for infinite loops or very large files
- Optimize build process

### Deployment Issues

**Issue:** Site shows old version
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check deployment status in dashboard

**Issue:** 404 on routes
- Ensure Astro is configured for static output
- Check `astro.config.mjs` has `output: 'static'`

**Issue:** Styles not loading
- Check browser console for errors
- Verify build completed successfully
- Check network tab for failed CSS requests

## Performance Tips

1. **Images:** Use WebP format with fallbacks
2. **Fonts:** Use system fonts or subset custom fonts
3. **JavaScript:** Code splitting is handled by Astro automatically
4. **Preloading:** Add `rel="preload"` for critical assets
5. **Lazy Loading:** Use `loading="lazy"` for images below fold

## Security

Included security headers in `_headers`:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin`

## Cost

Cloudflare Pages is **free** for:
- Unlimited static requests
- Unlimited bandwidth
- 500 builds per month
- Unlimited sites

Perfect for this static website!

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Documentation](https://docs.astro.build/)
- [Cloudflare Community](https://community.cloudflare.com/)

## Next Steps After Deployment

1. ✅ Verify all pages load correctly
2. ✅ Test responsive design on mobile
3. ✅ Check all links work
4. ✅ Test social media sharing
5. ✅ Set up custom domain
6. ✅ Enable analytics
7. ✅ Submit sitemap to search engines
8. ✅ Test performance with Lighthouse
9. ✅ Monitor first month of traffic
10. ✅ Collect user feedback

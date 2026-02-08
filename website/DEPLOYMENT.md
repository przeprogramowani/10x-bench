# Cloudflare Pages Deployment

This project is configured to deploy to Cloudflare Pages (project: `10x-bench`).

## Local Setup

The following has been configured:

- **wrangler.toml** — Cloudflare Pages configuration with account ID and project name
- **package.json** — Deploy script added to devDependencies
- **GitHub Actions** — Automated deployment on push to master

## Local Deployment

To deploy manually from your machine:

```bash
cd website
npm run deploy
```

This will:
1. Build the site with `astro build`
2. Deploy the `dist/` directory to Cloudflare Pages

## CI/CD Deployment

The `.github/workflows/publish.yml` workflow automatically:
1. Builds the website on push to `master`
2. Deploys to Cloudflare Pages using the API token

### Required Secrets

In GitHub repository settings, configure:
- `CLOUDFLARE_API_TOKEN` — Your Cloudflare API token with Pages permissions

Generate this token in [Cloudflare dashboard](https://dash.cloudflare.com/profile/api-tokens):
- Select "Edit Cloudflare Workers" template (or create custom with Pages scope)
- Grant "Account" and "Cloudflare Pages" permissions

## Verification

The site is live at: https://10x-bench.pages.dev

To check deployment status:
```bash
wrangler pages project list
```

Look for `10x-bench` in the project list.

# Production Deployment Checklist

## Contact Form Setup for Vercel

### Step 1: Add Environment Variable to Vercel

You have two options:

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to your project at [https://vercel.com](https://vercel.com)
2. Select your project: `voxdei-studio`
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value**: `a2bb140a-d9b0-4169-bf69-00d4132945a2`
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI if you haven't already
npm i -g vercel

# Add the environment variable
vercel env add NEXT_PUBLIC_WEB3FORMS_KEY
# When prompted, paste: a2bb140a-d9b0-4169-bf69-00d4132945a2
# Select: Production, Preview, Development
```

### Step 2: Redeploy

After adding the environment variable, you need to redeploy:

```bash
# Trigger a new deployment
git push origin revamp

# Or manually redeploy in Vercel dashboard
```

**Note:** Simply adding the env var doesn't update existing deployments. You must redeploy.

## Pre-Deployment Checklist

### Environment Variables
- [x] `NEXT_PUBLIC_WEB3FORMS_KEY` added to Vercel

### Contact Form
- [x] hCaptcha integrated (zero-config)
- [ ] Enable hCaptcha in Web3Forms dashboard (after first deployment)

### SEO Configuration (from SEO-SETUP.md)
- [ ] Create `/public/og-image.png` (1200 x 630px)
- [ ] Update Google Search Console verification code in `app/layout.tsx:83`
- [ ] Update social media handles in `app/layout.tsx:77`
- [ ] Verify domain is `https://www.voxdei.studio` across all files
- [ ] Update email in `components/structured-data.tsx:26` if not `hello@voxdei.studio`

### Testing
- [x] Contact form configured
- [ ] Test contact form on preview deployment
- [ ] Verify email delivery to `hello@voxdei.io`

## Post-Deployment Verification

After deployment, test these:

### 1. Contact Form
- [ ] **Enable hCaptcha in Web3Forms Dashboard:**
  - Go to [https://web3forms.com/platforms](https://web3forms.com/platforms)
  - Find your form and click "Settings"
  - Enable hCaptcha as your preferred captcha
  - Save the settings
- [ ] Submit a test form at https://www.voxdei.studio/#contact
- [ ] Verify hCaptcha appears and works
- [ ] Complete captcha and submit form
- [ ] Verify you receive the email at hello@voxdei.io
- [ ] Check success message displays
- [ ] Test captcha validation (try submitting without completing captcha)

### 2. SEO Validation
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)

### 3. Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor indexing status

## Quick Deploy Commands

```bash
# Check current branch
git status

# Commit and push changes
git add .
git commit -m "Add working contact form with Web3Forms"
git push origin revamp

# Create pull request to main (if needed)
gh pr create --base main --head revamp --title "Add contact form functionality"
```

## Monitoring

### Web3Forms Dashboard
- View submission logs: [https://web3forms.com/platforms](https://web3forms.com/platforms)
- Current plan: Free tier (250 submissions/month)
- Email notifications: Sent to `hello@voxdei.io`

### Vercel Analytics
- Monitor form usage and page views
- Track Core Web Vitals
- Check error rates

## Troubleshooting

**Form not working in production?**
1. Check environment variable is set in Vercel
2. Verify you redeployed after adding the env var
3. Check browser console for errors
4. Verify API key is active in Web3Forms dashboard

**Not receiving emails?**
1. Check spam folder
2. Verify email in Web3Forms account matches `hello@voxdei.io`
3. Check Web3Forms dashboard for submission logs
4. Test with a different email address

**Need to update the receiving email?**
1. Log into [Web3Forms](https://web3forms.com/platforms)
2. Update your email address
3. Or create a new Access Key with the new email

## Security Notes

- ✅ `.env.local` is in `.gitignore` (not committed to repo)
- ✅ Using `NEXT_PUBLIC_` prefix allows client-side access (safe for this use case)
- ✅ Web3Forms includes spam protection
- ⚠️ Never commit API keys to version control
- ⚠️ Web3Forms is safe to use client-side (designed for it)

## Next Steps After Launch

1. Monitor form submissions for spam
2. Set up Google Analytics 4 (optional, you have Vercel Analytics)
3. Add honeypot field for extra spam protection if needed
4. Consider upgrading Web3Forms if you exceed 250 submissions/month

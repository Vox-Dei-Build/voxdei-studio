# Contact Form Setup Guide

The contact form now uses **Web3Forms** with **hCaptcha** spam protection - a free, privacy-friendly form backend service.

## Quick Setup (5 minutes)

### Step 1: Get Your Free API Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email address (this is where you'll receive form submissions)
3. Click "Get Access Key"
4. Copy the Access Key from your email

### Step 2: Add the API Key to Your Project

1. Create a file named `.env.local` in the root of your project
2. Add your API key:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

### Step 3: Enable hCaptcha (Recommended)

1. Log into your Web3Forms dashboard at [https://web3forms.com/platforms](https://web3forms.com/platforms)
2. Find your form and click "Settings"
3. Enable hCaptcha as your preferred captcha
4. Save the settings

This makes captcha **mandatory** for all form submissions, providing strong spam protection.

### Step 4: Test the Form

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section
3. Complete the hCaptcha verification
4. Fill out and submit the test form
5. Check your email for the submission

## Features

- ✅ No backend code required
- ✅ Free tier: 250 submissions/month
- ✅ **hCaptcha spam protection** (zero-config)
- ✅ Email notifications
- ✅ File attachments support (if needed)
- ✅ GDPR compliant
- ✅ Privacy-friendly (no Google reCAPTCHA tracking)

## Customization Options

### Customize hCaptcha Appearance

You can customize the hCaptcha widget in [contact-section.tsx](components/contact-section.tsx) by adding data attributes:

```tsx
<div
  className="h-captcha"
  data-captcha="true"
  data-theme="dark"        // "light" or "dark"
  data-size="compact"      // "normal", "compact", "invisible"
  data-lang="en"           // Language code (en, es, fr, de, etc.)
></div>
```

**Available options:**
- `data-theme`: Match your site's theme ("light" or "dark")
- `data-size`: Widget size ("normal", "compact", or "invisible")
- `data-lang`: Language code (en, es, fr, de, ja, etc.)

### Change Email Recipients

Log into your Web3Forms dashboard at [https://web3forms.com/platforms](https://web3forms.com/platforms) to:
- Add multiple email recipients
- Set up custom email templates
- Configure spam filters
- View submission history

### Upgrade Plan

If you need more than 250 submissions/month, Web3Forms offers paid plans starting at $5/month.

## Alternative Services

If you prefer a different service, here are some alternatives:

1. **Formspree** - Similar to Web3Forms
2. **EmailJS** - Client-side email sending
3. **SendGrid/Resend** - Requires backend API route
4. **Netlify Forms** - If hosting on Netlify

## Troubleshooting

**Form not sending?**
- Check that `NEXT_PUBLIC_WEB3FORMS_KEY` is set in `.env.local`
- Restart your dev server after adding environment variables
- Verify your API key is active in Web3Forms dashboard

**Not receiving emails?**
- Check your spam folder
- Verify the email address in your Web3Forms account
- Log into Web3Forms dashboard to see submission logs

## Security Notes

- The `.env.local` file is already in `.gitignore` and won't be committed
- Never commit your API keys to version control
- For production, add the environment variable in your hosting platform (Vercel, Netlify, etc.)

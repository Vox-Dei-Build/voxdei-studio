# SEO Setup Guide for Vox Dei Studio

## ✅ Completed SEO Implementations

### 1. Enhanced Metadata (app/layout.tsx)
- ✅ Open Graph tags for social media sharing (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ SEO keywords
- ✅ Canonical URLs
- ✅ Robots directives
- ✅ Author and publisher information
- ✅ Favicon and Apple touch icons
- ✅ Web manifest

### 2. Structured Data (components/structured-data.tsx)
- ✅ Organization Schema
- ✅ Service Schema
- ✅ BreadcrumbList Schema
- ✅ WebSite Schema

### 3. Crawling & Indexing
- ✅ robots.txt (app/robots.ts)
- ✅ sitemap.xml (app/sitemap.ts)

### 4. Mobile & PWA
- ✅ Web manifest (public/site.webmanifest)

---

## 🔧 Tasks You Need to Complete

### 1. Create Open Graph Image
**Priority: HIGH**

Create an image at: `/public/og-image.png`
- Dimensions: 1200 x 630 pixels
- Include: Vox Dei Studio logo + tagline
- Use clear, readable text
- Keep important content in the center (safe zone)

**Tools:**
- Canva (has OG image templates)
- Figma
- Adobe Photoshop

### 2. Verify Search Console
**Priority: HIGH**

1. **Google Search Console:**
   - Go to: https://search.google.com/search-console
   - Add property: www.voxdei.studio
   - Copy verification code
   - Update `app/layout.tsx` line 83: replace `"your-google-verification-code"`

2. **Bing Webmaster Tools:**
   - Go to: https://www.bing.com/webmasters
   - Add site and verify

### 3. Update Social Media Handles
**Priority: MEDIUM**

In `app/layout.tsx` (line 77) and `components/structured-data.tsx` (lines 21-25):
- Update Twitter handle: `@voxdeistudio` → your actual handle
- Update LinkedIn URL
- Add GitHub URL if applicable
- Remove any social links you don't have

### 4. Update Contact Information
**Priority: MEDIUM**

In `components/structured-data.tsx`:
- Line 15: Update `foundingDate` if needed
- Lines 16-19: Add complete address if you want local SEO
- Line 26: Confirm email is `hello@voxdei.studio`

### 5. Verify Domain Configuration
**Priority: HIGH**

Ensure your domain is: `https://www.voxdei.studio`
- If different, update in:
  - `app/layout.tsx` (line 10)
  - `app/sitemap.ts` (line 4)
  - `app/robots.ts` (line 9)
  - `components/structured-data.tsx` (all URLs)

---

## 📊 Testing & Validation

### After Deployment, Test These:

1. **Rich Results Test (Google)**
   - URL: https://search.google.com/test/rich-results
   - Paste your site URL
   - Should show Organization, BreadcrumbList, WebSite schemas

2. **Open Graph Debugger (Facebook)**
   - URL: https://developers.facebook.com/tools/debug/
   - Test how your site appears when shared

3. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Verify your Twitter cards work

4. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Check Core Web Vitals

5. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Ensure mobile optimization

---

## 🚀 Post-Launch SEO Tasks

### Week 1
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics 4 (if not using Vercel Analytics exclusively)
- [ ] Monitor indexing status

### Month 1
- [ ] Check Google Search Console for errors
- [ ] Review search queries and impressions
- [ ] Optimize based on actual search data
- [ ] Add blog/case studies for content SEO (optional)

### Ongoing
- [ ] Update sitemap when adding new pages
- [ ] Monitor Core Web Vitals
- [ ] Keep structured data updated
- [ ] Build quality backlinks

---

## 📝 Additional Recommendations

### Content SEO
- Add a blog section for fresh content
- Write case studies for major projects
- Create dedicated pages for key services
- Add FAQ section (great for featured snippets)

### Technical SEO
- Ensure HTTPS is enforced (Vercel does this automatically)
- Set up proper redirects (www vs non-www)
- Monitor and fix 404 errors
- Optimize image sizes (use Next.js Image optimization)

### Local SEO (if applicable)
- Create Google Business Profile
- Get listed in relevant directories
- Collect client reviews
- Add LocalBusiness schema if you have a physical location

### Link Building
- Reach out to featured clients for backlinks
- Get listed on startup directories
- Submit to AI/tech directories
- Write guest posts on relevant blogs

---

## 🔍 SEO Checklist Summary

**Before Launch:**
- [ ] Create og-image.png (1200x630)
- [ ] Update Twitter handle
- [ ] Verify domain URL is correct
- [ ] Update contact email
- [ ] Add company founding date

**After Launch:**
- [ ] Verify Google Search Console
- [ ] Verify Bing Webmaster
- [ ] Submit sitemap to both
- [ ] Test all validators above
- [ ] Monitor for indexing

**Nice to Have:**
- [ ] Set up Google Analytics 4
- [ ] Create Google Business Profile
- [ ] Add client testimonial schema
- [ ] Create blog for content marketing
- [ ] Build backlink strategy

---

## 📚 Helpful Resources

- [Google Search Central](https://developers.google.com/search)
- [Next.js Metadata Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev - Learn SEO](https://web.dev/learn-seo/)
- [Ahrefs SEO Toolkit](https://ahrefs.com/seo-toolbar)

---

## ⚠️ Important Notes

1. **Update URLs**: If your actual domain is different from `www.voxdei.studio`, update ALL instances
2. **OG Image**: This is critical for social sharing - don't skip it
3. **Verification Codes**: Keep these secure and don't commit to public repos if sensitive
4. **Regular Updates**: Keep structured data in sync with your actual business info

---

For questions or issues, refer to Next.js SEO documentation or Google Search Central guidelines.

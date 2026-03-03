# My Custom Patches — Production Website

A high-performance, SEO-optimized e-commerce website for **mycustompatches.net** built with **Next.js 14 App Router**, TypeScript, and Tailwind CSS. Features a quote request system, product gallery, blog, and live chat — all WCAG AA accessible.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Font | Poppins via `next/font/google` |
| Forms | React Hook Form + Zod |
| File Upload | React Dropzone + Cloudinary |
| Form Submission | Web3Forms |
| Image Gallery | Swiper + yet-another-react-lightbox |
| Live Chat | Tawk.to |
| Analytics | Facebook Pixel |
| CDN / DNS | Cloudflare |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### 1. Clone and Install

```bash
git clone <repo-url>
cd "Custom Patches"
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the project root:

```env
# Web3Forms — handles quote & contact form email delivery
# Get your key at https://web3forms.com
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key

# Cloudinary — stores uploaded design files from the quote form
# Get these from your Cloudinary dashboard
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Poppins font, FB Pixel, Tawk.to)
│   ├── page.tsx                  # Home page
│   ├── about/                    # About Us page
│   ├── blog/                     # Blog listing + [slug] dynamic posts
│   ├── contact/                  # Contact page
│   ├── custom-patches/           # Product category hub + 8 product pages
│   │   ├── custom-embroidered-patches/
│   │   ├── custom-chenille-patches/
│   │   ├── custom-pvc-patches/
│   │   ├── custom-woven-patches/
│   │   ├── custom-leather-patches/
│   │   ├── custom-printed-patches/
│   │   ├── custom-3d-embroidery-transfer/
│   │   └── custom-sequin-patch/
│   ├── privacy-policy/
│   └── terms-of-service/
│
├── components/                   # Shared UI components
│   ├── Navbar.tsx                # Fixed nav with dropdown + mobile menu
│   ├── Footer.tsx                # Footer with social links, links, contact
│   ├── Hero.tsx                  # Home hero section
│   ├── QuoteForm.tsx             # Quote form (RHF + Zod + Cloudinary upload)
│   ├── SpecialRates.tsx          # Secondary lead-gen form section
│   ├── ProductsGrid.tsx          # 6-card product showcase grid
│   ├── ProductGallery.tsx        # Swiper gallery with lightbox
│   ├── BlogsSection.tsx          # Featured blog posts swiper
│   ├── QueenCTA.tsx              # 4-step production process section
│   ├── ProcessSteps.tsx          # Process visual component
│   ├── FaqSection.tsx            # Accordion FAQ
│   ├── ContactForm.tsx           # Contact page form
│   ├── VideoRevealCard.tsx       # Video with hover/touch reveal
│   ├── RelatedProducts.tsx       # Cross-sell product cards
│   ├── ValueProps.tsx            # Trust/value proposition badges
│   ├── BottomCTA.tsx             # Bottom call-to-action banner
│   ├── TawkToChat.tsx            # Tawk.to live chat widget
│   ├── templates/
│   │   └── ProductPageTemplate.tsx  # Shared template for all 8 product pages
│   └── ui/
│       ├── Button.tsx            # Button component (primary/outline/ghost)
│       ├── Input.tsx             # Input component
│       └── Modal.tsx             # Modal overlay for quote form
│
├── data/
│   └── blogs.ts                  # Blog post content + metadata
│
├── hooks/
│   └── useCloudinary.ts          # Cloudinary upload hook
│
├── lib/
│   ├── schema.ts                 # Zod validation schemas
│   └── utils.ts                  # cn() utility (clsx + tailwind-merge)
│
└── types/                        # TypeScript type definitions
```

---

## Brand Colors

Defined in `tailwind.config.ts` and WCAG AA compliant (≥4.5:1 contrast on white):

| Token | Hex | Use |
|---|---|---|
| `brand-orange` | `#C03800` | Primary CTAs, headings, accents |
| `brand-red` | `#A02E00` | Hover states, gradients |
| `brand-dark` | `#1A1A1A` | Body text, dark backgrounds |

---

## Adding a New Product Page

1. Create the directory: `src/app/custom-patches/custom-your-product/`
2. Create `page.tsx` and use `ProductPageTemplate`:

```tsx
import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";

export default function YourProductPage() {
  return (
    <ProductPageTemplate
      title="Custom Your Product"
      subtitle="Your tagline here"
      description="Full description..."
      heroImage="/assets/your-hero.png"
      galleryImages={["/assets/img1.png", "/assets/img2.png"]}
      features={["Feature 1", "Feature 2", "Feature 3"]}
      masterpieceImages={["/assets/gallery1.png"]}
      faqs={[{ q: "Question?", a: "Answer." }]}
    />
  );
}
```

3. Add the product to `PATCH_CATEGORIES` in `Navbar.tsx` and the product list in `Footer.tsx`.

---

## Adding a Blog Post

Open `src/data/blogs.ts` and add a new entry to the `blogs` array:

```ts
{
  id: 4,
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Short summary shown in the listing card.",
  image: "/assets/blog-your-post.jpg",
  imageAlt: "Descriptive alt text for the blog image",
  featured: true,           // shows in the homepage featured slider
  date: "March 2026",
  readTime: "5 min read",
  content: `<p>Your full HTML content here...</p>`,
}
```

---

## Environment & Integrations

### Web3Forms
Quote form and contact form emails are delivered via [Web3Forms](https://web3forms.com). Set `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local`. No backend required.

### Cloudinary
Design file uploads (PNG, JPG, SVG, PDF) from the quote form are stored on Cloudinary. Create an **unsigned upload preset** in your Cloudinary dashboard and set both env vars.

### Facebook Pixel
Pixel ID `1305564264730590` is embedded in `app/layout.tsx`. To change it, update the `fbq('init', ...)` call there.

### Tawk.to
Live chat is loaded via `TawkToChat.tsx`. To update the widget, replace the `src` URL in that file with your Tawk.to property URL.

### Cloudflare
The site is proxied through Cloudflare. To remove the ~1 KB `email-decode.min.js` script that Lighthouse flags for short cache TTL, disable **Email Address Obfuscation** in your Cloudflare dashboard → Speed → Optimization.

---

## Performance & Accessibility

### Lighthouse Targets (post-optimization)

| Category | Status |
|---|---|
| Accessibility | WCAG AA compliant — all labels, names, and contrast fixed |
| Performance | Images: AVIF/WebP via next/image; 1-year cache TTL |
| SEO | Metadata, structured data, sitemap per page |
| Best Practices | Security headers, HTTPS, no mixed content |

### Key Optimizations Applied

- **`next/image`** with explicit `width`/`height` on all images to eliminate CLS
- **AVIF + WebP** output formats via `next.config.mjs`
- **`priority`** prop on above-the-fold hero images
- **`loading="lazy"`** on all below-fold images
- **Poppins** loaded via `next/font` with `display: swap` (no FOUT)
- **`.browserslistrc`** targeting last 2 versions of modern browsers — eliminates ~24 KB of unnecessary Babel polyfills (`Array.at`, `Object.fromEntries`, etc.)
- **`optimizePackageImports`** for lucide-react and framer-motion in `next.config.mjs`
- **gzip compression** enabled (`compress: true`)

### Third-Party Script Impact
Facebook Pixel (`fbevents.js`, ~97 KB) loads `afterInteractive` to avoid blocking LCP. Its 20-minute cache TTL and unused JS (~35 KB) are controlled by Meta and cannot be reduced from this codebase.

---

## Scripts

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run start    # Serve production build locally
npm run lint     # ESLint check
```

---

## Deployment

The site deploys automatically to **Vercel** on every push to `main`. Set the environment variables (`NEXT_PUBLIC_WEB3FORMS_KEY`, `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`) in the Vercel project settings.

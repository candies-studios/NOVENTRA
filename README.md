# Noventra Ventures — Website

Static website for Noventra Ventures (UAE). No build step, no backend, no dependencies beyond Google Fonts (Manrope + Inter).

## Structure
```
index.html              Home (Hero · Who We Are · Our Businesses · Our Approach · Contact band)
about.html              About Us — introduction, story, the partners, philosophy
marketing.html          Marketing — hero, what we do, approach, who we work with
mep.html                MEP Consulting — hero, expertise, approach, real estate focus
contact.html            Contact — enquiry form + company address
assets/css/styles.css   Design tokens (brand palette, type scale, grid) + all components
assets/js/main.js       Header state, Businesses dropdown, home section indicator, enquiry form, scroll reveals
assets/img/             Noventra symbol (SVG, from the brand guidelines) and responsive JPG/WebP imagery
```

Navigation: NOVENTRA (logo) | Home | About Us | Businesses ▾ (Marketing, MEP Consulting) | Contact.
Footer: brand + "Building Ideas. Creating Value." | Businesses | Company.

The header and footer are repeated in each HTML file. When you change a tab or footer link, update it in all five files.

## Device support
Tested at 320, 360 and 390px phones (portrait and landscape), 768px tablets, 1024px tablets in landscape, 1280–1440px laptops, 1920px desktops, and 2560px / 3840px (2K / 4K) screens and TVs.
- Phones: logo with the tab row underneath; the Businesses menu opens on tap.
- Phones in landscape: side-by-side hero, as on desktop.
- Tablets: logo and tabs on one row.
- 2K and 4K screens: the whole layout scales up so it stays readable from a distance.

## Deploy to GitHub Pages
1. Create a repository and upload the contents of this folder (keep `index.html` at the root).
2. Repository → Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)`.
3. The site is live at `https://<username>.github.io/<repo>/` within a minute or two.

For a custom domain, add a `CNAME` file containing the domain and point the DNS at GitHub Pages.

## Editing notes
- Brand colours and type live as CSS variables at the top of `styles.css`.
- The enquiry form has no server: "Get in Touch" opens the visitor's email app with the message addressed to hello@noventra-ventures.com. To receive submissions directly, point the form at a form service (e.g. Formspree) later.
- Insights and Capabilities copy is draft text written to the brand voice; review before launch.

## Imagery
Real photography (Unsplash licence: free for commercial use, no attribution required), cropped and exported for each slot in three sizes as `.jpg` and `.webp`:

| File | Photo | Used on |
|---|---|---|
| hero-900/1600/2400 | Burj Khalifa over Downtown Dubai | Home hero |
| aerial-700/1200/1800 | Aerial view of Downtown Dubai & Business Bay | Marketing page: Who We Work With |
| who-700/1200/1800 | Dubai business district towers | Who We Are, About Us page hero |
| card-marketing-700/1200/1800 | Marketing team planning at a table | Home page Marketing card |
| marketing-hero-700/1200/1672 | Laptop and phone with a digital campaign | Marketing page hero |
| marketing-studio-700/1200/1672 | Strategy wall, camera and event studio | Marketing page: From Strategy to Execution |
| card-mep-700/1200/1800 | Rooftop HVAC units | MEP card + MEP page hero |
| approach-700/1200/1800 | Burj Khalifa & boulevard at dusk | Our Approach, MEP page, Contact page hero |
| cta-1000/1600 | Angular facade (dark crop) | "Have an opportunity" band |

To swap a photo, replace the files keeping the same names and sizes.

# Noventra Ventures — Website

Static homepage for Noventra Ventures (Dubai, UAE). No build step, no backend, no dependencies beyond Google Fonts (Manrope + Inter).

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
The architectural images were taken from the approved reference design, cleaned and upscaled. Before launch, replace them with licensed or commissioned photography of the same subjects, keeping the same filenames and sizes:

| File | Use | Size |
|---|---|---|
| hero-1600 / hero-900 | Hero — Downtown Dubai skyline | 1588 × 1452 |
| who-1200 / who-700 | Who We Are — terrace framing the skyline | 1200 × 1175 |
| card-marketing-* | Marketing panel | 1200 × 828 |
| card-mep-* | MEP Consulting panel | 1200 × 828 |
| approach-* | Our Approach — towers from street level | 1200 × 1088 |
| cta-1000 | Contact section — abstract architectural detail | 1000 × 690 |

Provide each as `.jpg` and `.webp`.

# Design System — Professional Teal/Petrol Compro (Editorial-Feed Inspired)

> **Note on this revision:** The reference system below borrows its *structure* from an editorial dark-mode magazine brand — a near-black canvas, mega-scale display type, saturated hazard-color tiles, and an all-caps mono timeline feed. All colors have been replaced with the brief's Deep Teal/Petrol palette, and content has been reworked wherever the original voice conflicted with a professional B2B company-profile site (no dark-mode-only canvas, no rainbow tile system, no shouting uppercase). A few structural ideas worth keeping — the timeline/feed layout, color-only hover response, disciplined hairline borders — survive in a calmer form.

## 1. Visual Theme & Atmosphere

This system runs on a white canvas (`#FFFFFF`) as the default reading surface — there is no dark-mode-as-default here. Brand identity is carried by **Deep Teal / Petrol** (`#144651`), applied to the header (once scrolled), the hero band, the footer, and the CTA band, plus reused as the text color on major section titles set directly on white. **Steel Teal** (`#266B8A`) is the system's one accent color — links, hover states, active tabs, tag pills, and one stop of the brand gradient — applied deliberately and sparingly, never as a page-dominant fill.

Where the reference treats color as "hazard tape" — saturated mint and ultraviolet blocks scattered across a near-black feed — this system treats color as a **trust signal**: teal shows up exactly where the brand needs to be present (header, hero, footer, CTA) and as small, precise accents elsewhere (a tag, a link, a divider). Depth stays mostly flat, same as the reference, but for a different reason: on a white canvas, a hairline border alone doesn't read as "elevated," so cards combine a 1px border with a soft shadow rather than leaning on saturated fills the way a dark canvas can.

One structural idea survives intact from the reference: an **Update Feed** — a vertical list of entries marked by a thin rail and a hover response that shifts only the headline's color. It's a good, calm interaction pattern for a blog/news section; it just loses its neon dashed rule and mono-uppercase timestamps in translation.

**Key Characteristics:**
- White canvas (`#FFFFFF`) as the default surface everywhere — dark teal appears only in header-on-scroll, hero, footer, and CTA band
- Deep Teal (`#144651`) + Steel Teal (`#266B8A`) are the only two brand hues — no rainbow of extra accent colors
- Display headlines cap at 48px — confident, never a mega 100px+ wordmark shout
- Cards default to a moderate 10px corner radius — not "pill-everything"
- No saturated full-bleed color-block tiles — category/emphasis comes from a small teal tag, not a colored card fill
- An Update Feed component (adapted from the editorial timeline idea) for blog/news, using a slim hairline rail instead of a neon dashed rule
- Flat-but-soft depth: hairline borders + a whisper of shadow, since white-on-white needs more than color alone to separate a card from the page

## 2. Color Palette & Roles

### Primary (Brand)
- **Deep Teal / Petrol** (`#144651`): The system's main brand-identity color. Used for the header background once scrolled, the hero band, the footer, the CTA band, and as the text color for major section titles ("Produk Kami", "Tentang Kami") set on white.
- **Steel Teal** (`#266B8A`): The system's one accent color. Used for CTA button fills on white sections, links, hover states, active tab underlines, tag pills, and one stop of the brand gradient. Reserved for interactive/accent moments — never a page-dominant fill.

### Supporting Brand Tones (derived)
- **Primary Dark** (`#0E323A`): Hover/pressed state for solid-teal buttons and surfaces.
- **Secondary Light** (`#328CB4`): Hover state for outline buttons/icons, and the lighter gradient stop where it sits over a dark background.

### Surface & Background
- **Canvas** (`#FFFFFF`): The default page floor across the entire site.
- **Surface Elevated** (`#F3F6F6`): A faint teal-tinted off-white for alternating sections (the "Tentang Kami" band, contact CTA card).
- **Surface Soft** (`#FAFBFC`): An even fainter tint, used inside stat cells and quiet nested panels.
- **Hairline** (`#E3E3E3`): The default 1px divider/border tone.
- **Hairline Strong** (`#C9C9C9`): A one-step-darker divider for contexts needing more separation.

### Neutrals & Text
- **Ink** (`#000000`): Reserved for rare maximum-contrast headline emphasis.
- **Body** (`#1A1A1A`): Charcoal — the default color for every heading and paragraph on white. The brief's fixed body-text token.
- **Body Strong** (`#000000`): Emphasized/lead paragraphs.
- **Muted** (`#4D4D4D`): Captions, metadata, feed timestamps. Used instead of Secondary teal for small text — see the contrast note below.
- **On Primary / On Dark** (`#FFFFFF`): Text on any teal or gradient surface (header-on-scroll, hero, CTA band, footer).

### Semantic
- **Warning** (`#B45309`): Form-validation warnings only.
- **Success** (`#15803D`): Form-submission confirmation.
- **Error** (`#B42318`): A dedicated error red, kept deliberately separate from Secondary teal — if teal doubled as both "accent/link" and "error," the two meanings would collide. This is one departure from the reference, which repurposed its ultraviolet accent as the error color; that shortcut doesn't work once teal is already carrying interactive/link meaning.

### Gradient System
Unlike the reference's "zero gradients, ever" rule, this system uses exactly **one** gradient — `#144651` → `#266B8A` — reserved for the hero overlay and the CTA band. It is not a decorative wash used elsewhere; solid teal fills and clean white surfaces carry everything else. The restraint is the same as the reference's philosophy (very few big flourishes); the brief's own color table simply calls for one small gradient use case ("Secondary … gradient"), so it earns a place here.

### Contrast Note
Steel Teal (`#266B8A`) on white measures roughly 3.6:1 — enough for large text, icons, and button fills with white text, but under the 4.5:1 AA threshold for small body text. Timestamps, captions, and footnotes should use `#1A1A1A` or `#4D4D4D`, not raw Secondary teal.

## 3. Typography Rules

### Font Family
- **Montserrat** — single font family across the entire site, weights 400–800. Covers display, UI, body, nav, and button roles. Weight scale: 400 (body), 500 (nav/medium), 600 (button/semibold), 700 (display/bold), 800 (brand/extrabold).

A deliberately smaller type system than the reference's four-typeface stack (display + UI sans + mono + serif). A B2B compro site benefits from fewer families used consistently over a wider variety used for editorial voice.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Hero Display | Montserrat | 48px | 700 | 1.15 | 0 | Hero h1 — the largest type on the site |
| Section Display | Montserrat | 32px | 700 | 1.2 | 0 | Section headlines ("Produk Kami", "Tentang Kami") |
| Sub-section Display | Montserrat | 24px | 600 | 1.3 | 0 | Sub-section heads, CTA-band heads |
| Card Display | Montserrat | 20px | 600 | 1.3 | 0 | Stat numbers, compact feature headlines |
| Card Title | Montserrat | 18px | 600 | 1.35 | 0 | Product/feature/article card titles |
| Lead Paragraph | Montserrat | 16px | 500 | 1.5 | 0 | Sub-headlines, lead paragraphs |
| Minor Heading | Montserrat | 15px | 500 | 1.4 | 0 | Minor sub-headings |
| Eyebrow Label | Montserrat | 13px | 600 | 1.3 | 0.06em | UPPERCASE — the system's only uppercase use |
| Body | Montserrat | 16px | 400 | 1.6 | 0 | Default paragraph copy |
| Body Compact | Montserrat | 14px | 400 | 1.6 | 0 | Footer body, fine print |
| Caption | Montserrat | 13px | 400 | 1.4 | 0.02em | Photo captions, image credits |
| Feed Timestamp | Montserrat | 13px | 500 | 1.4 | 0.02em | Update-feed dates, bylines — sentence case, not mono-uppercase |
| Button Label | Montserrat | 15px | 600 | 1.0 | 0 | Sentence case, never uppercase |
| Nav Link | Montserrat | 15px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
- Sentence case is the default voice everywhere except the single Eyebrow Label role. Uppercase timestamps, buttons, and kickers would read as shouting to a procurement/B2B audience.
- Weight contrast is moderate — display sits at 600–700, body at 400–500 — enough hierarchy to scan without the reference's whisper-vs-shout extremes (weight 300 eyebrows against 900 mega-display).
- Letter-spacing stays near zero except the Eyebrow Label (0.06em) — no aggressive tracking on buttons or timestamps.
- Line-heights stay in a comfortable 1.15–1.6 band throughout. No ultra-tight (sub-1.0) display leading — that "athletic stance" reads as sports/entertainment branding, not professional services.

### Note on Font Substitutes
If Montserrat is unavailable, **Manrope**, **Work Sans**, or **Source Sans 3** are close substitutes at the same weights. The system UI sans stack (`-apple-system, Segoe UI, Roboto`) reads nearly identically at body sizes. No mono or serif substitute is needed — this system deliberately doesn't use either.

## 4. Component Stylings

### Buttons

**Primary — Teal Solid**
- Background: `#144651`
- Text: `#FFFFFF`, Montserrat 15px/600, sentence case
- Border: none
- Border radius: `10px` — a moderate rounded rectangle, not a full "rave pill"
- Padding: `14px 28px`
- Hover: background steps to `#0E323A`
- Focus: 2px `rgba(38,107,138,0.35)` outline ring

**Secondary — Steel Teal Outline**
- Background: transparent
- Text: `#266B8A`
- Border: `1.5px solid #266B8A`
- Border radius: `10px`
- Hover: fills solid `#266B8A` background, white text

**Tertiary — Text Link**
- Text: `#266B8A`, Montserrat 16px/400
- Underline + 4px arrow-shift on hover — sentence case, not mono-uppercase

**Tag / Category Pill (non-interactive)**
- Background: `#F3F6F6`
- Text: `#266B8A`, Montserrat 13px/600 uppercase, 0.06em tracking
- Border radius: full — the one place a true pill shape survives; small tags read fine as pills, buttons and cards don't need to
- Padding: `4px 12px`

### Cards & Containers

**Update-Feed Item** (adapted from the reference's timeline concept)
- Background: `#FFFFFF` with a 1px `#E3E3E3` hairline border, or `#F3F6F6` for alternating rows
- Border radius: `10px`
- A slim 1px hairline rail (not a saturated dashed rule) runs along the left edge in list view, marking each entry
- Date sits in Montserrat 13px/500, sentence case ("12 Jul 2026") above or beside the headline — not mono-uppercase
- Hover: headline color shifts from `#1A1A1A` to `#266B8A`; no lift, no scale — the one behavior kept intact from the reference, since a calm color-only hover suits a professional site too

**Feature / Product Card**
- Background `#FFFFFF`, 1px `#E3E3E3` border, `10px` radius, padding 24px (feature) / 16px (product, image-forward)
- No saturated full-bleed color fill — category distinction comes from the `Tag Pill`, never a colored card background
- Hover: card lifts 4px, border shifts to `#266B8A`, shadow deepens

### Inputs & Forms
- Background `#FFFFFF`, 1px `#E3E3E3` border, `8px` radius, Montserrat 15px text in `#1A1A1A`, placeholder in `#4D4D4D`
- Focus: border shifts to `#266B8A` with a soft 2px `rgba(38,107,138,0.25)` ring
- Error: border turns `#B42318` — a dedicated error red, kept separate from brand teal

### Navigation
- Top nav: `#FFFFFF` background (transparent over the hero, `#144651` once scrolled), logo at a normal header scale — never a mega hero wordmark on every load. Sentence-case nav links, a single `Button Primary` CTA pinned right.
- Hover: links shift from `#1A1A1A` (or white over the hero) to `#266B8A` — color-only response, no underline, echoing the reference's calm hover behavior.
- Active section: 2px `#266B8A` underline.
- Mobile: nav collapses to a hamburger drawer; links stack with 16–20px gaps, sentence case throughout.

### Image Treatment
- Aspect ratios: 16:9 for hero/feature imagery, 1:1 for product catalog shots, 4:3 for article thumbnails.
- Corners match the parent card's `10px` radius (or `8px` for smaller nested thumbnails).
- Frame: 1px `#E3E3E3` hairline around photography sitting on white.
- Hover: static — no zoom, matching the reference's restraint; the headline color is the only interactive response.

## 5. Layout Principles

### Spacing System
- **Base unit:** 4px.
- **Scale:** 4, 8, 12, 16, 24, 40, 64, 96px — a clean, predictable set rather than the reference's dense micro-scale of a dozen odd values.
- **Section padding:** 96px vertical between major bands.
- **Card padding:** 24px standard, 16px for image-forward product cards.
- **Update-feed items:** 16px gap between entries.

### Grid & Container
- **Max width:** ~1240px centered.
- **Grid:** 12-column.
- **Card grids:** product 4-up desktop / 2-up tablet / 1-up mobile; feature/article 3-up desktop.
- **Container padding:** 16px mobile / 24px desktop.

### Whitespace Philosophy
Where the reference uses whitespace as a "palette cleanser" between loud hazard-color bursts, this system uses it more conventionally — as breathing room that signals order. The canvas is white throughout, so whitespace doesn't need to reset anything visually; it simply keeps dense B2B content (specs, service descriptions, procurement details) from feeling cramped.

### Border Radius Scale
- `4px` — badges, small tags
- `8px` — inputs, nested thumbnails
- `10px` — default: buttons, cards, feature/product/article cards
- `16px` — larger feature panels, about-section image frames
- `full` (9999px/50%) — tag pills, circular icon buttons only

Four steps plus full — a deliberately smaller set than the reference's eight-value scale. Fewer, more predictable corner values read as more trustworthy for a B2B audience than a wide "nested announcement" system.

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow | Body text, top nav before scroll |
| Hairline | 1px `#E3E3E3` border | Dividers, input borders, update-feed rail |
| Card | 1px `#E3E3E3` border + soft shadow `0 1px 3px rgba(20,70,81,0.08)` | Product/feature/article cards — the primary elevation device |
| Brand band | Solid `#144651` or gradient fill | Header-on-scroll, hero, CTA band, footer |
| Active indicator | 2px inset underline in `#266B8A` | Active nav link / active tab |

Unlike the reference's "color-as-elevation" approach — which works because saturated fills pop against a near-black canvas — a white card on a white canvas has no color contrast to lean on. `Card` elevation here combines the hairline border with a soft shadow rather than color alone.

### Decorative Depth
- **Accent Divider:** a 3px gradient bar (`#144651` → `#266B8A`) used sparingly under a section eyebrow or between the hero and first content band — this system's one true decorative flourish, used once or twice per page.
- No saturated color-block cards, no rainbow tile system — category and emphasis come from the `Tag Pill`, never a full-bleed colored container.

## 7. Do's and Don'ts

### Do
- **Do** keep white as the canvas for every page — there is no dark-mode-as-default here.
- **Do** reserve `#144651` for header-on-scroll, hero, footer, and CTA band — never the page's default reading surface.
- **Do** use `#266B8A` for accents only: links, active states, tag pills, one gradient stop.
- **Do** keep headlines sentence case; reserve uppercase strictly for the Eyebrow Label role.
- **Do** use a `10px` default radius on cards/buttons/inputs — a small, consistent scale reads more trustworthy than a wide "nested" radius system.
- **Do** keep the Update Feed's color-only hover (headline shifts to Secondary) — a calm interaction pattern worth keeping from the reference.
- **Do** use the accent-divider gradient at most once or twice per page.

### Don't
- **Don't** introduce a rainbow of accent colors (mint/purple/yellow/pink/orange-style hues) — the palette is strictly Primary + Secondary teal plus the neutral system tokens.
- **Don't** fill cards with saturated color as a substitute for hierarchy — use the `Tag Pill` or `Accent Divider` instead.
- **Don't** set body copy or timestamps in `#266B8A` — its contrast on white (~3.6:1) is under AA for small text; use `#1A1A1A` or `#4D4D4D`.
- **Don't** use uppercase for buttons, timestamps, or long labels — reserve it for short eyebrows only.
- **Don't** drop the card border/shadow — on a white canvas, that's the only thing separating a card from the page.
- **Don't** stack two `#144651`-background bands back to back; alternate with white or `#F3F6F6`.
- **Don't** use aggressive display sizes (60px+) — 48px is this system's ceiling, keeping the voice confident rather than shouting.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales 48→32px; product grid 1-up; feed rail collapses to inline dates |
| Tablet | 768–1024px | Nav stays horizontal; product grid 2-up; feature grid 2-up |
| Desktop | 1024–1440px | Full nav; product grid 4-up; feature grid 3-up |
| Wide | > 1440px | Same as desktop; max content 1240px, centered |

### Touch Targets
- Buttons render at 48px height minimum — meets WCAG AAA.
- Icon buttons are 48 × 48px.
- Nav links pad to a 44px tap area on mobile.

### Collapsing Strategy
- Nav collapses to a hamburger drawer below 768px, opening as a full-screen white overlay.
- Grids reduce columns before shrinking card content; photography keeps its native ratio at every breakpoint.
- The Update Feed's hairline rail stays 1px at every breakpoint; dates move above the headline on mobile instead of sitting in a side rail.
- Hero Display scales 48px → 32px on mobile; Card Title stays fixed at 18px regardless of column count.

### Image Behavior
- Hero photography crops responsively — wider crops at desktop, taller crops on mobile.
- Product photography keeps its native 1:1 ratio at every size.
- The logo scales proportionally with viewport width.

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA / Brand:** "Deep Teal / Petrol (`#144651`)"
- **Background (Canvas):** "White (`#FFFFFF`)"
- **Accent (Secondary):** "Steel Teal (`#266B8A`)"
- **Heading / Body Text:** "Charcoal (`#1A1A1A`)"
- **Secondary Text / Metadata:** "Muted Gray (`#4D4D4D`)"
- **Card Border:** "Divider Gray (`#E3E3E3`)"
- **Link Hover:** "Steel Teal (`#266B8A`)" — this system doesn't introduce a separate hover-only hue.

### Example Component Prompts
1. *"Create an update-feed item on a white canvas: a 10px-radius card with a 1px `#E3E3E3` border, a Montserrat 13px/500 date above the headline, and an 18px/600 Montserrat headline in `#1A1A1A` below. No shadow at rest; hover only shifts the headline color to `#266B8A`."*
2. *"Design a primary CTA button with a `#144651` fill, white Montserrat 15px/600 sentence-case label, 10px radius, 14px × 28px padding. Hover shifts the background to `#0E323A`."*
3. *"Build a hero band with a 48px Montserrat 700 headline in white, a 13px uppercase eyebrow above it in `rgba(255,255,255,0.85)`, on a `#144651` background with a subtle `#144651` → `#266B8A` gradient overlay, 96px vertical padding."*
4. *"Create a product card with a 1:1 photo, an `#F3F6F6` category tag pill in `#266B8A` uppercase 13px, and an 18px/600 title below, 10px card radius, 1px `#E3E3E3` border. Hover lifts 4px with the border shifting to `#266B8A`."*
5. *"Design a secondary outline button with a transparent background, 1.5px `#266B8A` border, `#266B8A` text, 10px radius. Hover fills solid `#266B8A` with white text."*

### Iteration Guide
1. Audit the canvas. If a dark or near-black background appears anywhere outside the header/hero/footer/CTA band, flatten it to white.
2. Audit corners. Everything should land on 4/8/10/16px or full — no odd in-between radii, no "everything is a pill" rounding.
3. Audit shadows. Cards need the hairline border + soft shadow combination; strip any drop shadow that isn't the standard `0 1px 3px rgba(20,70,81,0.08)`.
4. Audit type roles. Montserrat for everything, weight differentiated by role (400 body, 500 nav, 600 button, 700 display). Uppercase only on the Eyebrow Label role.
5. Audit accent usage. `#266B8A` should appear as links, tags, active states, and one gradient stop — never a full-bleed card background or a rainbow of extra hues.
6. Audit labels. Only the Eyebrow Label is uppercase; timestamps, buttons, and nav links stay sentence case.
7. Audit link hover. Links hover from `#1A1A1A` (or white over dark bands) to `#266B8A` — no separate "hover-only" hue needs inventing.
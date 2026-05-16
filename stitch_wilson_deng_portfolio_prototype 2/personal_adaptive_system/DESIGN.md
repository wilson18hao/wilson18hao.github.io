---
name: Personal Adaptive System
colors:
  surface: '#fdf8fd'
  surface-dim: '#ddd9de'
  surface-bright: '#fdf8fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f2f8'
  surface-container: '#f1ecf2'
  surface-container-high: '#ebe7ec'
  surface-container-highest: '#e5e1e7'
  on-surface: '#1c1b1f'
  on-surface-variant: '#494551'
  inverse-surface: '#313034'
  inverse-on-surface: '#f4eff5'
  outline: '#7a7582'
  outline-variant: '#cbc4d2'
  surface-tint: '#6750a4'
  primary: '#4f378a'
  on-primary: '#ffffff'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#cfbcff'
  secondary: '#625b71'
  on-secondary: '#ffffff'
  secondary-container: '#e8def8'
  on-secondary-container: '#686177'
  tertiary: '#633b48'
  on-tertiary: '#ffffff'
  tertiary-container: '#7d5260'
  on-tertiary-container: '#ffcbda'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e8def8'
  secondary-fixed-dim: '#ccc2dc'
  on-secondary-fixed: '#1e192b'
  on-secondary-fixed-variant: '#4a4458'
  tertiary-fixed: '#ffd9e3'
  tertiary-fixed-dim: '#eeb8c8'
  on-tertiary-fixed: '#31111d'
  on-tertiary-fixed-variant: '#633b48'
  background: '#fdf8fd'
  on-background: '#1c1b1f'
  surface-variant: '#e5e1e7'
typography:
  display-lg:
    fontFamily: Roboto
    fontSize: 57px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Roboto
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Roboto
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  title-lg:
    fontFamily: Roboto
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  title-md:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.15px
  body-lg:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-md:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  unit: 8px
  container-padding-mobile: 16px
  container-padding-desktop: 24px
  gutter: 24px
  section-gap: 80px
---

## Brand & Style

The design system is rooted in the philosophy of adaptive expression, blending the logic of AI Finance with the spirited personality of a Senior Product Manager. It utilizes a refined implementation of Material 3 principles, emphasizing tonal harmony over harsh contrasts.

The aesthetic is "Personal & Spirited," characterized by organic blurred shapes that suggest movement and intelligence without relying on photography. It replaces personal imagery with typographic monograms and abstract wireframe UI components to represent product thinking. The UI should feel soft and inviting, yet structurally disciplined, mirroring the transition from complex financial data to intuitive user experiences.

## Colors

The color system is built on a tonal palette derived from the seed color. It prioritizes legibility and hierarchy through container levels rather than drop shadows.

- **Primary & Secondary:** Used for high-emphasis actions and state-heavy components.
- **Tonal Surfaces:** The layout uses `surface_container` and `surface_container_low` to create a tiered hierarchy of information.
- **On-Colors:** Strict adherence to `on_surface` and `on_surface_variant` ensures accessible contrast ratios for text and iconography.
- **Accents:** The tertiary wine-tone is used sparingly to highlight AI-driven insights or specific finance-related metrics.

## Typography

This design system uses **Roboto** exclusively to maintain a clean, systematic, and professional look. 

- **Display & Headlines:** Used for section titles and the "WD" monogram branding. Weight is kept at 400 for a more approachable, modern feel.
- **Titles & Labels:** Medium weight (500) is used for component headers and navigation items to ensure they stand out against body copy.
- **Body Text:** Standardized at 16px (Large) for primary reading and 14px (Medium) for secondary descriptions or metadata.
- **Tracking:** Tighter letter spacing on display styles; wider on small labels to maintain legibility.

## Layout & Spacing

The layout follows a 12-column grid for desktop and a 4-column grid for mobile. It employs a fluid-to-fixed model where content is centered with a max-width of 1200px.

- **Rhythm:** An 8px baseline grid governs all vertical rhythm.
- **Sectioning:** Large gaps (80px+) are used between major portfolio sections (Experience, Projects, Philosophy) to allow the "spirited" organic background blurs to breathe.
- **Adaptive Containers:** Main content areas should use dynamic padding that scales from 16px on mobile to 24px on larger screens.

## Elevation & Depth

In line with modern Material standards, this design system eschews heavy drop shadows in favor of **Tonal Elevation**.

Depth is communicated by color shifting:
- **Level 0 (Base):** `surface` hex.
- **Level 1 (Cards/Lists):** `surface_container_low`.
- **Level 2 (Active elements):** `surface_container`.
- **Interactive:** Hover states on cards should use a subtle 1px border of `outline` at low opacity (12%) or a slight shift in tonal luminance.

**Organic Blurs:** Background "blobs" in primary and tertiary colors should be placed at the lowest Z-index with a 100px+ backdrop blur to create a sense of environmental depth without cluttering the foreground.

## Shapes

The shape language is the defining "spirited" characteristic of this system. It favors high-radius curves to soften the technical nature of AI and Finance.

- **Standard Cards:** 24px corner radius.
- **Major Section Containers:** 32px to 48px corner radius, creating a "smoothie" or "organic" frame for content.
- **Interactive Elements:** Buttons, chips, and tags are strictly pill-shaped (full radius).
- **Abstract UI:** Wireframe representations of AI dashboards should use 12px radii for internal elements to maintain a nested, cohesive look.

## Components

### Buttons
Primary actions use a filled pill shape with `primary` background and `on_primary` text. Secondary actions use the `secondary_container` with `on_surface` text.

### Cards
Portfolio pieces are housed in cards with a `24px` radius and `surface_container_low` background. They contain no borders unless they are in a "hover" state.

### Monogram (WD)
Instead of an avatar, use a circular `primary_color` container with `headline-lg` white text. This should be treated as the main brand anchor in the navigation and hero sections.

### Chips
Used for skills (e.g., "AI Strategy", "Product Management"). These are pill-shaped with a 1px `outline` and `label-md` typography.

### Input Fields & Search
Styled with a filled `surface_container` and a bottom-stroke only, or a fully rounded pill shape for a more modern, adaptive look.

### Abstract Wireframes
When illustrating AI Finance concepts, use light-grey (`outline` at 20%) lines and blocks with rounded corners to represent data visualizations and interface logic.
---
name: Sacred Path Identity
colors:
  surface: '#f7f9ff'
  surface-dim: '#d1dbe8'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e4effd'
  surface-container-high: '#dfe9f7'
  surface-container-highest: '#d9e3f1'
  on-surface: '#121d26'
  on-surface-variant: '#42474e'
  inverse-surface: '#27313c'
  inverse-on-surface: '#e8f2ff'
  outline: '#73777f'
  outline-variant: '#c2c7cf'
  surface-tint: '#3d6185'
  primary: '#002541'
  on-primary: '#ffffff'
  primary-container: '#123b5d'
  on-primary-container: '#82a5cd'
  inverse-primary: '#a6caf3'
  secondary: '#7d5700'
  on-secondary: '#ffffff'
  secondary-container: '#fdc257'
  on-secondary-container: '#725000'
  tertiary: '#002a1c'
  on-tertiary: '#ffffff'
  tertiary-container: '#00422f'
  on-tertiary-container: '#63b291'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e4ff'
  primary-fixed-dim: '#a6caf3'
  on-primary-fixed: '#001d34'
  on-primary-fixed-variant: '#24496c'
  secondary-fixed: '#ffdeaa'
  secondary-fixed-dim: '#f6bd53'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#a3f3cf'
  tertiary-fixed-dim: '#87d6b4'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#00513a'
  background: '#f7f9ff'
  on-background: '#121d26'
  surface-variant: '#d9e3f1'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is built on a foundation of **Trustworthy Warmth** and **Premium Accessibility**. It bridges the gap between traditional spiritual values and modern travel convenience, specifically catering to multigenerational groups and senior citizens.

The design style is **Modern Corporate with Tactile Warmth**. It avoids the coldness of pure minimalism by using rich, symbolic colors and soft, inviting geometry. The interface should feel like a well-guided journey: organized, serene, and dependable. We prioritize clarity over cleverness, ensuring that the emotional response is one of safety and spiritual anticipation. High contrast and generous hit targets are mandatory to accommodate users with varying degrees of digital proficiency.

## Colors

The palette is rooted in a heritage-inspired spectrum that balances authority with hospitality.

- **Primary (Deep Royal Blue):** Used for primary navigation, headers, and core brand elements to establish a sense of institutional stability.
- **Secondary (Temple Gold):** Reserved for highlights, spiritual iconography, and premium badges. It adds a glow of warmth and signifies "special" status.
- **Accent (Deep Green):** Specifically utilized for safety indicators, "Verified" status, and confirmation actions, reinforcing the feeling of a secure environment.
- **Background & Surface:** We utilize a warm off-white background to reduce eye strain compared to pure white, while keeping pure white for interactive surfaces like cards and modals to create clear containment.

## Typography

Typography is the primary engine of accessibility in this design system. We use **Manrope** for headings to provide a modern, structural clarity that remains friendly due to its geometric yet open curves. **Inter** is used for body text for its world-class legibility and neutral tone.

**Key Rules:**
- **Minimum Size:** No text should ever fall below 16px.
- **Readability:** Line heights are intentionally generous (1.6x for body) to assist senior readers in tracking lines of text.
- **Contrast:** Ensure all text-on-background combinations meet WCAG AA standards at a minimum, aiming for AAA on core itinerary details.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a premium, editorial feel that doesn't feel overly "stretched" on wide monitors.

- **Desktop:** 12-column grid with a 1280px max-width, 24px gutters, and 48px side margins.
- **Tablet:** 8-column grid with 24px gutters and 32px side margins.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins.

We utilize a **vertical stack rhythm** based on 12px/24px increments. Generous whitespace between sections is encouraged to prevent cognitive overload, allowing the user to process one "travel step" or "package feature" at a time.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** supplemented by **Ambient Shadows**. 

- **Level 0 (Base):** Warm Off-White background (#F8F6F1).
- **Level 1 (Cards):** White surfaces (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(18, 59, 93, 0.08)). This "floats" the content without creating harsh lines.
- **Level 2 (Modals/Popovers):** Higher elevation with a more pronounced shadow (0px 12px 32px rgba(18, 59, 93, 0.12)) and a subtle 1px border in Muted Grey at 10% opacity.

Avoid harsh black shadows; instead, use shadows tinted with the Primary Blue to maintain a sophisticated, cohesive color profile.

## Shapes

The shape language is **Softly Structured**. We avoid sharp 90-degree corners to remain approachable, but avoid hyper-rounded "bubble" shapes to maintain a professional, organized appearance.

- **Primary Container Radius:** 16px (Cards, Image Containers, Sections).
- **Interactive Element Radius:** 12px (Buttons, Input Fields).
- **Small Element Radius:** 8px (Tags, Chips, Checkboxes).

## Components

### Buttons
- **Primary:** Deep Royal Blue background with White text. Height: 56px for high touch-accuracy.
- **Secondary:** Transparent with a 2px Deep Royal Blue border. 
- **Tertiary/Ghost:** Gold text for "View Details" or "Back" actions.

### Package Cards
The core component of the design system. 
- Must feature a 16px border radius and Level 1 elevation.
- **Iconography Tray:** A dedicated row at the bottom of the card using Secondary Gold icons to denote "Hotel," "Meals," "Guide," and "Transport."
- **Price Display:** Positioned bottom-right in bold Manrope, Primary Blue.

### Input Fields
- Labels must be persistent (not placeholder-only) to assist users with memory or vision impairments.
- 12px border radius with a 1.5px border in Muted Grey. Focus state uses a 2px Primary Blue border.

### Itinerary Lists
- Vertical timeline style with Deep Green dots for "Safety Checkpoints" and Secondary Gold dots for "Spiritual Sites."
- High vertical padding (16px - 24px) between items to ensure distinct readability.
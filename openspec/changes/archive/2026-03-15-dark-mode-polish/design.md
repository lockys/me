## Context

Dark mode was implemented with proper theme definitions and all hardcoded colors replaced with theme variables. However, a visual audit revealed the SVG badge doesn't adapt, some elements lack smooth transitions, and Note.jsx uses inline styles.

## Goals / Non-Goals

**Goals:**
- Badge visually adapts to dark mode without creating a second SVG
- All theme-dependent properties have CSS transitions for smooth switching
- All components use styled-components instead of inline styles

**Non-Goals:**
- Changing dark theme color values
- WCAG contrast audit
- Redesigning any component layout

## Decisions

### 1. Use CSS filter on badge for dark mode
Apply `filter: invert(1)` on the badge image when dark mode is active, using the existing `theme.wingFilter` approach. This inverts white→black and black→white, making it readable on dark backgrounds without a second SVG file.

**Why**: Simplest approach, no new assets, consistent with how the wing sprite already handles dark mode.

**Alternative**: Wrapping in a themed container with background — adds unnecessary DOM and doesn't solve the stroke color.

## Risks / Trade-offs

- **[Filter inversion quality]** → The badge is black & white, so inversion is clean. No color distortion risk.

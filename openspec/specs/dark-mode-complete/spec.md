## ADDED Requirements

### Requirement: Dark theme has distinct colors
The dark theme object in `theme.js` SHALL define visually distinct dark-appropriate values for all properties: `textColor`, `background`, `wingFilter`, `border`, `containerBorder`. It SHALL also add `accentColor` and `highlightBg` properties to both light and dark themes.

#### Scenario: Dark theme renders dark background and light text
- **WHEN** user enables dark mode
- **THEN** the page background SHALL be a dark color (e.g. `#1a1a2e`) and text SHALL be a light color (e.g. `#e0e0e0`)

#### Scenario: Light theme retains current appearance
- **WHEN** user uses light mode
- **THEN** the page SHALL render with the existing light theme colors (`#fffbf8` background, `#2A4D4C` text)

### Requirement: No hardcoded colors in components
All color values in styled components SHALL reference theme properties. The hardcoded `#c7372f` accent color in Portfolio.jsx and Reaction.jsx SHALL be replaced with `theme.accentColor`. The hardcoded `#E2FFF2` and `#F0FFF7` background colors in Intro.jsx SHALL be replaced with `theme.highlightBg`.

#### Scenario: Accent color adapts to theme
- **WHEN** user switches between light and dark mode
- **THEN** the accent color used in `SCTimeSpan`, `SCAnimatedDot`, `SCFooterLink:hover`, and `SCEmojiButton:hover` SHALL change to match the active theme's `accentColor`

#### Scenario: Intro highlight background adapts to theme
- **WHEN** user switches between light and dark mode
- **THEN** the `ProfileImage` and `IntroContent` background colors SHALL change to match the active theme's `highlightBg`

### Requirement: Wing filter supports dark mode
The `wingFilter` property in the dark theme SHALL apply a CSS filter (e.g. `invert(1)`) to make the wing navigation sprite visible against dark backgrounds.

#### Scenario: Wing sprite visible in dark mode
- **WHEN** dark mode is active
- **THEN** the wing navigation sprite SHALL be visually distinguishable against the dark background

## Why

Dark mode was recently implemented but has visual rough edges: the "Not By AI" badge has a hardcoded white SVG background that clashes with dark backgrounds, some interactive elements lack smooth color transitions when switching themes, and minor styling inconsistencies remain.

## What Changes

- **Badge dark mode support**: Make the Not By AI badge adapt to dark mode (invert filter or themed wrapper)
- **Smooth transitions**: Add missing `transition` properties to `SCEmojiButton` (Reaction.jsx) and `IntroContent` (Intro.jsx) for border/background color changes during theme switch
- **Note.jsx consistency**: Convert inline styles to styled-components for theme consistency

## Capabilities

### New Capabilities

### Modified Capabilities
- `dark-mode-complete`: Adding badge adaptation, transition smoothness, and component consistency requirements

## Impact

- **src/Portfolio.jsx**: Badge wrapper or filter for dark mode adaptation
- **src/components/Reaction.jsx**: Add transition property to SCEmojiButton
- **src/components/Intro.jsx**: Add transition to IntroContent background
- **src/components/Note.jsx**: Convert inline styles to styled-components

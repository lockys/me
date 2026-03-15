## 1. Badge Dark Mode Adaptation

- [x] 1.1 In `src/Portfolio.jsx`, convert the badge `<img>` to a styled component with `filter: ${({ theme }) => theme.wingFilter}` and `transition: filter 0.5s ease-in-out`

## 2. Smooth Transitions

- [x] 2.1 In `src/components/Reaction.jsx`, add `transition: border-color 0.2s ease-in-out` to `SCEmojiButton`
- [x] 2.2 In `src/components/Intro.jsx`, add `transition: background-color 0.3s ease-in-out` to `IntroContent`

## 3. Note.jsx Styled Components

- [x] 3.1 In `src/components/Note.jsx`, replace inline `style` attributes with styled-components

## 4. Verify

- [x] 4.1 Toggle dark/light mode and confirm badge inverts, transitions are smooth, and Note page renders correctly

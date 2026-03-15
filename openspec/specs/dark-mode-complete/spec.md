## MODIFIED Requirements

### Requirement: No hardcoded colors in components
All color values in styled components SHALL reference theme properties. The Not By AI badge SHALL adapt to dark mode using a CSS filter that inverts its colors when dark theme is active.

#### Scenario: Badge adapts to dark mode
- **WHEN** dark mode is active
- **THEN** the Not By AI badge SHALL be visually readable against the dark background via CSS filter inversion

#### Scenario: Badge appears normal in light mode
- **WHEN** light mode is active
- **THEN** the Not By AI badge SHALL display with its original white background and black text

### Requirement: Smooth theme transitions
All theme-dependent CSS properties (color, background-color, border-color, filter) SHALL include CSS `transition` properties for smooth visual switching between light and dark modes.

#### Scenario: Theme switch is smooth
- **WHEN** user toggles between light and dark mode
- **THEN** all color changes SHALL animate smoothly (no instant flashing)

### Requirement: No inline styles for themed elements
Components SHALL use styled-components instead of inline `style` attributes, ensuring all styling is consistent and theme-aware.

#### Scenario: Note component uses styled-components
- **WHEN** Note.jsx renders
- **THEN** it SHALL use styled-components instead of inline style attributes

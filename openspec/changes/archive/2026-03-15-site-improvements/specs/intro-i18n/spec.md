## ADDED Requirements

### Requirement: Language toggle on Intro page
The Intro page SHALL display a 中/英 toggle button that switches the intro text between English and Traditional Chinese.

#### Scenario: Toggle from English to Chinese
- **WHEN** user clicks the 中 button while viewing English text
- **THEN** the intro text SHALL switch to Traditional Chinese
- **AND** proper names (Calvin Hao-Wei Jeng, @lockys, DBS Bank, Computer Science, National Tsing Hua university) SHALL remain in English

#### Scenario: Toggle from Chinese to English
- **WHEN** user clicks the 英 button while viewing Chinese text
- **THEN** the intro text SHALL switch back to English

### Requirement: Language preference persisted
The selected language SHALL be persisted in localStorage so the user's choice is remembered across page loads.

#### Scenario: Language restored on revisit
- **WHEN** user selects Traditional Chinese and later revisits the site
- **THEN** the Intro page SHALL display in Traditional Chinese

### Requirement: Translation scope limited to Intro
Only the Intro page (`/`) SHALL support language switching. Other routes (`/exp`, `/note`, `/kudos`) SHALL remain English-only and SHALL NOT display a language toggle.

#### Scenario: No toggle on other pages
- **WHEN** user navigates to /exp, /note, or /kudos
- **THEN** no language toggle button SHALL be visible

### Requirement: Translation stored as local data
Translations SHALL be stored as a JavaScript object (e.g. `{ en: {...}, zh: {...} }`) co-located with the Intro component. No external i18n library SHALL be added.

#### Scenario: Translation data structure
- **WHEN** a new translation key is needed
- **THEN** it SHALL be added to the local translation object without installing additional packages

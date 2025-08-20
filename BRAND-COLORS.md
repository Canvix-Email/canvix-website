# Canvix Brand Colors

## Current Color Palette

### Primary Colors
- **Bright Purple** `#A259FF`
  - Primary brand color, gradients, buttons, accents
  - Used for: CTA buttons, active states, highlights

- **Electric Coral** `#FF6F61` 
  - Secondary brand color, gradients, accents
  - Used for: Secondary buttons, gradient endpoints, highlights

### Background Colors
- **Jet Black** `#0F0F0F`
  - Main background color
  - Used for: Page backgrounds, cards, containers

- **Charcoal Gray** `#1E1E1E`
  - Surface and section backgrounds
  - Used for: Cards, sections, elevated surfaces

- **Deep Royal Blue** `#1E3A8A`
  - Premium background color for hero sections
  - Used for: Hero backgrounds, feature sections, premium content areas

- **Bright Blue** `#3B82F6`
  - Complementary accent color for gradients
  - Used for: Blue gradient endpoints, accent elements

### Text Colors
- **Soft White** `#F5F5F5`
  - Primary text color
  - Used for: Headlines, body text, primary content

- **Cool Gray** `#AAAAAA`
  - Muted/secondary text color
  - Used for: Descriptions, secondary content, placeholders

## Tailwind CSS Classes

```css
/* Primary Colors */
bg-[#A259FF]     /* Bright Purple background */
text-[#A259FF]   /* Bright Purple text */
border-[#A259FF] /* Bright Purple border */

bg-[#FF6F61]     /* Electric Coral background */
text-[#FF6F61]   /* Electric Coral text */

/* Backgrounds */
bg-[#0F0F0F]     /* Jet Black */
bg-[#1E1E1E]     /* Charcoal Gray */
bg-[#1E3A8A]     /* Deep Royal Blue */
bg-[#3B82F6]     /* Bright Blue */

/* Text */
text-[#F5F5F5]   /* Soft White */
text-[#AAAAAA]   /* Cool Gray */

/* Gradients */
bg-gradient-to-r from-[#A259FF] to-[#FF6F61]  /* Primary gradient */
bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] /* Blue gradient */
```

## Usage Guidelines

### Gradients
- **Strategic use only**: Hero buttons, header buttons, pricing CTA, footer cards
- **Primary gradient**: `from-[#A259FF] to-[#FF6F61]`

### Button Styles
- **Primary buttons**: Gradient or solid purple `#A259FF`
- **Secondary buttons**: Outlined style with purple border
- **Legal page buttons**: Solid colors on white backgrounds

### Text Hierarchy
- **Headlines**: `#F5F5F5` (Soft White)
- **Body text**: `#F5F5F5` (Soft White) 
- **Secondary text**: `#AAAAAA` (Cool Gray)
- **On white backgrounds**: `#0F0F0F` or `#666666`

### Backgrounds
- **Main pages**: `#0F0F0F` (Jet Black)
- **Cards/sections**: `#1E1E1E` (Charcoal Gray)
- **Legal CTAs**: `white` with light gray border
- **Outlined elements**: `#0F0F0F` with colored borders

## Recommended Additional Colors

### Functional Colors (Optional)
These colors could be added for UI states and feedback:

- **Success Green** `#22C55E`
  - Used for: Success messages, confirmations, positive states
  - Example: Form submissions, successful saves

- **Warning Orange** `#F59E0B` 
  - Used for: Warnings, important alerts, caution states
  - Example: Unsaved changes, important notices

- **Error Red** `#EF4444`
  - Used for: Error messages, destructive actions, failed states  
  - Example: Form errors, deletion confirmations

### Extended Neutrals (Already in use)
- **Light Gray** `#E5E5E5` - Borders, dividers
- **Medium Gray** `#666666` - Text on white backgrounds

## Color Psychology
- **Purple**: Creativity, innovation, premium quality
- **Coral**: Energy, enthusiasm, approachability  
- **Dark backgrounds**: Professional, modern, focus on content
- **High contrast**: Accessibility, readability, clarity
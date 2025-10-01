# Design System Storybook - Complete Setup

Your monorepo now includes **ALL UI components** as Stencil.js web components with Storybook documentation!

## 📁 Project Structure

```
├── packages/
│   └── web-components/          # Stencil.js web components
│       ├── src/
│       │   ├── components/      # All component definitions
│       │   │   ├── ds-button/
│       │   │   ├── ds-badge/
│       │   │   ├── ds-card/
│       │   │   ├── ds-input/
│       │   │   ├── ds-textarea/
│       │   │   ├── ds-checkbox/
│       │   │   ├── ds-switch/
│       │   │   ├── ds-label/
│       │   │   ├── ds-separator/
│       │   │   ├── ds-skeleton/
│       │   │   ├── ds-progress/
│       │   │   ├── ds-slider/
│       │   │   ├── ds-alert/
│       │   │   ├── ds-avatar/
│       │   │   └── ds-accordion/
│       │   └── global/          # Design tokens (CSS variables)
│       ├── stencil.config.ts
│       └── package.json
├── .storybook/                  # Storybook configuration
└── src/                         # Your existing React app (unchanged)
```

## 🚀 Quick Start

### 1. Build Web Components

```bash
cd packages/web-components
npm install
npm run build
cd ../..
```

### 2. Run Storybook

```bash
npx storybook dev -p 6006
```

Storybook will open at `http://localhost:6006`

### 3. View Components Demo

Or start the Stencil dev server:
```bash
cd packages/web-components
npm start
```

Visit `http://localhost:3333` to see all components in action

## 📦 Complete Component List

### ✅ Form Components
- **ds-input** - Text input with multiple types (text, email, password, etc.)
- **ds-textarea** - Multi-line text input
- **ds-checkbox** - Checkbox with custom styling
- **ds-switch** - Toggle switch
- **ds-label** - Form labels
- **ds-slider** - Range slider

### ✅ Display Components
- **ds-button** - Button with variants and sizes
- **ds-badge** - Status badges and labels
- **ds-card** - Card with header, content, and footer
- **ds-alert** - Alert messages with variants
- **ds-avatar** - User avatars with fallback
- **ds-separator** - Horizontal or vertical divider
- **ds-skeleton** - Loading skeletons
- **ds-progress** - Progress bars

### ✅ Layout Components
- **ds-accordion** - Collapsible content sections

## 🎨 Design Tokens

All components use CSS custom properties from your existing design system:

```css
/* Colors */
--ds-color-background
--ds-color-foreground
--ds-color-primary
--ds-color-secondary
--ds-color-muted
--ds-color-accent
--ds-color-destructive
--ds-color-border

/* Spacing */
--ds-spacing-xs, sm, md, lg, xl

/* Typography */
--ds-font-size-xs, sm, base, lg, xl, 2xl
--ds-font-weight-normal, medium, semibold, bold

/* Other */
--ds-radius-sm, md, lg, full
--ds-shadow-sm, md, lg
--ds-transition-fast, base, slow
```

## 🔧 Using Components

### In HTML
```html
<script type="module" src="./dist/design-system/design-system.esm.js"></script>

<ds-button variant="primary">Click me</ds-button>
<ds-input type="email" placeholder="email@example.com"></ds-input>
<ds-card>
  <ds-card-header>
    <ds-card-title>Title</ds-card-title>
  </ds-card-header>
</ds-card>
```

### In React
```jsx
import { defineCustomElements } from '@design-system/web-components/loader';

defineCustomElements();

function App() {
  return (
    <>
      <ds-button variant="primary">Click me</ds-button>
      <ds-input type="email" placeholder="Email" />
    </>
  );
}
```

### In Vue
```vue
<template>
  <div>
    <ds-button variant="primary">Click me</ds-button>
    <ds-input type="email" placeholder="Email" />
  </div>
</template>

<script>
import { defineCustomElements } from '@design-system/web-components/loader';
defineCustomElements();
</script>
```

## 📖 Storybook Features

Each component includes:
- ✅ Interactive controls to test all props
- ✅ Multiple story examples
- ✅ Auto-generated documentation
- ✅ Code snippets
- ✅ Accessibility information

## 🎯 Component Events

Many components emit custom events:

```javascript
// Input events
input.addEventListener('dsInput', (e) => console.log(e.detail));
input.addEventListener('dsChange', (e) => console.log(e.detail));

// Checkbox events
checkbox.addEventListener('dsChange', (e) => console.log(e.detail)); // boolean

// Switch events
switchEl.addEventListener('dsChange', (e) => console.log(e.detail)); // boolean

// Slider events
slider.addEventListener('dsInput', (e) => console.log(e.detail)); // number
slider.addEventListener('dsChange', (e) => console.log(e.detail)); // number
```

## 🚢 Publishing

To publish your design system to npm:

1. Update `packages/web-components/package.json` with your package name
2. Build the components: `cd packages/web-components && npm run build`
3. Publish: `npm publish`

## 🌟 Benefits

✅ **Framework-agnostic** - Use in any framework or vanilla JS  
✅ **Encapsulated** - Shadow DOM prevents style conflicts  
✅ **Lightweight** - Small bundle size with lazy loading  
✅ **Type-safe** - Full TypeScript support  
✅ **Documented** - Complete Storybook documentation  
✅ **Consistent** - All components use the same design tokens  
✅ **Accessible** - Built with accessibility in mind

## 📝 Next Steps

1. ✅ All core components created
2. 🔄 Build and test in Storybook
3. 📤 Publish to npm
4. 🎨 Customize design tokens for your brand
5. 🔧 Add more components as needed

## 🤝 Your React App

Your existing React app in `src/` remains **completely unchanged**. The Stencil components are a separate design system library that can be:
- Used in your React app
- Published to npm
- Used in other projects
- Documented in Storybook

Both systems coexist independently! 🎉

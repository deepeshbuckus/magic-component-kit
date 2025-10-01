# Design System Web Components

A collection of reusable web components built with Stencil.js, based on your design system tokens.

## 🚀 Getting Started

### Development

```bash
# Build the components
npm run build

# Start development server
npm start
```

### Components

- **ds-button** - Button component with multiple variants and sizes
- **ds-badge** - Badge component for labels and tags
- **ds-card** - Card component with header, content, and footer sections

## 📦 Using the Components

### In HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="./dist/design-system/design-system.esm.js"></script>
  </head>
  <body>
    <ds-button variant="primary">Click me</ds-button>
    <ds-badge variant="default">New</ds-badge>
  </body>
</html>
```

### In React

```jsx
import { defineCustomElements } from './dist/loader';

defineCustomElements();

function App() {
  return (
    <div>
      <ds-button variant="primary">Click me</ds-button>
      <ds-badge variant="default">New</ds-badge>
    </div>
  );
}
```

### In Vue

```vue
<template>
  <div>
    <ds-button variant="primary">Click me</ds-button>
    <ds-badge variant="default">New</ds-badge>
  </div>
</template>

<script>
import { defineCustomElements } from './dist/loader';

defineCustomElements();
</script>
```

## 🎨 Design Tokens

All components use CSS custom properties (CSS variables) from the design system:

- `--ds-color-*` - Color tokens
- `--ds-spacing-*` - Spacing tokens
- `--ds-radius-*` - Border radius tokens
- `--ds-font-*` - Typography tokens
- `--ds-shadow-*` - Shadow tokens

## 📚 Storybook

View all components in Storybook:

```bash
npm run storybook
```

## 🏗️ Building for Production

```bash
npm run build
```

This will generate:
- `dist/` - Distribution files
- `dist/loader/` - Lazy loading scripts
- `www/` - Development preview

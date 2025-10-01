# Design System Storybook Setup

Your monorepo is now configured with Stencil.js web components and Storybook!

## 📁 Project Structure

```
├── packages/
│   └── web-components/          # Stencil.js web components
│       ├── src/
│       │   ├── components/      # Component definitions
│       │   │   ├── ds-button/
│       │   │   ├── ds-badge/
│       │   │   └── ds-card/
│       │   └── global/          # Design tokens (CSS variables)
│       ├── stencil.config.ts    # Stencil configuration
│       └── package.json
├── .storybook/                  # Storybook configuration
│   ├── main.ts
│   └── preview.ts
└── src/                         # Your existing React app
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
npm run storybook
```

Storybook will open at `http://localhost:6006`

### 3. Development Workflow

**Watch mode for components:**
```bash
cd packages/web-components
npm start
```

**Run Storybook in another terminal:**
```bash
npm run storybook
```

## 📦 Available Components

### ds-button
Button component with variants and sizes.

**Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`  
**Sizes:** `default`, `sm`, `lg`, `icon`

```html
<ds-button variant="primary">Click me</ds-button>
<ds-button variant="outline" size="sm">Small button</ds-button>
```

### ds-badge
Badge component for labels and status indicators.

**Variants:** `default`, `secondary`, `destructive`, `outline`

```html
<ds-badge variant="default">New</ds-badge>
<ds-badge variant="destructive">Error</ds-badge>
```

### ds-card
Card component with composable sections.

```html
<ds-card>
  <ds-card-header>
    <ds-card-title>Title</ds-card-title>
    <ds-card-description>Description</ds-card-description>
  </ds-card-header>
  <ds-card-content>
    Content here
  </ds-card-content>
  <ds-card-footer>
    <ds-button>Action</ds-button>
  </ds-card-footer>
</ds-card>
```

## 🎨 Design Tokens

All components use CSS custom properties matching your design system:

- `--ds-color-*` - Colors (mapped from your existing tokens)
- `--ds-spacing-*` - Spacing scale
- `--ds-radius-*` - Border radius
- `--ds-font-*` - Typography
- `--ds-shadow-*` - Shadows
- `--ds-transition-*` - Transitions

## 🔧 Using Components in Other Projects

### Install from npm (after publishing)

```bash
npm install @design-system/web-components
```

### In React

```jsx
import { defineCustomElements } from '@design-system/web-components/loader';

defineCustomElements();

function App() {
  return <ds-button variant="primary">Click me</ds-button>;
}
```

### In Vue

```vue
<template>
  <ds-button variant="primary">Click me</ds-button>
</template>

<script>
import { defineCustomElements } from '@design-system/web-components/loader';
defineCustomElements();
</script>
```

### In vanilla HTML

```html
<script type="module" src="https://unpkg.com/@design-system/web-components/dist/design-system/design-system.esm.js"></script>

<ds-button variant="primary">Click me</ds-button>
```

## 📝 NPM Scripts to Add

Add these scripts to your root `package.json`:

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "build:components": "cd packages/web-components && npm run build"
  }
}
```

## 🎯 Next Steps

1. **Build the components**: `cd packages/web-components && npm install && npm run build`
2. **Start Storybook**: `npm run storybook`
3. **Add more components**: Use `npm run generate` in the web-components directory
4. **Publish to npm**: Update package.json and run `npm publish`

## 🌟 Benefits

✅ **Framework-agnostic** - Use in React, Vue, Angular, or vanilla JS  
✅ **Encapsulated** - Shadow DOM prevents style conflicts  
✅ **Lightweight** - Small bundle size with lazy loading  
✅ **Type-safe** - Full TypeScript support  
✅ **Documented** - Auto-generated docs in Storybook

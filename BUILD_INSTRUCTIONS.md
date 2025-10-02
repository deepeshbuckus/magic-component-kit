# Building the Web Components

This project includes Stencil.js web components that need to be built before they can be used.

## Build Steps

1. Navigate to the web components directory:
   ```bash
   cd packages/web-components
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Build the components:
   ```bash
   npm run build
   ```

4. Return to the root directory:
   ```bash
   cd ../..
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## What This Builds

The build process generates:
- Custom elements that can be used as standard HTML tags
- TypeScript definitions
- CSS styles
- ES modules for importing

## Components Available

- `<ds-category-pill>` - Category filter pills
- `<ds-search-bar>` - Search input with button
- `<ds-report-card>` - Report display cards
- `<ds-button>` - Styled buttons
- `<ds-input>` - Styled inputs
- And many more...

## Troubleshooting

If you see errors about missing web components:
1. Make sure you've run the build command in the packages/web-components directory
2. Check that the dist folder exists in packages/web-components
3. Try clearing your browser cache and restarting the dev server

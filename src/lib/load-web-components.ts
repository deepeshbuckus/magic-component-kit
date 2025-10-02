// Load Stencil web components
// Note: Web components need to be built first
// Run: cd packages/web-components && npm run build

export const loadWebComponents = () => {
  // The web components will be loaded via script tag in index.html instead
  // This avoids build-time resolution issues
  console.log('Web components should be loaded via index.html');
};

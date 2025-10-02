// Load Stencil web components
// This will be called once when the app initializes

export const loadWebComponents = async () => {
  try {
    // @ts-ignore - Web components may not be built yet
    const module = await import('../../../packages/web-components/loader/index.js');
    if (module && module.defineCustomElements) {
      module.defineCustomElements();
    }
  } catch (error) {
    // Silently fail - web components will need to be built first
    // Run: cd packages/web-components && npm run build
  }
};

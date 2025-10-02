// Load web components by importing them directly
// This assumes the Stencil components have been built

export async function loadWebComponents() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  try {
    // Dynamically import the custom elements bundle
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/packages/web-components/dist/design-system/design-system.esm.js';
    
    script.onload = () => {
      console.log('✅ Web components loaded successfully');
    };
    
    script.onerror = () => {
      console.warn('⚠️ Web components not found. To use Stencil components:');
      console.warn('1. cd packages/web-components');
      console.warn('2. npm install');
      console.warn('3. npm run build');
    };
    
    document.head.appendChild(script);
  } catch (error) {
    console.error('Failed to load web components:', error);
  }
}

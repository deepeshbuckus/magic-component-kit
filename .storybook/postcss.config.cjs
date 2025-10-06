const path = require('path');

module.exports = {
  plugins: {
    // Ensure Storybook uses a CJS Tailwind config for compatibility
    tailwindcss: { config: path.resolve(__dirname, 'tailwind.config.cjs') },
    autoprefixer: {},
  },
};
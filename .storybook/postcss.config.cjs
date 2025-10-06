const path = require('path');

module.exports = {
  plugins: {
    // Ensure Storybook uses the same Tailwind config as the app
    tailwindcss: { config: path.resolve(__dirname, '..', 'tailwind.config.ts') },
    autoprefixer: {},
  },
};
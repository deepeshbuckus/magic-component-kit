module.exports = {
  plugins: {
    // Ensure Storybook uses the same Tailwind config as the app
    tailwindcss: { config: './tailwind.config.ts' },
    autoprefixer: {},
  },
};
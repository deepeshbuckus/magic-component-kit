import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../packages/web-components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      build: {
        outDir: 'dist-vite'
      },
      resolve: {
        alias: {
          'storybook/preview-api': '@storybook/preview-api',
          'storybook/client-logger': '@storybook/client-logger'
        }
      }
    });
  },
};

export default config;

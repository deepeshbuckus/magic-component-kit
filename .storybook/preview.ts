import type { Preview } from '@storybook/web-components';
import { defineCustomElements } from '../packages/web-components/dist/loader';
import '../packages/web-components/src/global/design-tokens.css';

// Register all custom elements
defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

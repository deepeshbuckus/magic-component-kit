import { defineCustomElements } from '../packages/web-components/loader';
import '../packages/web-components/src/global/design-tokens.css';
import '../src/index.css';

// Register all custom elements globally
defineCustomElements();

const preview = {
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

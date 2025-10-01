import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <ds-accordion-item>
        <span slot="trigger">Is it accessible?</span>
        <div slot="content">Yes. It adheres to the WAI-ARIA design pattern.</div>
      </ds-accordion-item>
      
      <ds-accordion-item>
        <span slot="trigger">Is it styled?</span>
        <div slot="content">Yes. It comes with default styles that match your design system.</div>
      </ds-accordion-item>
      
      <ds-accordion-item>
        <span slot="trigger">Is it animated?</span>
        <div slot="content">Yes. It's animated by default with smooth transitions.</div>
      </ds-accordion-item>
    </div>
  `,
};

export const OpenByDefault: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <ds-accordion-item open>
        <span slot="trigger">This item is open by default</span>
        <div slot="content">
          This accordion item is configured to be open when the page loads.
        </div>
      </ds-accordion-item>
    </div>
  `,
};

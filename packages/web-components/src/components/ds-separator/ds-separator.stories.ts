import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Separator',
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => html`
    <div>
      <div style="padding: 1rem 0;">Content above</div>
      <ds-separator></ds-separator>
      <div style="padding: 1rem 0;">Content below</div>
    </div>
  `,
};

export const Vertical: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; height: 50px; gap: 1rem;">
      <span>Left</span>
      <ds-separator orientation="vertical"></ds-separator>
      <span>Right</span>
    </div>
  `,
};

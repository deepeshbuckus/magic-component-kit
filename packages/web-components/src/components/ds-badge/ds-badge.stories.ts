import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => html`
    <ds-badge variant="${args.variant}">Badge</ds-badge>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ds-badge variant="default">Default</ds-badge>
      <ds-badge variant="secondary">Secondary</ds-badge>
      <ds-badge variant="destructive">Destructive</ds-badge>
      <ds-badge variant="outline">Outline</ds-badge>
    </div>
  `,
};

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
    color: {
      control: { type: 'text' },
    },
    border: {
      control: { type: 'text' },
    },
    borderRadius: {
      control: { type: 'text' },
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

export const CustomStyles: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <ds-badge color="hsl(200, 100%, 50%)">Blue Badge</ds-badge>
      <ds-badge color="hsl(150, 60%, 45%)">Green Badge</ds-badge>
      <ds-badge border="2px solid hsl(280, 70%, 55%)" variant="outline">Purple Border</ds-badge>
      <ds-badge borderRadius="20px">Rounded</ds-badge>
      <ds-badge 
        color="hsl(30, 100%, 50%)"
        borderRadius="4px"
      >
        Combined
      </ds-badge>
    </div>
  `,
};

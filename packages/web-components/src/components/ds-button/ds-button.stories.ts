import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  render: (args) => html`
    <ds-button 
      variant="${args.variant}" 
      size="${args.size}"
      ?disabled="${args.disabled}"
    >
      Button
    </ds-button>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ds-button variant="default">Default</ds-button>
      <ds-button variant="destructive">Destructive</ds-button>
      <ds-button variant="outline">Outline</ds-button>
      <ds-button variant="secondary">Secondary</ds-button>
      <ds-button variant="ghost">Ghost</ds-button>
      <ds-button variant="link">Link</ds-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <ds-button size="sm">Small</ds-button>
      <ds-button size="default">Default</ds-button>
      <ds-button size="lg">Large</ds-button>
      <ds-button size="icon">🚀</ds-button>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ds-button disabled>Disabled Default</ds-button>
      <ds-button variant="destructive" disabled>Disabled Destructive</ds-button>
      <ds-button variant="outline" disabled>Disabled Outline</ds-button>
    </div>
  `,
};

export const CustomColors: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ds-button color="hsl(200, 100%, 50%)">Blue Button</ds-button>
      <ds-button color="hsl(150, 60%, 45%)">Green Button</ds-button>
      <ds-button color="hsl(280, 70%, 55%)">Purple Button</ds-button>
      <ds-button color="hsl(30, 100%, 50%)">Orange Button</ds-button>
    </div>
  `,
};

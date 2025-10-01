import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ds-avatar 
      src="https://github.com/shadcn.png" 
      alt="Avatar"
    ></ds-avatar>
  `,
};

export const Fallback: Story = {
  render: () => html`
    <ds-avatar fallback="JD"></ds-avatar>
  `,
};

export const Multiple: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ds-avatar src="https://github.com/shadcn.png" alt="User 1"></ds-avatar>
      <ds-avatar fallback="AB"></ds-avatar>
      <ds-avatar fallback="CD"></ds-avatar>
    </div>
  `,
};

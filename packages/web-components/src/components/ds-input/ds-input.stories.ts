import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    disabled: false,
  },
  render: (args) => html`
    <ds-input 
      type="${args.type}" 
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
    ></ds-input>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 300px;">
      <ds-label htmlFor="email">Email</ds-label>
      <ds-input type="email" placeholder="email@example.com" name="email"></ds-input>
    </div>
  `,
};

export const Types: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
      <div>
        <ds-label>Text</ds-label>
        <ds-input type="text" placeholder="Text input"></ds-input>
      </div>
      <div>
        <ds-label>Email</ds-label>
        <ds-input type="email" placeholder="email@example.com"></ds-input>
      </div>
      <div>
        <ds-label>Password</ds-label>
        <ds-input type="password" placeholder="Password"></ds-input>
      </div>
      <div>
        <ds-label>Number</ds-label>
        <ds-input type="number" placeholder="123"></ds-input>
      </div>
    </div>
  `,
};

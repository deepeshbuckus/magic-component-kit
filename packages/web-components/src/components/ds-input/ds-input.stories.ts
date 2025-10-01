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

export const CustomStyles: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;">
      <ds-input 
        placeholder="Thick border" 
        border="2px solid hsl(200, 100%, 50%)"
      ></ds-input>
      <ds-input 
        placeholder="Rounded corners" 
        borderRadius="12px"
      ></ds-input>
      <ds-input 
        placeholder="Combined styles" 
        border="2px solid hsl(150, 60%, 45%)"
        borderRadius="20px"
      ></ds-input>
    </div>
  `,
};

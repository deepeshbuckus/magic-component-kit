import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Textarea',
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: { type: 'number' },
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
    placeholder: 'Type your message here...',
    rows: 3,
    disabled: false,
  },
  render: (args) => html`
    <ds-textarea 
      placeholder="${args.placeholder}"
      rows="${args.rows}"
      ?disabled="${args.disabled}"
    ></ds-textarea>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px;">
      <ds-label>Your message</ds-label>
      <ds-textarea placeholder="Type your message here..." rows="4"></ds-textarea>
    </div>
  `,
};

export const CustomStyles: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <ds-textarea 
        placeholder="Thick border" 
        border="2px solid hsl(200, 100%, 50%)"
        rows="3"
      ></ds-textarea>
      <ds-textarea 
        placeholder="Rounded corners" 
        borderRadius="12px"
        rows="3"
      ></ds-textarea>
      <ds-textarea 
        placeholder="Combined styles" 
        border="2px solid hsl(150, 60%, 45%)"
        borderRadius="20px"
        rows="3"
      ></ds-textarea>
    </div>
  `,
};

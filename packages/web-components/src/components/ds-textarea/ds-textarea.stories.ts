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

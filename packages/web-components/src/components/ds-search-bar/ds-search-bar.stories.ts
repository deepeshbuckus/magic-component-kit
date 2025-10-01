import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/SearchBar',
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
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
    placeholder: 'Ask for a custom payroll report',
    disabled: false,
  },
  render: (args) => html`
    <ds-search-bar 
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
    ></ds-search-bar>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 600px;">
      <ds-label>Search Reports</ds-label>
      <ds-search-bar placeholder="Search reports..."></ds-search-bar>
    </div>
  `,
};

export const Interactive: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <ds-search-bar 
        placeholder="Type and press Enter or click send"
        @dsSubmit="${(e: CustomEvent) => alert('Submitted: ' + e.detail)}"
        @dsChange="${(e: CustomEvent) => console.log('Changed: ' + e.detail)}"
      ></ds-search-bar>
    </div>
  `,
};

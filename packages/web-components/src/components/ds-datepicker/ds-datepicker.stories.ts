import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/DatePicker',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'Selected date in ISO format (YYYY-MM-DD)',
    },
    placeholder: {
      control: { type: 'text' },
    },
    minDate: {
      control: { type: 'text' },
      description: 'Minimum selectable date in ISO format',
    },
    maxDate: {
      control: { type: 'text' },
      description: 'Maximum selectable date in ISO format',
    },
    disabled: {
      control: { type: 'boolean' },
    },
    format: {
      control: { type: 'text' },
      description: 'Date format string',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    placeholder: 'Pick a date',
  },
  render: (args) => html`
    <ds-datepicker placeholder="${args.placeholder}"></ds-datepicker>
  `,
};

export const WithValue: Story = {
  render: () => {
    const today = new Date().toISOString().split('T')[0];
    return html`
      <ds-datepicker value="${today}" placeholder="Pick a date"></ds-datepicker>
    `;
  },
};

export const WithDateRange: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() - 7);
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 14);
    
    return html`
      <ds-datepicker 
        min-date="${minDate.toISOString().split('T')[0]}"
        max-date="${maxDate.toISOString().split('T')[0]}"
        placeholder="Select a date (limited range)"
      ></ds-datepicker>
    `;
  },
};

export const Disabled: Story = {
  render: () => html`
    <ds-datepicker disabled placeholder="Disabled datepicker"></ds-datepicker>
  `,
};

export const CustomPlaceholder: Story = {
  render: () => html`
    <ds-datepicker placeholder="Select your birthday"></ds-datepicker>
  `,
};

export const Interactive: Story = {
  render: () => html`
    <div>
      <ds-datepicker 
        id="interactive-datepicker"
        placeholder="Pick a date"
      ></ds-datepicker>
      <p id="selected-value" style="margin-top: 1rem; font-size: 0.875rem;">
        Selected: None
      </p>
    </div>
    <script>
      const datepicker = document.getElementById('interactive-datepicker');
      const output = document.getElementById('selected-value');
      datepicker.addEventListener('dsChange', (e) => {
        output.textContent = 'Selected: ' + e.detail;
      });
    </script>
  `,
};

export const MultipleInstances: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <ds-datepicker placeholder="Start date"></ds-datepicker>
      <ds-datepicker placeholder="End date"></ds-datepicker>
    </div>
  `,
};

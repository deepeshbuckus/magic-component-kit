import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Calendar',
  tags: ['autodocs'],
  argTypes: {
    selectedDate: {
      control: { type: 'text' },
      description: 'Selected date in ISO format (YYYY-MM-DD)',
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
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ds-calendar></ds-calendar>
  `,
};

export const WithSelectedDate: Story = {
  render: () => {
    const today = new Date().toISOString().split('T')[0];
    return html`
      <ds-calendar selected-date="${today}"></ds-calendar>
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
      <ds-calendar 
        min-date="${minDate.toISOString().split('T')[0]}"
        max-date="${maxDate.toISOString().split('T')[0]}"
      ></ds-calendar>
    `;
  },
};

export const Disabled: Story = {
  render: () => html`
    <ds-calendar disabled></ds-calendar>
  `,
};

export const Interactive: Story = {
  render: () => html`
    <div>
      <ds-calendar 
        id="interactive-calendar"
      ></ds-calendar>
      <p id="selected-date" style="margin-top: 1rem; font-size: 0.875rem;">
        Selected: None
      </p>
    </div>
    <script>
      const calendar = document.getElementById('interactive-calendar');
      const output = document.getElementById('selected-date');
      calendar.addEventListener('dsDateSelect', (e) => {
        output.textContent = 'Selected: ' + e.detail;
      });
    </script>
  `,
};

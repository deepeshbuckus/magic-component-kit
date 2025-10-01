import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/CategoryPill',
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: { type: 'boolean' },
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
    active: false,
    disabled: false,
  },
  render: (args) => html`
    <ds-category-pill 
      ?active="${args.active}"
      ?disabled="${args.disabled}"
    >
      Payroll Insights
    </ds-category-pill>
  `,
};

export const WithIcon: Story = {
  render: () => html`
    <ds-category-pill>
      <svg slot="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Payroll Insights
    </ds-category-pill>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
      <ds-category-pill>Default</ds-category-pill>
      <ds-category-pill active>Active</ds-category-pill>
      <ds-category-pill disabled>Disabled</ds-category-pill>
    </div>
  `,
};

export const Categories: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center;">
      <ds-category-pill active>
        <svg slot="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Payroll Insights
      </ds-category-pill>

      <ds-category-pill>
        <svg slot="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Workforce Reports
      </ds-category-pill>

      <ds-category-pill>
        <svg slot="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        Trend Analysis
      </ds-category-pill>
    </div>
  `,
};

export const Interactive: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
      <ds-category-pill 
        @dsClick="${() => alert('Payroll Insights clicked!')}"
      >
        <svg slot="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Click me!
      </ds-category-pill>
    </div>
  `,
};

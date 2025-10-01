import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/ReportCard',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    lastRun: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Q4 Payroll Summary Report',
    lastRun: '01/18/2024',
    description: 'Comprehensive quarterly payroll analysis including salary distributions, overtime costs, and tax withholdings.',
  },
  render: (args) => html`
    <ds-report-card 
      title="${args.title}"
      last-run="${args.lastRun}"
      description="${args.description}"
    >
      <div slot="actions" style="display: flex; gap: 0.5rem;">
        <ds-button variant="outline" style="flex: 1;">Edit report</ds-button>
        <ds-button style="flex: 1;">Run report</ds-button>
      </div>
    </ds-report-card>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <ds-report-card 
      title="Employee Benefits Analysis"
      last-run="01/16/2024"
      description="Detailed breakdown of healthcare, retirement contributions, and other employee benefits costs."
    >
      <div slot="actions" style="display: flex; gap: 0.5rem;">
        <ds-button variant="outline" style="flex: 1;">
          <svg style="width: 1rem; height: 1rem; margin-right: 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit report
        </ds-button>
        <ds-button style="flex: 1;">
          <svg style="width: 1rem; height: 1rem; margin-right: 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Run report
        </ds-button>
      </div>
    </ds-report-card>
  `,
};

export const Grid: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; max-width: 1200px;">
      <ds-report-card 
        title="Q4 Payroll Summary Report"
        last-run="01/18/2024"
        description="Comprehensive quarterly payroll analysis including salary distributions, overtime costs, and tax withholdings."
      >
        <div slot="actions" style="display: flex; gap: 0.5rem;">
          <ds-button variant="outline" style="flex: 1;">Edit</ds-button>
          <ds-button style="flex: 1;">Run</ds-button>
        </div>
      </ds-report-card>

      <ds-report-card 
        title="Employee Benefits Analysis"
        last-run="01/16/2024"
        description="Detailed breakdown of healthcare, retirement contributions, and other employee benefits costs."
      >
        <div slot="actions" style="display: flex; gap: 0.5rem;">
          <ds-button variant="outline" style="flex: 1;">Edit</ds-button>
          <ds-button style="flex: 1;">Run</ds-button>
        </div>
      </ds-report-card>

      <ds-report-card 
        title="Monthly Attendance Report"
        last-run="01/14/2024"
        description="Analysis of employee attendance patterns, PTO usage, and overtime trends across departments."
      >
        <div slot="actions" style="display: flex; gap: 0.5rem;">
          <ds-button variant="outline" style="flex: 1;">Edit</ds-button>
          <ds-button style="flex: 1;">Run</ds-button>
        </div>
      </ds-report-card>
    </div>
  `,
};

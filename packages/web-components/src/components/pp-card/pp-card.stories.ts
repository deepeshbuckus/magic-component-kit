import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/PP Card',
  tags: ['autodocs'],
  argTypes: {
    cardTheme: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    },
    hoverable: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    cardTheme: 'default',
    hoverable: false,
  },
  render: (args) => html`
    <pp-card card-theme=${args.cardTheme} ?hoverable=${args.hoverable}>
      <pp-card-header>
        <pp-card-title>Card Title</pp-card-title>
        <pp-card-description>This is a card description that provides context</pp-card-description>
      </pp-card-header>
      <pp-card-content>
        <p>This is the main content of the card. It can contain any elements you need.</p>
      </pp-card-content>
      <pp-card-footer>
        <pp-button button-theme="primary" size="sm">Action</pp-button>
        <pp-button button-theme="secondary" size="sm">Cancel</pp-button>
      </pp-card-footer>
    </pp-card>
  `,
};

export const AllThemes: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
      <pp-card card-theme="default">
        <pp-card-header>
          <pp-card-title>Default Card</pp-card-title>
          <pp-card-description>Standard card styling</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <p>Clean and simple default appearance</p>
        </pp-card-content>
      </pp-card>

      <pp-card card-theme="primary">
        <pp-card-header>
          <pp-card-title>Primary Card</pp-card-title>
          <pp-card-description>Highlighted with primary color</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <p>Used for important or featured content</p>
        </pp-card-content>
      </pp-card>

      <pp-card card-theme="success">
        <pp-card-header>
          <pp-card-title>Success Card</pp-card-title>
          <pp-card-description>Positive feedback or confirmation</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <p>Great for success messages</p>
        </pp-card-content>
      </pp-card>

      <pp-card card-theme="info">
        <pp-card-header>
          <pp-card-title>Info Card</pp-card-title>
          <pp-card-description>Informational content</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <p>Perfect for tips and information</p>
        </pp-card-content>
      </pp-card>

      <pp-card card-theme="warning">
        <pp-card-header>
          <pp-card-title>Warning Card</pp-card-title>
          <pp-card-description>Caution or important notice</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <p>Use for warnings and alerts</p>
        </pp-card-content>
      </pp-card>

      <pp-card card-theme="danger">
        <pp-card-header>
          <pp-card-title>Danger Card</pp-card-title>
          <pp-card-description>Critical or error state</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <p>For errors and critical alerts</p>
        </pp-card-content>
      </pp-card>
    </div>
  `,
};

export const Hoverable: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
      <pp-card hoverable>
        <pp-card-header>
          <pp-card-title>Hoverable Card</pp-card-title>
          <pp-card-description>Hover to see the effect</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <p>This card lifts on hover with enhanced shadow</p>
        </pp-card-content>
      </pp-card>

      <pp-card card-theme="primary" hoverable>
        <pp-card-header>
          <pp-card-title>Interactive Card</pp-card-title>
          <pp-card-description>Click or hover interaction</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <p>Combine themes with hover effects</p>
        </pp-card-content>
      </pp-card>
    </div>
  `,
};

export const WithoutHeaderFooter: Story = {
  render: () => html`
    <pp-card>
      <pp-card-content>
        <h3 style="margin: 0 0 0.5rem 0; color: var(--pp-font-color);">Simple Content Card</h3>
        <p style="margin: 0; color: var(--pp-secondary);">
          You can use the card with just content, no header or footer needed.
        </p>
      </pp-card-content>
    </pp-card>
  `,
};

export const ComplexLayout: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <pp-card card-theme="default" hoverable>
        <pp-card-header>
          <pp-card-title>Project Dashboard</pp-card-title>
          <pp-card-description>Overview of your current projects</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--pp-font-color);">Active Projects</span>
              <strong style="color: var(--pp-primary);">12</strong>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--pp-font-color);">Completed</span>
              <strong style="color: var(--pp-success);">48</strong>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--pp-font-color);">Pending Review</span>
              <strong style="color: var(--pp-warning);">5</strong>
            </div>
          </div>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="primary" size="sm">View All</pp-button>
          <pp-button button-theme="secondary" size="sm">Export</pp-button>
        </pp-card-footer>
      </pp-card>
    </div>
  `,
};

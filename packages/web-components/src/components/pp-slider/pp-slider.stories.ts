import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'PP Components/Slider',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value of the slider',
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value',
    },
    step: {
      control: { type: 'number' },
      description: 'Step increment',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the slider',
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger'],
      description: 'Color theme',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    theme: 'primary',
  },
  render: (args) => html`
    <div style="padding: 2rem; max-width: 400px;">
      <pp-slider 
        value="${args.value}"
        min="${args.min}"
        max="${args.max}"
        step="${args.step}"
        ?disabled="${args.disabled}"
        theme="${args.theme}"
      ></pp-slider>
    </div>
  `,
};

export const AllThemes: Story = {
  render: () => html`
    <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--pp-primary);">Primary</label>
        <pp-slider value="70" theme="primary"></pp-slider>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--pp-secondary);">Secondary</label>
        <pp-slider value="60" theme="secondary"></pp-slider>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--pp-success);">Success</label>
        <pp-slider value="80" theme="success"></pp-slider>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--pp-info);">Info</label>
        <pp-slider value="50" theme="info"></pp-slider>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--pp-warning);">Warning</label>
        <pp-slider value="40" theme="warning"></pp-slider>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--pp-danger);">Danger</label>
        <pp-slider value="30" theme="danger"></pp-slider>
      </div>
    </div>
  `,
};

export const WithCustomRange: Story = {
  render: () => html`
    <div style="padding: 2rem; display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Temperature (0-300°C)</label>
        <pp-slider value="150" min="0" max="300" step="10" theme="warning"></pp-slider>
      </div>
      <div>
        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Volume (0-10)</label>
        <pp-slider value="7" min="0" max="10" step="0.5" theme="info"></pp-slider>
      </div>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="padding: 2rem; max-width: 400px;">
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Disabled Slider</label>
      <pp-slider value="50" disabled theme="primary"></pp-slider>
    </div>
  `,
};

export const Interactive: Story = {
  render: () => html`
    <div style="padding: 2rem; max-width: 400px;">
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Volume Control</label>
      <pp-slider 
        value="75" 
        theme="primary"
        @sliderInput="${(e: CustomEvent) => {
          const display = document.getElementById('volume-display');
          if (display) display.textContent = e.detail.toString();
        }}"
      ></pp-slider>
      <div style="margin-top: 1rem; text-align: center; font-size: 1.5rem; font-weight: 600; color: var(--pp-primary);">
        <span id="volume-display">75</span>%
      </div>
    </div>
  `,
};

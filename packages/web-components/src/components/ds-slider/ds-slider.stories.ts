import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Slider',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
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
    value: 50,
    disabled: false,
  },
  render: (args) => html`
    <ds-slider 
      value="${args.value}"
      ?disabled="${args.disabled}"
    ></ds-slider>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 300px;">
      <ds-label>Volume</ds-label>
      <ds-slider value="70"></ds-slider>
    </div>
  `,
};

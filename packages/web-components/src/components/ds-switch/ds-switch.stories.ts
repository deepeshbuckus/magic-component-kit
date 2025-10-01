import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Switch',
  tags: ['autodocs'],
  argTypes: {
    checked: {
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
    checked: false,
    disabled: false,
  },
  render: (args) => html`
    <ds-switch 
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
    ></ds-switch>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <ds-switch></ds-switch>
      <ds-label>Enable notifications</ds-label>
    </div>
  `,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ds-switch></ds-switch>
        <ds-label>Off</ds-label>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ds-switch checked></ds-switch>
        <ds-label>On</ds-label>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ds-switch disabled></ds-switch>
        <ds-label>Disabled</ds-label>
      </div>
    </div>
  `,
};

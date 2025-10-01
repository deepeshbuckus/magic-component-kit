import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Checkbox',
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
    <ds-checkbox 
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
    ></ds-checkbox>
  `,
};

export const WithLabel: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <ds-checkbox name="terms"></ds-checkbox>
      <ds-label htmlFor="terms">Accept terms and conditions</ds-label>
    </div>
  `,
};

export const Multiple: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ds-checkbox checked></ds-checkbox>
        <ds-label>Option 1 (Checked)</ds-label>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ds-checkbox></ds-checkbox>
        <ds-label>Option 2</ds-label>
      </div>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ds-checkbox disabled></ds-checkbox>
        <ds-label>Option 3 (Disabled)</ds-label>
      </div>
    </div>
  `,
};

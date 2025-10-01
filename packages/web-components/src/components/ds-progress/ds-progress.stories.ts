import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Progress',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 60,
  },
  render: (args) => html`
    <ds-progress value="${args.value}"></ds-progress>
  `,
};

export const Examples: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div>
        <ds-label>25%</ds-label>
        <ds-progress value="25"></ds-progress>
      </div>
      <div>
        <ds-label>50%</ds-label>
        <ds-progress value="50"></ds-progress>
      </div>
      <div>
        <ds-label>75%</ds-label>
        <ds-progress value="75"></ds-progress>
      </div>
    </div>
  `,
};

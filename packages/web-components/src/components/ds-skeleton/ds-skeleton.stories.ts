import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Skeleton',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ds-skeleton style="width: 200px; height: 20px;"></ds-skeleton>
  `,
};

export const Card: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 350px;">
      <ds-skeleton style="width: 100%; height: 125px; border-radius: 0.5rem;"></ds-skeleton>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <ds-skeleton style="width: 250px; height: 16px;"></ds-skeleton>
        <ds-skeleton style="width: 200px; height: 16px;"></ds-skeleton>
      </div>
    </div>
  `,
};

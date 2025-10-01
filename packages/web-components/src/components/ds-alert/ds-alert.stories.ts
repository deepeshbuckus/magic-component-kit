import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => html`
    <ds-alert variant="${args.variant}">
      <ds-alert-title>Heads up!</ds-alert-title>
      <ds-alert-description>
        You can add components to your app using the cli.
      </ds-alert-description>
    </ds-alert>
  `,
};

export const Destructive: Story = {
  render: () => html`
    <ds-alert variant="destructive">
      <ds-alert-title>Error</ds-alert-title>
      <ds-alert-description>
        Your session has expired. Please log in again.
      </ds-alert-description>
    </ds-alert>
  `,
};

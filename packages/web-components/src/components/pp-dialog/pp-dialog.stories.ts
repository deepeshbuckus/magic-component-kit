import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/PP Dialog',
  component: 'pp-dialog',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  argTypes: {
    open: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'success', 'danger', 'light'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: true,
    size: 'medium',
    theme: 'primary',
  },
  render: (args) => html`
    <pp-dialog open="${args.open}" size="${args.size}" theme="${args.theme}">
      <pp-dialog-header>
        <pp-dialog-title>Dialog Title</pp-dialog-title>
        <pp-dialog-description>
          This is a basic dialog with a title and description. You can add any content here.
        </pp-dialog-description>
      </pp-dialog-header>
      <pp-dialog-footer>
        <pp-button button-theme="light" button-size="medium">Cancel</pp-button>
        <pp-button button-theme="primary" button-size="medium">Confirm</pp-button>
      </pp-dialog-footer>
    </pp-dialog>
  `,
};

export const ConfirmationDialog: Story = {
  args: {
    open: true,
    size: 'small',
    theme: 'warning',
  },
  render: (args) => html`
    <pp-dialog open="${args.open}" size="${args.size}" theme="${args.theme}">
      <pp-dialog-header>
        <pp-dialog-title>⚠️ Confirm Action</pp-dialog-title>
        <pp-dialog-description>
          Are you sure you want to proceed? This action cannot be undone.
        </pp-dialog-description>
      </pp-dialog-header>
      <pp-dialog-footer>
        <pp-button button-theme="light" button-size="medium">Cancel</pp-button>
        <pp-button button-theme="warning" button-size="medium">Yes, proceed</pp-button>
      </pp-dialog-footer>
    </pp-dialog>
  `,
};

export const SuccessDialog: Story = {
  args: {
    open: true,
    size: 'medium',
    theme: 'success',
  },
  render: (args) => html`
    <pp-dialog open="${args.open}" size="${args.size}" theme="${args.theme}">
      <pp-dialog-header>
        <pp-dialog-title>✅ Success!</pp-dialog-title>
        <pp-dialog-description>
          Your changes have been saved successfully.
        </pp-dialog-description>
      </pp-dialog-header>
      <pp-dialog-footer>
        <pp-button button-theme="success" button-size="medium">Okay</pp-button>
      </pp-dialog-footer>
    </pp-dialog>
  `,
};

export const DangerDialog: Story = {
  args: {
    open: true,
    size: 'medium',
    theme: 'danger',
  },
  render: (args) => html`
    <pp-dialog open="${args.open}" size="${args.size}" theme="${args.theme}">
      <pp-dialog-header>
        <pp-dialog-title>🗑️ Delete Item</pp-dialog-title>
        <pp-dialog-description>
          This will permanently delete the selected item. This action cannot be reversed.
        </pp-dialog-description>
      </pp-dialog-header>
      <pp-dialog-footer>
        <pp-button button-theme="light" button-size="medium">Cancel</pp-button>
        <pp-button button-theme="danger" button-size="medium">Delete</pp-button>
      </pp-dialog-footer>
    </pp-dialog>
  `,
};

export const LargeDialog: Story = {
  args: {
    open: true,
    size: 'large',
    theme: 'primary',
  },
  render: (args) => html`
    <pp-dialog open="${args.open}" size="${args.size}" theme="${args.theme}">
      <pp-dialog-header>
        <pp-dialog-title>📋 Terms and Conditions</pp-dialog-title>
        <pp-dialog-description>
          Please review the following terms and conditions carefully.
        </pp-dialog-description>
      </pp-dialog-header>
      <div style="padding: 1rem 0;">
        <p style="margin: 0 0 1rem 0; color: var(--pp-font-color);">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p style="margin: 0 0 1rem 0; color: var(--pp-font-color);">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <pp-dialog-footer>
        <pp-button button-theme="light" button-size="medium">Decline</pp-button>
        <pp-button button-theme="primary" button-size="medium">Accept</pp-button>
      </pp-dialog-footer>
    </pp-dialog>
  `,
};

export const NoHeaderDialog: Story = {
  args: {
    open: true,
    size: 'medium',
    theme: 'secondary',
  },
  render: (args) => html`
    <pp-dialog open="${args.open}" size="${args.size}" theme="${args.theme}">
      <div style="padding: 1rem 0;">
        <p style="margin: 0; color: var(--pp-font-color);">
          This is a dialog without a header section. You can use it for simple messages or custom layouts.
        </p>
      </div>
      <pp-dialog-footer>
        <pp-button button-theme="secondary" button-size="medium">Close</pp-button>
      </pp-dialog-footer>
    </pp-dialog>
  `,
};

export const AllThemesShowcase: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <pp-dialog open="true" size="small" theme="primary">
        <pp-dialog-header>
          <pp-dialog-title>Primary Theme</pp-dialog-title>
          <pp-dialog-description>This uses the primary color theme</pp-dialog-description>
        </pp-dialog-header>
      </pp-dialog>
      
      <pp-dialog open="true" size="small" theme="secondary">
        <pp-dialog-header>
          <pp-dialog-title>Secondary Theme</pp-dialog-title>
          <pp-dialog-description>This uses the secondary color theme</pp-dialog-description>
        </pp-dialog-header>
      </pp-dialog>
      
      <pp-dialog open="true" size="small" theme="success">
        <pp-dialog-header>
          <pp-dialog-title>Success Theme</pp-dialog-title>
          <pp-dialog-description>This uses the success color theme</pp-dialog-description>
        </pp-dialog-header>
      </pp-dialog>
      
      <pp-dialog open="true" size="small" theme="warning">
        <pp-dialog-header>
          <pp-dialog-title>Warning Theme</pp-dialog-title>
          <pp-dialog-description>This uses the warning color theme</pp-dialog-description>
        </pp-dialog-header>
      </pp-dialog>
      
      <pp-dialog open="true" size="small" theme="danger">
        <pp-dialog-header>
          <pp-dialog-title>Danger Theme</pp-dialog-title>
          <pp-dialog-description>This uses the danger color theme</pp-dialog-description>
        </pp-dialog-header>
      </pp-dialog>
    </div>
  `,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/PP Dropdown',
  component: 'pp-dropdown',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dropdown is open',
    },
    dropdownTheme: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'success', 'danger', 'light'],
      description: 'Theme of the dropdown button',
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed on the trigger button',
    },
    placement: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
      description: 'Placement of the dropdown menu',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: false,
    dropdownTheme: 'primary',
    buttonText: 'Select Option',
    placement: 'bottom',
    disabled: false,
  },
  render: (args) => html`
    <pp-dropdown
      open="${args.open}"
      dropdown-theme="${args.dropdownTheme}"
      button-text="${args.buttonText}"
      placement="${args.placement}"
      ?disabled="${args.disabled}"
    >
      <pp-dropdown-item value="option1" label="Option 1"></pp-dropdown-item>
      <pp-dropdown-item value="option2" label="Option 2"></pp-dropdown-item>
      <pp-dropdown-item value="option3" label="Option 3"></pp-dropdown-item>
      <pp-dropdown-item value="option4" label="Option 4" disabled></pp-dropdown-item>
    </pp-dropdown>
  `,
};

export const AllThemes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <pp-dropdown dropdown-theme="primary" button-text="Primary">
        <pp-dropdown-item value="1" label="Action 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Action 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Action 3"></pp-dropdown-item>
      </pp-dropdown>

      <pp-dropdown dropdown-theme="secondary" button-text="Secondary">
        <pp-dropdown-item value="1" label="Action 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Action 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Action 3"></pp-dropdown-item>
      </pp-dropdown>

      <pp-dropdown dropdown-theme="warning" button-text="Warning">
        <pp-dropdown-item value="1" label="Action 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Action 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Action 3"></pp-dropdown-item>
      </pp-dropdown>

      <pp-dropdown dropdown-theme="success" button-text="Success">
        <pp-dropdown-item value="1" label="Action 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Action 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Action 3"></pp-dropdown-item>
      </pp-dropdown>

      <pp-dropdown dropdown-theme="danger" button-text="Danger">
        <pp-dropdown-item value="1" label="Action 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Action 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Action 3"></pp-dropdown-item>
      </pp-dropdown>

      <pp-dropdown dropdown-theme="light" button-text="Light">
        <pp-dropdown-item value="1" label="Action 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Action 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Action 3"></pp-dropdown-item>
      </pp-dropdown>
    </div>
  `,
};

export const AllPlacements: Story = {
  render: () => html`
    <div style="display: flex; gap: 200px; padding: 100px; justify-content: center; align-items: center;">
      <pp-dropdown placement="top" button-text="Top">
        <pp-dropdown-item value="1" label="Option 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Option 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Option 3"></pp-dropdown-item>
      </pp-dropdown>

      <pp-dropdown placement="bottom" button-text="Bottom">
        <pp-dropdown-item value="1" label="Option 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Option 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Option 3"></pp-dropdown-item>
      </pp-dropdown>

      <pp-dropdown placement="left" button-text="Left">
        <pp-dropdown-item value="1" label="Option 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Option 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Option 3"></pp-dropdown-item>
      </pp-dropdown>

      <pp-dropdown placement="right" button-text="Right">
        <pp-dropdown-item value="1" label="Option 1"></pp-dropdown-item>
        <pp-dropdown-item value="2" label="Option 2"></pp-dropdown-item>
        <pp-dropdown-item value="3" label="Option 3"></pp-dropdown-item>
      </pp-dropdown>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <pp-dropdown button-text="Disabled Dropdown" disabled>
      <pp-dropdown-item value="1" label="Option 1"></pp-dropdown-item>
      <pp-dropdown-item value="2" label="Option 2"></pp-dropdown-item>
    </pp-dropdown>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <pp-dropdown button-text="Actions">
      <pp-dropdown-item value="edit" label="✏️ Edit"></pp-dropdown-item>
      <pp-dropdown-item value="copy" label="📋 Copy"></pp-dropdown-item>
      <pp-dropdown-item value="delete" label="🗑️ Delete"></pp-dropdown-item>
    </pp-dropdown>
  `,
};

export const Interactive: Story = {
  render: () => html`
    <div>
      <pp-dropdown 
        button-text="Select Item" 
        id="interactive-dropdown"
      >
        <pp-dropdown-item value="home" label="🏠 Home"></pp-dropdown-item>
        <pp-dropdown-item value="profile" label="👤 Profile"></pp-dropdown-item>
        <pp-dropdown-item value="settings" label="⚙️ Settings"></pp-dropdown-item>
        <pp-dropdown-item value="logout" label="🚪 Logout"></pp-dropdown-item>
      </pp-dropdown>
      
      <p id="selected-value" style="margin-top: 16px; font-family: var(--pp-font-family);">
        Selected: <strong>None</strong>
      </p>

      <script>
        const dropdown = document.getElementById('interactive-dropdown');
        const selectedValue = document.getElementById('selected-value');
        
        dropdown.addEventListener('dropdown-select', (e) => {
          selectedValue.innerHTML = 'Selected: <strong>' + e.detail.label + '</strong> (value: ' + e.detail.value + ')';
        });

        dropdown.addEventListener('dropdown-toggle', (e) => {
          console.log('Dropdown is now:', e.detail ? 'open' : 'closed');
        });
      </script>
    </div>
  `,
};

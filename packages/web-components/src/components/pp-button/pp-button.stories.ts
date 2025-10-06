export default {
  title: 'Components/PP Button',
  tags: ['autodocs'],
  argTypes: {
    buttonTheme: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'success', 'danger', 'light'],
    },
    buttonSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    buttonAppearance: {
      control: 'select',
      options: ['box', 'pill'],
    },
    buttonType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    alternativeStyle: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    iconOnly: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    buttonTheme: 'primary',
    buttonSize: 'medium',
    buttonAppearance: 'box',
    disabled: false,
    alternativeStyle: false,
    iconOnly: false,
  },
  render: (args: any) => `
    <pp-button 
      button-theme="${args.buttonTheme}"
      button-size="${args.buttonSize}"
      button-appearance="${args.buttonAppearance}"
      ${args.disabled ? 'button-disabled' : ''}
      ${args.alternativeStyle ? 'alternative-style' : ''}
      ${args.iconOnly ? 'icon-only' : ''}
    >
      ${args.iconOnly ? '🔍' : 'Click me'}
    </pp-button>
  `,
};

export const Themes = {
  render: () => `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <pp-button button-theme="primary">Primary</pp-button>
      <pp-button button-theme="secondary">Secondary</pp-button>
      <pp-button button-theme="success">Success</pp-button>
      <pp-button button-theme="warning">Warning</pp-button>
      <pp-button button-theme="danger">Danger</pp-button>
      <pp-button button-theme="light">Light</pp-button>
    </div>
  `,
};

export const AlternativeStyle = {
  render: () => `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <pp-button button-theme="primary" alternative-style>Primary Alt</pp-button>
      <pp-button button-theme="secondary" alternative-style>Secondary Alt</pp-button>
      <pp-button button-theme="success" alternative-style>Success Alt</pp-button>
      <pp-button button-theme="warning" alternative-style>Warning Alt</pp-button>
      <pp-button button-theme="danger" alternative-style>Danger Alt</pp-button>
      <pp-button button-theme="light" alternative-style>Light Alt</pp-button>
    </div>
  `,
};

export const Sizes = {
  render: () => `
    <div style="display: flex; gap: 1rem; align-items: center;">
      <pp-button button-size="small">Small</pp-button>
      <pp-button button-size="medium">Medium</pp-button>
      <pp-button button-size="large">Large</pp-button>
    </div>
  `,
};

export const Appearances = {
  render: () => `
    <div style="display: flex; gap: 1rem; align-items: center;">
      <pp-button button-appearance="box">Box Button</pp-button>
      <pp-button button-appearance="pill">Pill Button</pp-button>
    </div>
  `,
};

export const IconOnly = {
  render: () => `
    <div style="display: flex; gap: 1rem; align-items: center;">
      <pp-button button-size="small" icon-only>🔍</pp-button>
      <pp-button button-size="medium" icon-only>🔍</pp-button>
      <pp-button button-size="large" icon-only>🔍</pp-button>
    </div>
  `,
};

export const Disabled = {
  render: () => `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <pp-button button-theme="primary" button-disabled>Primary Disabled</pp-button>
      <pp-button button-theme="secondary" button-disabled>Secondary Disabled</pp-button>
      <pp-button button-theme="success" button-disabled>Success Disabled</pp-button>
    </div>
  `,
};

export const Combined = {
  render: () => `
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <pp-button button-theme="primary" button-size="small" button-appearance="pill">Small Pill</pp-button>
      <pp-button button-theme="danger" button-size="large" button-appearance="box">Large Box</pp-button>
      <pp-button button-theme="success" alternative-style button-appearance="pill">Alt Pill</pp-button>
      <pp-button button-theme="warning" button-size="large" icon-only>⚠️</pp-button>
    </div>
  `,
};

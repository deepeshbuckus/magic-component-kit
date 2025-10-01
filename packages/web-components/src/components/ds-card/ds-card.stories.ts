import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Card',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ds-card style="max-width: 400px;">
      <ds-card-header>
        <ds-card-title>Card Title</ds-card-title>
        <ds-card-description>Card description goes here</ds-card-description>
      </ds-card-header>
      <ds-card-content>
        <p>This is the card content. You can put any content here.</p>
      </ds-card-content>
      <ds-card-footer>
        <ds-button>Action</ds-button>
      </ds-card-footer>
    </ds-card>
  `,
};

export const WithoutFooter: Story = {
  render: () => html`
    <ds-card style="max-width: 400px;">
      <ds-card-header>
        <ds-card-title>Simple Card</ds-card-title>
        <ds-card-description>A card without a footer</ds-card-description>
      </ds-card-header>
      <ds-card-content>
        <p>Card content without a footer section.</p>
      </ds-card-content>
    </ds-card>
  `,
};

export const Multiple: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
      <ds-card>
        <ds-card-header>
          <ds-card-title>Feature 1</ds-card-title>
          <ds-card-description>First feature description</ds-card-description>
        </ds-card-header>
        <ds-card-content>
          <p>Content for the first feature card.</p>
        </ds-card-content>
      </ds-card>
      
      <ds-card>
        <ds-card-header>
          <ds-card-title>Feature 2</ds-card-title>
          <ds-card-description>Second feature description</ds-card-description>
        </ds-card-header>
        <ds-card-content>
          <p>Content for the second feature card.</p>
        </ds-card-content>
      </ds-card>
      
      <ds-card>
        <ds-card-header>
          <ds-card-title>Feature 3</ds-card-title>
          <ds-card-description>Third feature description</ds-card-description>
        </ds-card-header>
        <ds-card-content>
          <p>Content for the third feature card.</p>
        </ds-card-content>
      </ds-card>
    </div>
  `,
};

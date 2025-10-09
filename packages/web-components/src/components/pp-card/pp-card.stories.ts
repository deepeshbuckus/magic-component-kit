import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/PP Card',
  tags: ['autodocs'],
  argTypes: {
    cardTheme: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info'],
    },
    hoverable: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    cardTheme: 'default',
    hoverable: false,
  },
  render: (args) => html`
    <pp-card card-theme=${args.cardTheme} ?hoverable=${args.hoverable}>
      <pp-card-header>
        <pp-card-title>Card Title</pp-card-title>
        <pp-card-description>This is a card description that provides context</pp-card-description>
      </pp-card-header>
      <pp-card-content>
        <p>This is the main content of the card. It can contain any elements you need.</p>
      </pp-card-content>
      <pp-card-footer>
        <pp-button button-theme="primary" size="sm">Action</pp-button>
        <pp-button button-theme="secondary" size="sm">Cancel</pp-button>
      </pp-card-footer>
    </pp-card>
  `,
};

export const AllThemes: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
      <pp-card card-theme="default">
        <pp-card-header>
          <pp-card-title>Product Updates</pp-card-title>
          <pp-card-description>Latest features and improvements</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop" 
               alt="Dashboard" 
               style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;" />
          <p style="margin: 0; color: var(--pp-font-color); line-height: 1.5;">
            Check out our new dashboard with enhanced analytics, real-time reporting, and customizable widgets.
          </p>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="primary" size="sm">Learn More</pp-button>
        </pp-card-footer>
      </pp-card>

      <pp-card card-theme="primary">
        <pp-card-header>
          <pp-card-title>Premium Feature</pp-card-title>
          <pp-card-description>Unlock advanced capabilities</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop" 
               alt="Analytics" 
               style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;" />
          <p style="margin: 0; color: var(--pp-font-color); line-height: 1.5;">
            Advanced analytics and insights to help you make data-driven decisions faster.
          </p>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="primary" size="sm">Upgrade Now</pp-button>
        </pp-card-footer>
      </pp-card>

      <pp-card card-theme="success">
        <pp-card-header>
          <pp-card-title>Deployment Success</pp-card-title>
          <pp-card-description>Your changes are now live</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop" 
               alt="Team Success" 
               style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;" />
          <p style="margin: 0; color: var(--pp-font-color); line-height: 1.5;">
            Version 2.4.1 has been successfully deployed to production. All systems are operational.
          </p>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="success" size="sm">View Details</pp-button>
        </pp-card-footer>
      </pp-card>

      <pp-card card-theme="info">
        <pp-card-header>
          <pp-card-title>System Information</pp-card-title>
          <pp-card-description>Performance metrics and stats</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop" 
               alt="Performance" 
               style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;" />
          <p style="margin: 0; color: var(--pp-font-color); line-height: 1.5;">
            Server uptime: 99.9% | Response time: 45ms | Active users: 1,247
          </p>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="secondary" size="sm">Full Report</pp-button>
        </pp-card-footer>
      </pp-card>

      <pp-card card-theme="warning">
        <pp-card-header>
          <pp-card-title>Storage Warning</pp-card-title>
          <pp-card-description>Action required soon</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=200&fit=crop" 
               alt="Storage" 
               style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;" />
          <p style="margin: 0; color: var(--pp-font-color); line-height: 1.5;">
            You're using 85% of your storage quota. Consider upgrading or archiving old files.
          </p>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="warning" size="sm">Manage Storage</pp-button>
        </pp-card-footer>
      </pp-card>

      <pp-card card-theme="danger">
        <pp-card-header>
          <pp-card-title>Security Alert</pp-card-title>
          <pp-card-description>Immediate action required</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop" 
               alt="Security" 
               style="width: 100%; height: 160px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;" />
          <p style="margin: 0; color: var(--pp-font-color); line-height: 1.5;">
            Unusual login activity detected. Please verify your recent sessions and update your password.
          </p>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="danger" size="sm">Review Now</pp-button>
        </pp-card-footer>
      </pp-card>
    </div>
  `,
};

export const Hoverable: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
      <pp-card hoverable="true">
        <pp-card-header>
          <pp-card-title>Hoverable Card</pp-card-title>
          <pp-card-description>Hover to see the lift effect</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <img src="https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=200&fit=crop" 
               alt="Interactive" 
               style="width: 100%; height: 140px; object-fit: cover; border-radius: 4px; margin-bottom: 0.75rem;" />
          <p style="margin: 0; color: var(--pp-font-color);">
            This card lifts on hover with enhanced shadow for a modern interactive feel.
          </p>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="primary" size="sm">Explore</pp-button>
        </pp-card-footer>
      </pp-card>

      <pp-card card-theme="primary" hoverable="true">
        <pp-card-header>
          <pp-card-title>Interactive Card</pp-card-title>
          <pp-card-description>Click or hover for interaction</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=200&fit=crop" 
               alt="Design" 
               style="width: 100%; height: 140px; object-fit: cover; border-radius: 4px; margin-bottom: 0.75rem;" />
          <p style="margin: 0; color: var(--pp-font-color);">
            Combine themed styling with hover effects for rich interactions.
          </p>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="primary" size="sm">Get Started</pp-button>
        </pp-card-footer>
      </pp-card>

      <pp-card card-theme="success" hoverable="true">
        <pp-card-header>
          <pp-card-title>Achievement Card</pp-card-title>
          <pp-card-description>Track your progress</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=200&fit=crop" 
               alt="Achievement" 
               style="width: 100%; height: 140px; object-fit: cover; border-radius: 4px; margin-bottom: 0.75rem;" />
          <p style="margin: 0; color: var(--pp-font-color);">
            Celebrate milestones with engaging, interactive achievement cards.
          </p>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="success" size="sm">View More</pp-button>
        </pp-card-footer>
      </pp-card>
    </div>
  `,
};

export const WithoutHeaderFooter: Story = {
  render: () => html`
    <pp-card>
      <pp-card-content>
        <h3 style="margin: 0 0 0.5rem 0; color: var(--pp-font-color);">Simple Content Card</h3>
        <p style="margin: 0; color: var(--pp-secondary);">
          You can use the card with just content, no header or footer needed.
        </p>
      </pp-card-content>
    </pp-card>
  `,
};

export const ComplexLayout: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <pp-card card-theme="default" hoverable>
        <pp-card-header>
          <pp-card-title>Project Dashboard</pp-card-title>
          <pp-card-description>Overview of your current projects</pp-card-description>
        </pp-card-header>
        <pp-card-content>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--pp-font-color);">Active Projects</span>
              <strong style="color: var(--pp-primary);">12</strong>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--pp-font-color);">Completed</span>
              <strong style="color: var(--pp-success);">48</strong>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--pp-font-color);">Pending Review</span>
              <strong style="color: var(--pp-warning);">5</strong>
            </div>
          </div>
        </pp-card-content>
        <pp-card-footer>
          <pp-button button-theme="primary" size="sm">View All</pp-button>
          <pp-button button-theme="secondary" size="sm">Export</pp-button>
        </pp-card-footer>
      </pp-card>
    </div>
  `,
};

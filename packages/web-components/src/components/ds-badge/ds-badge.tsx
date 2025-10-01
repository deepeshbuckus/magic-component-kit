import { Component, Prop, h, Host } from '@stencil/core';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

@Component({
  tag: 'ds-badge',
  styleUrl: 'ds-badge.css',
  shadow: true,
})
export class DsBadge {
  /**
   * The visual variant of the badge
   */
  @Prop() variant: BadgeVariant = 'default';

  /**
   * Custom color override (HSL value)
   */
  @Prop() color?: string;

  /**
   * Custom border override (e.g., "2px solid hsl(200, 100%, 50%)")
   */
  @Prop() border?: string;

  /**
   * Custom border radius override (e.g., "8px", "1rem")
   */
  @Prop() borderRadius?: string;

  render() {
    const hostStyle: any = {};
    if (this.color) {
      hostStyle['--custom-bg-color'] = this.color;
    }
    
    const badgeStyle: any = {};
    if (this.border) badgeStyle['border'] = this.border;
    if (this.borderRadius) badgeStyle['border-radius'] = this.borderRadius;

    return (
      <Host style={hostStyle}>
        <div
          class={{
            'ds-badge': true,
            [`ds-badge--${this.variant}`]: true,
          }}
          style={badgeStyle}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}

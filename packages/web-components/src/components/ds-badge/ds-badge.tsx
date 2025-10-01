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
    const style: any = {};
    if (this.color) style['--badge-bg-color'] = this.color;
    if (this.border) style['border'] = this.border;
    if (this.borderRadius) style['border-radius'] = this.borderRadius;

    return (
      <Host>
        <div
          class={{
            'ds-badge': true,
            [`ds-badge--${this.variant}`]: true,
          }}
          style={style}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}

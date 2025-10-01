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

  render() {
    return (
      <Host>
        <div
          class={{
            'ds-badge': true,
            [`ds-badge--${this.variant}`]: true,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}

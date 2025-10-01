import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ds-card',
  styleUrl: 'ds-card.css',
  shadow: true,
})
export class DsCard {
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
    if (this.border) style['border'] = this.border;
    if (this.borderRadius) style['border-radius'] = this.borderRadius;

    return (
      <Host>
        <div class="ds-card" style={style}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}


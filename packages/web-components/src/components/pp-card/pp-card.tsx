import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'pp-card',
  styleUrl: 'pp-card.scss',
  shadow: true,
})
export class PpCard {
  /**
   * Card theme variant
   */
  @Prop() cardTheme: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' = 'default';

  /**
   * Whether the card should have hover effect
   */
  @Prop() hoverable: boolean = false;

  render() {
    return (
      <Host class={this.hoverable ? 'hoverable' : ''}>
        <div class={`pp-card pp-card--${this.cardTheme}`}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-card-title',
  styleUrl: 'pp-card.scss',
  shadow: true,
})
export class PpCardTitle {
  render() {
    return (
      <Host>
        <h3 class="pp-card-title">
          <slot></slot>
        </h3>
      </Host>
    );
  }
}

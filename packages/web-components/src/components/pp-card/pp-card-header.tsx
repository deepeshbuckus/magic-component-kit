import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-card-header',
  styleUrl: 'pp-card.scss',
  shadow: true,
})
export class PpCardHeader {
  render() {
    return (
      <Host>
        <div class="pp-card-header">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

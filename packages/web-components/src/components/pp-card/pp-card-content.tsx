import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-card-content',
  styleUrl: 'pp-card.scss',
  shadow: true,
})
export class PpCardContent {
  render() {
    return (
      <Host>
        <div class="pp-card-content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

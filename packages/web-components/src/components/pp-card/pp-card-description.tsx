import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-card-description',
  styleUrl: 'pp-card.scss',
  shadow: true,
})
export class PpCardDescription {
  render() {
    return (
      <Host>
        <p class="pp-card-description">
          <slot></slot>
        </p>
      </Host>
    );
  }
}

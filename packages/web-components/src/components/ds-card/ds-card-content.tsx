import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-card-content',
  styleUrl: 'ds-card.css',
  shadow: true,
})
export class DsCardContent {
  render() {
    return (
      <Host>
        <div class="ds-card-content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

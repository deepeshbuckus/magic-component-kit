import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-card-title',
  styleUrl: 'ds-card.css',
  shadow: true,
})
export class DsCardTitle {
  render() {
    return (
      <Host>
        <h3 class="ds-card-title">
          <slot></slot>
        </h3>
      </Host>
    );
  }
}

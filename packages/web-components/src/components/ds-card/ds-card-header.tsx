import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-card-header',
  styleUrl: 'ds-card.css',
  shadow: true,
})
export class DsCardHeader {
  render() {
    return (
      <Host>
        <div class="ds-card-header">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

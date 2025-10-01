import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-card-description',
  styleUrl: 'ds-card.css',
  shadow: true,
})
export class DsCardDescription {
  render() {
    return (
      <Host>
        <p class="ds-card-description">
          <slot></slot>
        </p>
      </Host>
    );
  }
}

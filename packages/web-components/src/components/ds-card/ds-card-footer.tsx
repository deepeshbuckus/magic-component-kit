import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-card-footer',
  styleUrl: 'ds-card.css',
  shadow: true,
})
export class DsCardFooter {
  render() {
    return (
      <Host>
        <div class="ds-card-footer">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-alert-description',
  styleUrl: 'ds-alert.css',
  shadow: true,
})
export class DsAlertDescription {
  render() {
    return (
      <Host>
        <div class="ds-alert-description">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

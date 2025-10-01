import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-alert-title',
  styleUrl: 'ds-alert.css',
  shadow: true,
})
export class DsAlertTitle {
  render() {
    return (
      <Host>
        <h5 class="ds-alert-title">
          <slot></slot>
        </h5>
      </Host>
    );
  }
}

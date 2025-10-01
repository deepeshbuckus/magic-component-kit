import { Component, Prop, h, Host } from '@stencil/core';
import { AlertVariant } from './alert-types';

@Component({
  tag: 'ds-alert',
  styleUrl: 'ds-alert.css',
  shadow: true,
})
export class DsAlert {
  @Prop() variant: AlertVariant = 'default';

  render() {
    return (
      <Host>
        <div class={{ 'ds-alert': true, [`ds-alert--${this.variant}`]: true }} role="alert">
          <slot></slot>
        </div>
      </Host>
    );
  }
}


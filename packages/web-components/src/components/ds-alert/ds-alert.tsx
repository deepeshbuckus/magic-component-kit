import { Component, Prop, h, Host } from '@stencil/core';

export type AlertVariant = 'default' | 'destructive';

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

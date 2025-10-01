import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-card',
  styleUrl: 'ds-card.css',
  shadow: true,
})
export class DsCard {
  render() {
    return (
      <Host>
        <div class="ds-card">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

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

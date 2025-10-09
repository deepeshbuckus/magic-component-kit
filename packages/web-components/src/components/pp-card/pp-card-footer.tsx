import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-card-footer',
  styleUrl: 'pp-card.scss',
  shadow: true,
})
export class PpCardFooter {
  render() {
    return (
      <Host>
        <div class="pp-card-footer">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

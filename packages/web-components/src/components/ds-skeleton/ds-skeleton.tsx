import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-skeleton',
  styleUrl: 'ds-skeleton.css',
  shadow: true,
})
export class DsSkeleton {
  render() {
    return (
      <Host>
        <div class="ds-skeleton"></div>
      </Host>
    );
  }
}

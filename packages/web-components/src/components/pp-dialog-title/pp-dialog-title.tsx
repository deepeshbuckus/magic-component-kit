import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-dialog-title',
  styleUrl: 'pp-dialog-title.scss',
  shadow: true,
})
export class PpDialogTitle {
  render() {
    return (
      <Host>
        <h2 class="dialog-title">
          <slot />
        </h2>
      </Host>
    );
  }
}

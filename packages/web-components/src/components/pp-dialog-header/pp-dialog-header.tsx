import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-dialog-header',
  styleUrl: 'pp-dialog-header.scss',
  shadow: true,
})
export class PpDialogHeader {
  render() {
    return (
      <Host>
        <div class="dialog-header">
          <slot />
        </div>
      </Host>
    );
  }
}

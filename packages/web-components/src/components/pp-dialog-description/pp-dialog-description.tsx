import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-dialog-description',
  styleUrl: 'pp-dialog-description.scss',
  shadow: true,
})
export class PpDialogDescription {
  render() {
    return (
      <Host>
        <p class="dialog-description">
          <slot />
        </p>
      </Host>
    );
  }
}

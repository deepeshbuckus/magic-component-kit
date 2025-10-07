import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-dialog-footer',
  styleUrl: 'pp-dialog-footer.scss',
  shadow: true,
})
export class PpDialogFooter {
  render() {
    return (
      <Host>
        <div class="dialog-footer">
          <slot />
        </div>
      </Host>
    );
  }
}

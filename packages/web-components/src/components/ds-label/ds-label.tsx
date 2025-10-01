import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-label',
  styleUrl: 'ds-label.css',
  shadow: true,
})
export class DsLabel {
  @Prop() htmlFor: string = '';

  render() {
    return (
      <Host>
        <label class="ds-label" htmlFor={this.htmlFor}>
          <slot></slot>
        </label>
      </Host>
    );
  }
}

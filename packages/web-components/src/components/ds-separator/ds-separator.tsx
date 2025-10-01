import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-separator',
  styleUrl: 'ds-separator.css',
  shadow: true,
})
export class DsSeparator {
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Prop() decorative: boolean = true;

  render() {
    return (
      <Host>
        <div
          class={{
            'ds-separator': true,
            [`ds-separator--${this.orientation}`]: true,
          }}
          role={this.decorative ? 'none' : 'separator'}
          aria-orientation={this.orientation}
        ></div>
      </Host>
    );
  }
}

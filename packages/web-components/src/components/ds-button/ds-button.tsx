import { Component, Prop, h, Host } from '@stencil/core';

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {
  /**
   * The visual variant of the button
   */
  @Prop() variant: ButtonVariant = 'default';

  /**
   * The size of the button
   */
  @Prop() size: ButtonSize = 'default';

  /**
   * Whether the button is disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * The button type
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Custom color override (HSL value)
   */
  @Prop() color?: string;

  /**
   * Custom border override (e.g., "2px solid hsl(200, 100%, 50%)")
   */
  @Prop() border?: string;

  /**
   * Custom border radius override (e.g., "8px", "1rem")
   */
  @Prop() borderRadius?: string;

  render() {
    const style: any = {};
    if (this.color) {
      style['background'] = `${this.color} !important`;
      style['background-color'] = `${this.color} !important`;
    }
    if (this.border) style['border'] = this.border;
    if (this.borderRadius) style['border-radius'] = this.borderRadius;
    
    return (
      <Host>
        <button
          class={{
            'ds-button': true,
            [`ds-button--${this.variant}`]: true,
            [`ds-button--size-${this.size}`]: true,
          }}
          disabled={this.disabled}
          type={this.type}
          style={style}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}

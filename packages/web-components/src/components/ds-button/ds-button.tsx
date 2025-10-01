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

  render() {
    const style = this.color ? { '--ds-color-primary': this.color } : {};
    
    return (
      <Host>
        <button
          class={{
            'ds-button': true,
            [`ds-button--${this.variant}`]: true,
            [`ds-button--${this.size}`]: true,
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

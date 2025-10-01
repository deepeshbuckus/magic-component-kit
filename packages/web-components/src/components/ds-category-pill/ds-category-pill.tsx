import { Component, h, Host, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-category-pill',
  styleUrl: 'ds-category-pill.css',
  shadow: true,
})
export class DsCategoryPill {
  @Prop() active: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() iconName?: string;

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

  @Event() dsClick: EventEmitter<void>;

  handleClick = () => {
    if (!this.disabled) {
      this.dsClick.emit();
    }
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      this.dsClick.emit();
    }
  };

  render() {
    const hostStyle: any = {};
    if (this.color) {
      hostStyle['--custom-bg-color'] = this.color;
    }
    
    const buttonStyle: any = {};
    if (this.border) buttonStyle['border'] = this.border;
    if (this.borderRadius) buttonStyle['border-radius'] = this.borderRadius;

    return (
      <Host style={hostStyle}>
        <button
          class={{
            'ds-category-pill': true,
            'ds-category-pill--active': this.active,
            'ds-category-pill--disabled': this.disabled,
          }}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          disabled={this.disabled}
          role="button"
          aria-pressed={this.active ? 'true' : 'false'}
          tabindex={this.disabled ? -1 : 0}
          style={buttonStyle}
        >
          <slot name="icon"></slot>
          <span class="ds-category-pill__text">
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}

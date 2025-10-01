import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-category-pill',
  styleUrl: 'ds-category-pill.css',
  shadow: true,
})
export class DsCategoryPill {
  @Prop() active: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() iconName?: string;

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
    return (
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
      >
        <slot name="icon"></slot>
        <span class="ds-category-pill__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}

import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'pp-dropdown-item',
  styleUrl: 'pp-dropdown.scss',
  shadow: true,
})
export class PpDropdownItem {
  @Prop() value: string = '';
  @Prop() label: string = '';
  @Prop() disabled: boolean = false;

  @Event({ eventName: 'item-click' }) itemClick: EventEmitter<{ value: string; label: string }>;

  private handleClick = (event: Event) => {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.itemClick.emit({ value: this.value, label: this.label || this.value });
  };

  render() {
    return (
      <Host 
        class={`dropdown-item ${this.disabled ? 'disabled' : ''}`}
        onClick={this.handleClick}
        role="menuitem"
        tabindex={this.disabled ? -1 : 0}
      >
        <slot>{this.label || this.value}</slot>
      </Host>
    );
  }
}

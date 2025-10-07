import { Component, Prop, h, State, Host, Event, EventEmitter, Listen, Element } from '@stencil/core';

@Component({
  tag: 'pp-dropdown',
  styleUrl: 'pp-dropdown.scss',
  shadow: true,
})
export class PpDropdown {
  @Element() el: HTMLElement;

  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop({ attribute: 'dropdown-theme' }) dropdownTheme: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'light' = 'primary';
  @Prop({ attribute: 'button-text' }) buttonText: string = 'Dropdown';
  @Prop({ attribute: 'placement' }) placement: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
  @Prop({ attribute: 'disabled' }) disabled: boolean = false;

  @State() private selectedValue: string = '';

  @Event({ eventName: 'dropdown-toggle' }) dropdownToggle: EventEmitter<boolean>;
  @Event({ eventName: 'dropdown-select' }) dropdownSelect: EventEmitter<{ value: string; label: string }>;

  private dropdownRef: HTMLDivElement;

  @Listen('click', { target: 'window' })
  handleClickOutside(event: MouseEvent) {
    if (this.open && !this.el.shadowRoot.contains(event.target as Node)) {
      this.closeDropdown();
    }
  }

  private toggleDropdown = () => {
    if (this.disabled) return;
    
    this.open = !this.open;
    this.dropdownToggle.emit(this.open);
  };

  private closeDropdown = () => {
    this.open = false;
    this.dropdownToggle.emit(false);
  };

  private handleItemClick = (event: Event, value: string, label: string) => {
    event.stopPropagation();
    this.selectedValue = value;
    this.dropdownSelect.emit({ value, label });
    this.closeDropdown();
  };

  render() {
    const dropdownClasses = [
      'pp-dropdown',
      `theme-${this.dropdownTheme}`,
      `placement-${this.placement}`,
      this.open ? 'open' : '',
      this.disabled ? 'disabled' : ''
    ].filter(Boolean).join(' ');

    return (
      <Host class={dropdownClasses}>
        <button
          class="dropdown-trigger"
          onClick={this.toggleDropdown}
          disabled={this.disabled}
          aria-expanded={this.open ? 'true' : 'false'}
          aria-haspopup="true"
        >
          <span class="trigger-text">{this.buttonText}</span>
          <svg 
            class="trigger-icon" 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 6L8 10L12 6" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {this.open && (
          <div 
            class="dropdown-menu"
            ref={(el) => this.dropdownRef = el}
            role="menu"
          >
            <slot />
          </div>
        )}
      </Host>
    );
  }
}

import { Component, Prop, Event, EventEmitter, State, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-datepicker',
  styleUrl: 'ds-datepicker.css',
  shadow: true,
})
export class DsDatepicker {
  @Prop() value?: string;
  @Prop() placeholder: string = 'Pick a date';
  @Prop() minDate?: string;
  @Prop() maxDate?: string;
  @Prop() disabled: boolean = false;
  @Prop() format: string = 'MMM DD, YYYY';

  @State() isOpen: boolean = false;
  @State() selectedDate?: string;

  @Event() dsChange: EventEmitter<string>;

  private popoverRef?: HTMLDivElement;
  private triggerRef?: HTMLButtonElement;

  componentWillLoad() {
    if (this.value) {
      this.selectedDate = this.value;
    }
  }

  componentDidLoad() {
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }

  private handleClickOutside(event: MouseEvent) {
    if (!this.popoverRef || !this.triggerRef) return;
    
    const target = event.target as Node;
    if (!this.popoverRef.contains(target) && !this.triggerRef.contains(target)) {
      this.isOpen = false;
    }
  }

  private togglePopover() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
  }

  private handleDateSelect(event: CustomEvent<string>) {
    this.selectedDate = event.detail;
    this.dsChange.emit(event.detail);
    this.isOpen = false;
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    if (this.format === 'MMM DD, YYYY') {
      return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
    
    // Default fallback
    return dateString;
  }

  render() {
    return (
      <Host>
        <div class="datepicker-container">
          <button
            ref={el => this.triggerRef = el}
            class={{
              'datepicker-trigger': true,
              'disabled': this.disabled,
              'has-value': !!this.selectedDate,
            }}
            onClick={() => this.togglePopover()}
            disabled={this.disabled}
          >
            <svg class="calendar-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2Z" fill="currentColor"/>
            </svg>
            <span class="datepicker-text">
              {this.selectedDate ? this.formatDate(this.selectedDate) : this.placeholder}
            </span>
          </button>
          
          {this.isOpen && (
            <div
              ref={el => this.popoverRef = el}
              class="datepicker-popover"
            >
              <ds-calendar
                selected-date={this.selectedDate}
                min-date={this.minDate}
                max-date={this.maxDate}
                onDsDateSelect={(e) => this.handleDateSelect(e)}
              ></ds-calendar>
            </div>
          )}
        </div>
      </Host>
    );
  }
}

import { Component, Prop, h, Host, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ds-checkbox',
  styleUrl: 'ds-checkbox.css',
  shadow: true,
})
export class DsCheckbox {
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() name: string = '';

  @State() internalChecked: boolean = this.checked;

  @Event() dsChange: EventEmitter<boolean>;

  componentWillLoad() {
    this.internalChecked = this.checked;
  }

  private handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.internalChecked = target.checked;
    this.dsChange.emit(target.checked);
  };

  render() {
    return (
      <Host>
        <div class="ds-checkbox-wrapper">
          <input
            type="checkbox"
            class="ds-checkbox"
            checked={this.internalChecked}
            disabled={this.disabled}
            name={this.name}
            onChange={this.handleChange}
          />
          <svg
            class="ds-checkbox-icon"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </Host>
    );
  }
}

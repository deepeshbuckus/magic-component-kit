import { Component, Prop, h, Host, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ds-switch',
  styleUrl: 'ds-switch.css',
  shadow: true,
})
export class DsSwitch {
  @Prop() checked: boolean = false;
  @Prop() disabled: boolean = false;

  @State() internalChecked: boolean = this.checked;

  @Event() dsChange: EventEmitter<boolean>;

  componentWillLoad() {
    this.internalChecked = this.checked;
  }

  private handleClick = () => {
    if (!this.disabled) {
      this.internalChecked = !this.internalChecked;
      this.dsChange.emit(this.internalChecked);
    }
  };

  render() {
    return (
      <Host>
        <button
          class={{
            'ds-switch': true,
            'ds-switch--checked': this.internalChecked,
          }}
          role="switch"
          aria-checked={this.internalChecked ? 'true' : 'false'}
          disabled={this.disabled}
          onClick={this.handleClick}
          type="button"
        >
          <span class="ds-switch-thumb"></span>
        </button>
      </Host>
    );
  }
}

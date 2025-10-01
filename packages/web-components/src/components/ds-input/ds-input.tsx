import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.css',
  shadow: true,
})
export class DsInput {
  @Prop() type: string = 'text';
  @Prop() placeholder: string = '';
  @Prop() value: string = '';
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() name: string = '';

  @Event() dsInput: EventEmitter<string>;
  @Event() dsChange: EventEmitter<string>;

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.dsInput.emit(target.value);
  };

  private handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.dsChange.emit(target.value);
  };

  render() {
    return (
      <Host>
        <input
          class="ds-input"
          type={this.type}
          placeholder={this.placeholder}
          value={this.value}
          disabled={this.disabled}
          required={this.required}
          name={this.name}
          onInput={this.handleInput}
          onChange={this.handleChange}
        />
      </Host>
    );
  }
}

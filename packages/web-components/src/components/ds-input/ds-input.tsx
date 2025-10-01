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

  /**
   * Custom border override (e.g., "2px solid hsl(200, 100%, 50%)")
   */
  @Prop() border?: string;

  /**
   * Custom border radius override (e.g., "8px", "1rem")
   */
  @Prop() borderRadius?: string;

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
    const style: any = {};
    if (this.border) style['border'] = this.border;
    if (this.borderRadius) style['border-radius'] = this.borderRadius;

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
          style={style}
        />
      </Host>
    );
  }
}

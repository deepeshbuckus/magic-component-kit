import { Component, Prop, h, Host, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ds-slider',
  styleUrl: 'ds-slider.css',
  shadow: true,
})
export class DsSlider {
  @Prop() value: number = 50;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() step: number = 1;
  @Prop() disabled: boolean = false;

  @State() internalValue: number = this.value;

  @Event() dsChange: EventEmitter<number>;
  @Event() dsInput: EventEmitter<number>;

  componentWillLoad() {
    this.internalValue = this.value;
  }

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.internalValue = Number(target.value);
    this.dsInput.emit(this.internalValue);
  };

  private handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.internalValue = Number(target.value);
    this.dsChange.emit(this.internalValue);
  };

  render() {
    return (
      <Host>
        <div class="ds-slider-wrapper">
          <input
            type="range"
            class="ds-slider"
            value={this.internalValue}
            min={this.min}
            max={this.max}
            step={this.step}
            disabled={this.disabled}
            onInput={this.handleInput}
            onChange={this.handleChange}
          />
        </div>
      </Host>
    );
  }
}

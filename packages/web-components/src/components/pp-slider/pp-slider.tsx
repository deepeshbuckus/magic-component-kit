import { Component, Prop, h, Host, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'pp-slider',
  styleUrl: 'pp-slider.scss',
  shadow: true,
})
export class PpSlider {
  @Prop() value: number = 50;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() step: number = 1;
  @Prop() disabled: boolean = false;
  @Prop() theme: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' = 'primary';

  @State() internalValue: number = this.value;

  @Event() sliderChange: EventEmitter<number>;
  @Event() sliderInput: EventEmitter<number>;

  componentWillLoad() {
    this.internalValue = this.value;
  }

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.internalValue = Number(target.value);
    this.sliderInput.emit(this.internalValue);
  };

  private handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.internalValue = Number(target.value);
    this.sliderChange.emit(this.internalValue);
  };

  render() {
    return (
      <Host>
        <div class={`pp-slider-wrapper theme-${this.theme}`}>
          <input
            type="range"
            class="pp-slider"
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

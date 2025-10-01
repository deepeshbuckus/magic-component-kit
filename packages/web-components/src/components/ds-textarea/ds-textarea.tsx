import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-textarea',
  styleUrl: 'ds-textarea.css',
  shadow: true,
})
export class DsTextarea {
  @Prop() placeholder: string = '';
  @Prop() value: string = '';
  @Prop() disabled: boolean = false;
  @Prop() rows: number = 3;

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
    const target = event.target as HTMLTextAreaElement;
    this.dsInput.emit(target.value);
  };

  private handleChange = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    this.dsChange.emit(target.value);
  };

  render() {
    const style: any = {};
    if (this.border) style['border'] = this.border;
    if (this.borderRadius) style['border-radius'] = this.borderRadius;

    return (
      <Host>
        <textarea
          class="ds-textarea"
          placeholder={this.placeholder}
          disabled={this.disabled}
          rows={this.rows}
          onInput={this.handleInput}
          onChange={this.handleChange}
          style={style}
        >
          {this.value}
        </textarea>
      </Host>
    );
  }
}

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
    return (
      <Host>
        <textarea
          class="ds-textarea"
          placeholder={this.placeholder}
          disabled={this.disabled}
          rows={this.rows}
          onInput={this.handleInput}
          onChange={this.handleChange}
        >
          {this.value}
        </textarea>
      </Host>
    );
  }
}

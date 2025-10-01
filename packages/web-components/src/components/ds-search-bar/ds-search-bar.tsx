import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ds-search-bar',
  styleUrl: 'ds-search-bar.css',
  shadow: true,
})
export class DsSearchBar {
  @Prop() placeholder: string = 'Search...';
  @Prop() buttonLabel: string = 'Send';
  @Prop() value: string = '';
  @Prop() disabled: boolean = false;

  /**
   * Custom border override (e.g., "2px solid hsl(200, 100%, 50%)")
   */
  @Prop() border?: string;

  /**
   * Custom border radius override (e.g., "8px", "1rem")
   */
  @Prop() borderRadius?: string;

  @Event() dsSubmit: EventEmitter<string>;
  @Event() dsChange: EventEmitter<string>;

  @State() internalValue: string = '';

  componentWillLoad() {
    this.internalValue = this.value;
  }

  handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.internalValue = input.value;
    this.dsChange.emit(this.internalValue);
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();
    if (!this.disabled && this.internalValue.trim()) {
      this.dsSubmit.emit(this.internalValue);
    }
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  render() {
    const style: any = {};
    if (this.border) style['border'] = this.border;
    if (this.borderRadius) style['border-radius'] = this.borderRadius;

    return (
      <form class="ds-search-bar" onSubmit={this.handleSubmit} style={style}>
        <input
          type="text"
          class="ds-search-bar__input"
          placeholder={this.placeholder}
          value={this.internalValue}
          onInput={this.handleInput}
          onKeyDown={this.handleKeyDown}
          disabled={this.disabled}
          aria-label={this.placeholder}
        />
        <button
          type="submit"
          class="ds-search-bar__button"
          disabled={this.disabled || !this.internalValue.trim()}
          aria-label={this.buttonLabel}
        >
          <svg
            class="ds-search-bar__icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>
    );
  }
}

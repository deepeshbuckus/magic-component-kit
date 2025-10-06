import { Component, Prop, h, Event, EventEmitter, Host } from '@stencil/core';

@Component({
  tag: 'pp-button',
  styleUrl: 'pp-button.scss',
  shadow: true,
})
export class PpButton {
  @Prop({ attribute: 'alternative-style' }) alternativeStyle: boolean = false;
  @Prop({ attribute: 'button-appearance' }) buttonAppearance: 'pill' | 'box' = 'box';
  @Prop({ attribute: 'button-size' }) buttonSize: 'small' | 'medium' | 'large' = 'medium';
  @Prop({ attribute: 'button-theme' }) buttonTheme: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'light' = 'primary';
  @Prop({ attribute: 'button-type' }) buttonType: 'submit' | 'reset' | 'button' = 'button';
  @Prop({ attribute: 'button-disabled' }) disabled: boolean = false;
  @Prop({ attribute: 'icon-only' }) iconOnly: boolean = false;

  @Event({ eventName: 'button-clicked' }) buttonClicked: EventEmitter<Event>;

  private handleClick = (e: Event) => {
    if (this.disabled) {
      return;
    }

    this.buttonClicked.emit(e);
  };

  render() {
    const classNames = [this.buttonTheme, this.buttonAppearance, this.buttonSize, this.iconOnly ? 'icon-only' : '', this.alternativeStyle ? 'alternate' : '']
      .filter(Boolean)
      .join(' ');

    return (
      <Host>
        <button
          class={classNames}
          disabled={this.disabled ?? false}
          type={this.buttonType}
          onClick={this.handleClick}
          aria-disabled={this.disabled ? 'true' : null}
          aria-busy={false}
          aria-label={this.iconOnly ? 'Button' : null}
        >
          <div class="button-content">
            <slot />
          </div>
        </button>
      </Host>
    );
  }
}

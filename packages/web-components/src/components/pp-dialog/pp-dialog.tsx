import { Component, Prop, h, Event, EventEmitter, Host, State, Listen } from '@stencil/core';

@Component({
  tag: 'pp-dialog',
  styleUrl: 'pp-dialog.scss',
  shadow: true,
})
export class PpDialog {
  @Prop({ reflect: true }) open: boolean = false;
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() theme: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'light' = 'primary';

  @Event({ eventName: 'dialog-opened' }) dialogOpened: EventEmitter<void>;
  @Event({ eventName: 'dialog-closed' }) dialogClosed: EventEmitter<void>;
  @Event({ eventName: 'overlay-clicked' }) overlayClicked: EventEmitter<void>;

  @State() isVisible: boolean = false;

  componentWillLoad() {
    this.isVisible = this.open;
  }

  componentDidUpdate() {
    if (this.open && !this.isVisible) {
      this.isVisible = true;
      this.dialogOpened.emit();
    } else if (!this.open && this.isVisible) {
      this.isVisible = false;
      this.dialogClosed.emit();
    }
  }

  @Listen('keydown', { target: 'window' })
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isVisible) {
      this.closeDialog();
    }
  }

  private handleOverlayClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      this.overlayClicked.emit();
      this.closeDialog();
    }
  };

  private closeDialog = () => {
    this.isVisible = false;
    this.dialogClosed.emit();
  };

  render() {
    if (!this.isVisible) {
      return null;
    }

    const containerClasses = [this.size, this.theme].filter(Boolean).join(' ');

    return (
      <Host>
        <div class="dialog-overlay" onClick={this.handleOverlayClick} role="presentation">
          <div
            class={`dialog-container ${containerClasses}`}
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              class="dialog-close"
              onClick={this.closeDialog}
              aria-label="Close dialog"
              type="button"
            >
              ✕
            </button>
            <div class="dialog-content">
              <slot />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

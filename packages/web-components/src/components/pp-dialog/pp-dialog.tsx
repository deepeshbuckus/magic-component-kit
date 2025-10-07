import { Component, Prop, h, Event, EventEmitter, Host, Listen, Watch } from '@stencil/core';

@Component({
  tag: 'pp-dialog',
  styleUrl: 'pp-dialog.scss',
  shadow: true,
})
export class PpDialog {
  @Prop({ reflect: true, mutable: true }) open: boolean = false;
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  @Prop({ reflect: true }) theme: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'light' = 'primary';

  @Event({ eventName: 'dialog-opened' }) dialogOpened: EventEmitter<void>;
  @Event({ eventName: 'dialog-closed' }) dialogClosed: EventEmitter<void>;
  @Event({ eventName: 'overlay-clicked' }) overlayClicked: EventEmitter<void>;

  @Watch('open')
  watchOpenHandler(newValue: boolean, oldValue: boolean) {
    if (newValue && !oldValue) {
      this.dialogOpened.emit();
    } else if (!newValue && oldValue) {
      this.dialogClosed.emit();
    }
  }

  @Listen('keydown', { target: 'window' })
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open) {
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
    this.open = false;
  };

  render() {
    if (!this.open) {
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

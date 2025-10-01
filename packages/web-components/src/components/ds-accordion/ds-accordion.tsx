import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'ds-accordion-item',
  styleUrl: 'ds-accordion.css',
  shadow: true,
})
export class DsAccordionItem {
  @Prop() value: string = '';
  @Prop() open: boolean = false;

  @State() isOpen: boolean = this.open;

  componentWillLoad() {
    this.isOpen = this.open;
  }

  private toggle = () => {
    this.isOpen = !this.isOpen;
  };

  render() {
    return (
      <Host>
        <div class="ds-accordion-item">
          <button
            class="ds-accordion-trigger"
            onClick={this.toggle}
            aria-expanded={this.isOpen ? 'true' : 'false'}
          >
            <slot name="trigger"></slot>
            <svg
              class={{
                'ds-accordion-icon': true,
                'ds-accordion-icon--open': this.isOpen,
              }}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            class={{
              'ds-accordion-content': true,
              'ds-accordion-content--open': this.isOpen,
            }}
          >
            <div class="ds-accordion-content-inner">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

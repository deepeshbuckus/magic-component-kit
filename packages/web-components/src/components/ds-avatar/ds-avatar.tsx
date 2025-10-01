import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'ds-avatar',
  styleUrl: 'ds-avatar.css',
  shadow: true,
})
export class DsAvatar {
  @Prop() src: string = '';
  @Prop() alt: string = '';
  @Prop() fallback: string = '';

  @State() imageLoaded: boolean = false;
  @State() imageError: boolean = false;

  private handleImageLoad = () => {
    this.imageLoaded = true;
  };

  private handleImageError = () => {
    this.imageError = true;
  };

  render() {
    return (
      <Host>
        <div class="ds-avatar">
          {this.src && !this.imageError ? (
            <img
              class="ds-avatar-image"
              src={this.src}
              alt={this.alt}
              onLoad={this.handleImageLoad}
              onError={this.handleImageError}
            />
          ) : (
            <div class="ds-avatar-fallback">
              {this.fallback || <slot></slot>}
            </div>
          )}
        </div>
      </Host>
    );
  }
}

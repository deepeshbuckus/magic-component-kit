import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-progress',
  styleUrl: 'ds-progress.css',
  shadow: true,
})
export class DsProgress {
  @Prop() value: number = 0;
  @Prop() max: number = 100;

  render() {
    const percentage = Math.min(100, Math.max(0, (this.value / this.max) * 100));

    return (
      <Host>
        <div class="ds-progress" role="progressbar" aria-valuenow={this.value} aria-valuemax={this.max}>
          <div class="ds-progress-indicator" style={{ transform: `translateX(-${100 - percentage}%)` }}></div>
        </div>
      </Host>
    );
  }
}

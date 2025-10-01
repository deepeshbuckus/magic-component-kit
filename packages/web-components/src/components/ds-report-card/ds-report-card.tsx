import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-report-card',
  styleUrl: 'ds-report-card.css',
  shadow: true,
})
export class DsReportCard {
  @Prop() title: string;
  @Prop() lastRun: string;
  @Prop() description: string;

  /**
   * Custom border override (e.g., "2px solid hsl(200, 100%, 50%)")
   */
  @Prop() border?: string;

  /**
   * Custom border radius override (e.g., "8px", "1rem")
   */
  @Prop() borderRadius?: string;

  render() {
    const style: any = {};
    if (this.border) style['border'] = this.border;
    if (this.borderRadius) style['border-radius'] = this.borderRadius;

    return (
      <article class="ds-report-card" role="article" style={style}>
        <div class="ds-report-card__header">
          <h3 class="ds-report-card__title">{this.title}</h3>
          {this.lastRun && (
            <p class="ds-report-card__meta">Last run on {this.lastRun}</p>
          )}
        </div>

        <div class="ds-report-card__content">
          <p class="ds-report-card__description">{this.description}</p>
        </div>

        <div class="ds-report-card__footer">
          <slot name="actions"></slot>
        </div>
      </article>
    );
  }
}

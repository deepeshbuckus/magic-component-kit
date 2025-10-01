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

  render() {
    return (
      <article class="ds-report-card" role="article">
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

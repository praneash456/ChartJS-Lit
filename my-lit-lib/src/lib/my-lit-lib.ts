import {
  LitElement,
  html,
  css,
  TemplateResult,
  PropertyValueMap,
  unsafeCSS,
  PropertyValues,
} from 'lit';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
Chart.register(...registerables);
Chart.defaults.font.size = 14;
Chart.defaults.font.family = 'Noto Sans, sans-serif';

import styles from  './my-lit-lib.scss?inline'

export class MyElement extends LitElement {

  static styles = unsafeCSS(styles)
  @property({ type: Object })
  chart: Chart | undefined;

  @property({ type: String })
  type:
    | 'line'
    | 'bar'
    | 'scatter'
    | 'bubble'
    | 'pie'
    | 'doughnut'
    | 'polarArea'
    | 'radar'
    | undefined;

  @property({ type: Object })
  data: unknown | undefined;

  @property({ type: Object })
  options: unknown | undefined;

  @property({ type: Array })
  plugins: [] | undefined;

  @property({ type: Object })
  arialabel: unknown | undefined;

  @property({ type: Object })
  longDesc: unknown | undefined;

  private config:
    | {
        type:
          | 'line'
          | 'bar'
          | 'scatter'
          | 'bubble'
          | 'pie'
          | 'doughnut'
          | 'polarArea'
          | 'radar'
          | undefined;

        data: unknown | undefined;
        options: unknown | undefined;
        plugins: [] | undefined;
      }
    | undefined;

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const data = this.data || {};
    const options = this.options || {};
    const plugins = this.plugins || [];
    this.config = {
      type: this.type,
      data: data,
      options: options,
      plugins: plugins,
    };
    if (!this.chart) {
      const ctx: CanvasRenderingContext2D | null | undefined = this.shadowRoot
        ?.querySelector('canvas')
        ?.getContext('2d');
      if (ctx) {
        this.chart = new Chart(
          ctx,
          this.config as ChartConfiguration<any, any, any>
        );
      }
    }
  }

  protected updated(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (
      changedProperties.has('type') ||
      changedProperties.has('data') ||
      changedProperties.has('options') ||
      changedProperties.has('plugins')
    ) {
      if (this.config) {
        this.config.type = this.type;
        this.config.data = this.data;
        this.config.options = this.options;
        this.config.plugins = this.plugins;
      }
      this.chart?.update();
    }
  }

  render(): TemplateResult<1> {
    return html`
      <div part="base" class="canvas__wrapper">
        <canvas
          class="chart__canvas"
          aria-label=${ifDefined(this.arialabel)}
          longdesc=${ifDefined(this.longDesc)}
          role="img"
        ></canvas>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);

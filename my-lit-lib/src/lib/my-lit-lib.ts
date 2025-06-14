import { LitElement, html, css } from 'lit';

export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--my-element-text-color, black);
    }
  `;

  render() {
    return html`<h2>Hello from Lit!</h2>`;
  }
}

customElements.define('my-element', MyElement);
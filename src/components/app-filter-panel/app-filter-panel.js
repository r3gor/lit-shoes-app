
import { html, LitElement } from 'lit-element';
import styles from './app-filter-panel.styles.js';

import "../app-multiselect-input/app-multiselect-input"

export class AppFilterPanel extends LitElement {

  static styles = [ styles ];
  static properties = {
    filters: { type: Array }
  }

  constructor() {
    super()
    this.filters = []
  }

  render() {
    const brandFilters = this.filters[1]
    return html`
        <app-multiselect-input
          .label='${brandFilters.key}'
          .options='${Array.from(brandFilters.choices)}'
        ></app-multiselect-input>
        <pre>${JSON.stringify(this.filters, null, 2)}</pre>

    `
  }
}

customElements.define('app-filter-panel', AppFilterPanel);

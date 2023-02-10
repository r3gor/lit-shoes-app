
import { html, LitElement } from 'lit-element';
import styles from './app-filter-panel.styles.js';

import "../app-multiselect-input/app-multiselect-input"
import globalStyles from '../../styles/global.styles.js';

export class AppFilterPanel extends LitElement {

  static styles = [ globalStyles, styles ];
  static properties = {
    _filters: { type: Array },
    _value: { type: Object },
  }

  constructor() {
    super()
    this._filters = []
  }

  set filters(f) {
    this._filters = f
    this.value = this.getDefaults(f)
  }

  set value(v) {
    this._value = v
    this.dispatchEvent(new CustomEvent('change', { detail: v }));
  }

  render() {
    return html`
      <h2 class='title'> Filters </h2>
      <pre>${ JSON.stringify(this._value, null, 2) }</pre>
      <div class='content'>
        ${ this._filters.map(f => this.getInputHTML(f)) }
      </div>
    `
  }

  getDefaults(filters) {
    const defaultByType = {
      "choice": [],
      "range": { min: 0, max: 0},
    }

    return filters.reduce(
      (p, c) => {
        const type = c.type
        if (c.default !== undefined) {
          const value = c.default
          return { ...p, [c.key]: { value, type } }
        } // else
        const value = defaultByType[c.type]
        return { ...p, [c.key]: { value, type } }
      }, {}
    )
  }

  getInputHTML(f) {
    const templateByType = {
      "choice": () => this.getMultiselectHTML(f)
      // "range": ... // TODO
    }

    const fn = templateByType[f.type]
    return fn? fn() : html``
  }

  getMultiselectHTML(f) {
// <!--        .value='${this._value[f.key].value}'-->
    return html`
      <app-multiselect-input
        .label='${f.key}'
        .value='${this._value[f.key].value}'
        .options='${f.choices}'
        @change='${({ detail: value }) => this.patchValue(f.key, f.type, value)}'
      ></app-multiselect-input>
    `
  }

  patchValue(key, type, value) {
    this.value = { ...this._value, [key]: { type, value } }
  }
}

customElements.define('app-filter-panel', AppFilterPanel);


import { html, LitElement } from 'lit-element';
import styles from './app-filter-panel.styles.js';

import "../app-multiselect-input/app-multiselect-input"
import globalStyles from '../../styles/global.styles.js';
import { filtersApply, isFiltersZero, makeFiltersParams } from '../../utils/filter.utils.js';
import { DEBUG } from '../../config.js';

const AVAILABLE_FILTERS = [
  { key: "size", type: "choice" },
  { key: "brand", type: "choice" },
  { key: "color", type: "choice" },
  { key: "price", type: "range" },
  { key: "season", type: "choice" },
  { key: "category", type: "choice" },
]

export class AppFilterPanel extends LitElement {

  static styles = [ globalStyles, styles ];
  static properties = {
    filtersParams: { type: Array },
    _value: { type: Object },
  }

  constructor() {
    super()
  }

  set items(itemList) {
    this._items = itemList
    this.filtersParams = makeFiltersParams(AVAILABLE_FILTERS, itemList)
    this.dispatchEvent(new CustomEvent('change', { detail: itemList }));
  }

  set value(v) {
    this._value = v
    const filteredItems = filtersApply(this._items, this._value, this.filtersParams)
    this.dispatchEvent(new CustomEvent('change', { detail: filteredItems }));
  }

  render() {
    if (this.filtersParams === undefined) return html``

    return html`
      <div class='title'>
        <h2>Filters</h2>
        ${ isFiltersZero(this.filtersParams, this._value)
          ? html`No filters applied`
          : html`<button @click='${this.cleanFilters}'>Clean Filters</button>`
        }
      </div>
      ${this.getDebugHtml()}
      <div class='content'>
        ${ this.filtersParams.map(f => this.getInputHTML(f)) }
      </div>
    `
  }

  getDebugHtml() {
    return DEBUG
      ? html`<pre>${ JSON.stringify(this._value, null, 2) }</pre>`
      : html``
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
    const value =
      this._value?.[f.key]?.value ||  // current value
      f.initial // or initial value from filter params

    return html`
      <app-multiselect-input
        .label='${f.key}'
        .value='${value}'
        .options='${f.choices}'
        @change='${({ detail: value }) => this.patchValue(f.key, f.type, value)}'
      ></app-multiselect-input>
    `
  }

  cleanFilters() {
    this.value = undefined
  }

  patchValue(key, type, value) {
    this.value = { ...this._value, [key]: { type, value } }
  }
}

customElements.define('app-filter-panel', AppFilterPanel);

import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { getShoesCatalog } from '../../services/shoes.service.js';

import '../../components/app-item-card/app-item-card';
import '../../components/app-filter-panel/app-filter-panel';
import styles from './app-catalog-page.styles.js';
import globalStyles from '../../styles/global.styles.js';

export class AppCatalogPage extends LitElement {

  static styles = [ globalStyles, styles ];
  static properties = {
    items: { type: Array },
    filtersValue: { type: Object },
  }

  constructor() {
    super()
    this.items = [];
    this.filtersValue = undefined;
  }

  render() {
    return html`

      <app-filter-panel
        .value='${ifDefined(this.filtersValue)}'
        .filters='${ifDefined(this.calcFilters(this.items))}'
        @change='${this.handleChangeFilters}'
      ></app-filter-panel>

      <div class='items-wrapper'>
        ${this.filteredItems.map(i => html`
          <app-item-card
            .imgSrc="${i.image}"
            .title="${i.name}"
            .subtitle="${i.price}"
          ></app-item-card>
        `)}
      </div>
    `
  }

  async firstUpdated(_) {
    await this.fetchUsers()
  }

  handleChangeFilters({ detail: value }) {
    this.filtersValue = value
  }

  get filteredItems() {
    if (!this.filtersValue) return this.items

    const predicateByType = {
      "choice": (val, filterVal) => {
        return val instanceof Array
          ? val.some(v => filterVal.includes(v))
          : filterVal.includes(val)
      },
      "range": (val, filterVal) =>
        val >= filterVal.min &&
        val <= filterVal.max,
    }

    return this.items.filter( i => {
      const filterKeys = Object.keys(this.filtersValue)

      return filterKeys.every(
        key => {
          const value = i[key]
          const { type, value: filterValue } = this.filters[key]
          const pred = predicateByType[type]
          return pred(value, filterValue) // match or not
        }
      )
    })
  }

  async fetchUsers() {
    this.addLoading()
    this.items = await getShoesCatalog()
      .catch(err => {
        alert(`Error when fetching shoes catalog`)
        return []
      })
      .finally(_ => {
        this.completeLoading()
      });
  }
  calcFilters(items) {
    const availableFilters = [
      { key: "size", type: "choice" },
      { key: "brand", type: "choice" },
      { key: "color", type: "choice" },
      { key: "price", type: "range" },
      { key: "season", type: "choice" },
      { key: "category", type: "choice" },
    ]

    return availableFilters.map(f => {
      if (f.type == 'choice') {
        const choices = Array.from(new Set(items
            .map(i => i[f.key])
            .reduce((p, c) => c instanceof Array
                ? [...p, ...c]
                : [...p, c]
              , [])
        ))
        return { ...f, choices, "default": choices } // all selected by default
      }
      if (f.type == 'range') {
        const values = items.map(i => i[f.key])
        const min = Math.min(...values)
        const max = Math.max(...values)
        return { ...f, min, max, "default": { min, max } } // maximun range by default
      }
    })
  }

  addLoading() {
    this.dispatchEvent(new CustomEvent('add-loading'))
  }

  completeLoading() {
    this.dispatchEvent(new CustomEvent('complete-loading'))
  }
}

customElements.define('app-catalog-page', AppCatalogPage);

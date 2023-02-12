import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { getShoesCatalog } from '../../services/shoes.service.js';

import '../../components/app-item-card/app-item-card';
import '../../components/app-filter-panel/app-filter-panel';
import styles from './app-catalog-page.styles.js';
import globalStyles from '../../styles/global.styles.js';
import { makeFiltersParams } from '../../utils/filter.utils.js';


export class AppCatalogPage extends LitElement {

  static styles = [ globalStyles, styles ];
  static properties = {
    _items: { type: Array },
    filteredItems: { type: Array }
  }

  constructor() {
    super()
    this._items = [];
  }

  set items(v) {
    this._items = v;
    this.filterPanel.items = v;
  }

  render() {
    return html`
      <app-filter-panel
        @change='${this.handleChangeFilters}'
      ></app-filter-panel>

      <div class='items-wrapper'>
        ${
          this.filteredItems?.length
            ? this.filteredItems.map(i => html`
            <app-item-card
              .imgSrc="${i.image}"
              .title="${i.name}"
              .subtitle="${i.price}"
            ></app-item-card>
          `)
            : html`No items`
        }
      </div>
    `
  }

  get filterPanel() { return this.renderRoot.querySelector("app-filter-panel"); }

  async firstUpdated(_) {
    await this.fetchUsers()
  }

  handleChangeFilters({ detail: filteredItems }) {
    this.filteredItems = filteredItems
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

  addLoading() {
    this.dispatchEvent(new CustomEvent('add-loading'))
  }

  completeLoading() {
    this.dispatchEvent(new CustomEvent('complete-loading'))
  }
}

customElements.define('app-catalog-page', AppCatalogPage);

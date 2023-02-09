
import {html, LitElement} from 'lit-element';
import styles from './app-catalog-page.styles.js';
import { getShoesCatalog } from '../../services/shoes.service.js';

import "../../components/app-item-card/app-item-card";

export class AppCatalogPage extends LitElement {

  static styles = [ styles ];
  static properties = {
    _loading: { type: Boolean },
    items: { type: Array },
  }

  constructor() {
    super()
    this.items = []
  }

  render() {
    return html`
      <div class='items-wrapper'>
        ${this.items.map(i => html`
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
    console.log(this.calcFilters(this.items))
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
        const choices = new Set(items
            .map(i => i[f.key])
            .reduce((p, c) => c instanceof Array
                ? [...p, ...c]
                : [...p, c]
              , [])
        )
        return { ...f, choices }
      }
      if (f.type == 'range') {
        const values = items.map(i => i[f.key])
        const min = Math.min(...values)
        const max = Math.max(...values)
        return { ...f, min, max }
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

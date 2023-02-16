
import { html, LitElement } from 'lit-element';
import { CompBase } from '/src/core/component-base.decorator.js';
import "/src/components/app-gallery-items/app-gallery-items.js"

import styles from './app-home-page.styles.js';
import { getShoesCatalog } from '../../services/shoes.service.js';

export class AppHomePage extends CompBase(LitElement) {

  static styles = [ styles ];
  static properties = {
    favorites: { type: Array },
    items: { type: Array },
    cart: { type: Array },
  }

  constructor() {
    super()
  }

  set routeContext(context) {
    this.fetchItems()
  }

  render() {
    const favItems = this.getFavoriteItems()
    const cartItems = this.getCartItems()
    return html`
      <h1>Welcome</h1>
      <h3>My favorites</h3>
      ${ favItems && favItems.length > 0
        ? html`<app-gallery-items .items='${favItems}'></app-gallery-items>`
        : html`${this.noFavsHtml}`
      }
      <h3>My cart</h3>
      ${ cartItems && cartItems.length > 0
        ? html`<app-gallery-items .items='${cartItems}'></app-gallery-items>`
        : html`${this.noFavsHtml}`
      }
    `
  }

  get noFavsHtml() {
    return html`
      <div>
        You have no favorites added.
        <br>
        <app-link href='catalog'>Go to catalog</app-link>
      </div>
    `
  }

  getFavoriteItems() {
    return this.items?.filter(
      i => this.favorites?.includes(i.id)
    )
  }

  getCartItems() {
    return this.items?.filter(
      i => this.cart?.some(ci => ci.id == i.id)
    )
  }

  async fetchItems() {
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

  async onAppStateChange(state) {
    this.favorites = state?.favorites
    this.cart = state?.cart
  }
}

customElements.define('app-home-page', AppHomePage);


import {html, LitElement} from 'lit-element';
import styles from './app-cart-page.styles.js';
import { getShoesCatalog, getShoesItem } from '../../services/shoes.service.js';
import { CompBase } from '../../core/component-base.decorator.js';

import "/src/components/app-cart-item-card/app-cart-item-card.js"
import globalStyles from '../../styles/global.styles.js';
import cartService from '../../services/cart-state.service.js';
import { CURRENCY_SYMBOL } from '../../config.js';
import { deepEqual } from '../../utils/operations.utils.js';

export class AppCartPage extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    items: { type: Object }, // dict
    _cart: { type: Array },
  }

  set routeContext(context) {
    this.fetchCartItems()
  }

  set cart(cartValue) {
    const prevCart = this._cart
    this._cart = cartValue
    if (
      document.URL.includes("cart") &&
      !deepEqual(prevCart, cartValue)) {

      this.fetchCartItems()
    }
  }

  async fetchCartItems() {
    const ids = this._cart?.map(i => i.id) || []
    const promises = ids.map(id => getShoesItem(id))
    this.addLoading()
    await Promise.all(promises)
      .then(items => {
        this.items = items.reduce((p, c) => {
          const { details } = this._cart.find(i => i.id === c.id)
          return {...p, [c.id]: {item: c, details}}
        }, {})
    }).catch(err => {
        alert(`Error when fetching cart shoes`)
        return []
    }).finally(_ => {
        this.completeLoading()
      });
  }

  constructor() {
    super()
  }

  render() {
    return html`
      ${this.itemsContentHtml}
      ${this.OrderResumeHtml}
    `
  }

  get itemsContentHtml() {
    if (!this.items) return html`No items`
    return html`
      <div class='items-wrapper'>
        ${
          Object.values(this.items || []).map(i => html`
            <app-cart-item-card
              .item='${i}'
              .qty='${this.getQty(i.item.id)}'
              @delete-item='${({detail: {id}}) => cartService.removeItem(id)}'
            ></app-cart-item-card>
          `)
        }
      </div>
    `
  }

  get OrderResumeHtml() {
    return html`
      <div class='order-resume'>
        <h3>Order: </h3>
        <div class='order-resume__row'>
          <div class='label'>Products</div>
          <div class='value'>${ this.productsQuantity }</div>
        </div>
        <div class='order-resume__row'>
          <div class='label'>Total</div>
          <div class='value total'>${ this.cartTotalPrice + ' ' + CURRENCY_SYMBOL }</div>
        </div>
      </div>
    `
  }

  getQty(id) {
    return this._cart.filter(i => i.id === id).length
  }

  get productsQuantity() {
    if (!this._cart) return 0
    return Object.keys(this._cart).length
  }

  get cartTotalPrice() {
    if (!this.items) return 0
    const DECIMALS_POS = 2
    const price = Object.values(this.items).reduce(
      (p, c) => p + c.item?.price
      , 0)
    return price.toFixed(DECIMALS_POS);
  }

  async onAppStateChange(state) {
    this.cart = state?.cart
  }
}

customElements.define('app-cart-page', AppCartPage);

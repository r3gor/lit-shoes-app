
import {html, LitElement} from 'lit-element';
import styles from './app-cart-page.styles.js';
import { getShoesCatalog, getShoesItem } from '../../services/shoes.service.js';
import { CompBase } from '../../core/component-base.decorator.js';

import "/src/components/app-cart-item-card/app-cart-item-card.js"
import globalStyles from '../../styles/global.styles.js';

export class AppCartPage extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    items: { type: Object }, // dict
    cart: { type: Array }
  }

  set routeContext(context) {
    const ids = this.cart?.map(i => i.id) || []
    this.fetchCartItems(ids)
  }

  async fetchCartItems(ids) {
    const promises = ids.map(id => getShoesItem(id))
    this.addLoading()
    await Promise.all(promises)
      .then(items => {
        this.items = items.reduce((p, c) => {
          const { details } = this.cart.find(i => i.id === c.id)
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
      <div class='items-wrapper'>
        ${
          Object.values(this.items || []).map(i => html`
            <app-cart-item-card
              .item='${i}'
            ></app-cart-item-card>
          `)
        }

      </div>
      <div class='order-resume'>
        <h3>Order: </h3>
        <div class='order-resume__row'>
          <div class='label'>Products</div>
          <div class='value'>${ this.productsQuantity }</div>
        </div>
        <div class='order-resume__row'>
          <div class='label'>Total</div>
          <div class='value'>${ this.cartTotalPrice }</div>
        </div>
      </div>
<!--  <pre>${JSON.stringify(this.items, null, 2)}</pre>-->
    `
  }

  get productsQuantity() {
    if (!this.cart) return 0
    return Object.keys(this.cart).length
  }

  get cartTotalPrice() {
    if (!this.items) return 0
    return Object.values(this.items).reduce(
      (p, c) => p + c.item?.price
    , 0)
  }

  async onAppStateChange({ cart, favorites }) {
    this.cart = cart
  }
}

customElements.define('app-cart-page', AppCartPage);

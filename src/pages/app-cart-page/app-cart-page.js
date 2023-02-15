
import {html, LitElement} from 'lit-element';
import styles from './app-cart-page.styles.js';
import { getShoesCatalog, getShoesItem } from '../../services/shoes.service.js';
import { CompBase } from '../../core/component-base.decorator.js';

export class AppCartPage extends CompBase(LitElement) {

  static styles = [ styles ];
  static properties = {
    items: { type: Array },
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
      <p>component app-cart-page works!</p>
      <pre>${JSON.stringify(this.items, null, 2)}</pre>
    `
  }

  async onAppStateChange({ cart, favorites }) {
    this.cart = cart
  }
}

customElements.define('app-cart-page', AppCartPage);

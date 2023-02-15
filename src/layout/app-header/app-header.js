
import {html, LitElement} from 'lit-element';
import styles from './app-header.styles.js';

import '../../components/app-link/app-link'
import { CompBase } from '/src/core/component-base.decorator.js';
import globalStyles from '../../styles/global.styles.js';

export class AppHeader extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    cart: { type: Array },
    favorites: { type: Array },
  }

  constructor() {
    super()
    this.cart = []
    this.favorites = []
  }

  render() {
    return html`
      <div style='display: flex; gap: 24px'>
        <app-link href="/">Home</app-link>
        <app-link href="/catalog">Catalog</app-link>
        <app-link href="/cart">Cart</app-link>
      </div>
      <h1>Shoes App</h1>
      <div>
        <pre>Cart: ${JSON.stringify(this.cart?.length || 0)}</pre>
        <pre>Favorites: ${JSON.stringify(this.favorites?.length || 0)}</pre>
      </div>
    `
  }


  onAppStateChange(state) {
    if (!state) return
    const { cart, favorites } = state
    this.cart = cart
    this.favorites = favorites
  }
}

customElements.define('app-header', AppHeader);

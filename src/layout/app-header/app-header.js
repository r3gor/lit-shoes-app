
import {html, LitElement} from 'lit-element';
import styles from './app-header.styles.js';

import '../../components/app-link/app-link'
import { CompBase } from '/src/core/component-base.decorator.js';
import globalStyles from '../../styles/global.styles.js';
import 'fa-icons';

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
        <app-link href="/">
          <fa-icon class="fas fa-home" color="white"></fa-icon>
          Home
        </app-link>
        <app-link href="/catalog">
          <fa-icon class="fas fa-shopping-bag" color="white"></fa-icon>
          Catalog
        </app-link>
        <app-link href="/cart">
          <fa-icon class="fas fa-shopping-cart" color="white"></fa-icon>
          Cart
        </app-link>
      </div>
      <div class='title-app'>
        <fa-icon class="fas fa-store" color="white" size="2em"></fa-icon>
        <h1>Shoes App</h1>
      </div>
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


import {html, LitElement} from 'lit-element';
import styles from './app-header.styles.js';

import { CompBase } from '/src/core/component-base.decorator.js';
import globalStyles from '../../styles/global.styles.js';

import '/src/components/app-link/app-link.js'
import '/src/components/app-badge/app-badge.js'
import 'fa-icons';
import { navigator } from 'lit-element-router';

export class AppHeader extends CompBase(navigator(LitElement)) {

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
      ${this.linksHtml}
      ${this.titleAppHtml}
      ${this.badgesHtml}
    `
  }

  get linksHtml() {
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
    `
  }

  get titleAppHtml() {
    return html`
      <div class='title-app'>
        <fa-icon class="fas fa-store" color="white" size="2em"></fa-icon>
        <h1>Shoes App</h1>
      </div>
    `
  }

  get badgesHtml() {
    return html`
      <div>
        <app-badge
          @click='${() => this.navigate('cart')}'
          faicon="fas fa-shopping-cart"
          .color='white' .value='${this.cartLength}'
        ></app-badge>
        <app-badge
          @click='${() => this.navigate('')}'
          faicon='fas fa-heart'
          .color='white' .value='${this.favsLength}'
        ></app-badge>
      </div>
    `
  }

  get cartLength() { return this.cart?.length || 0 }
  get favsLength() { return this.favorites?.length || 0 }

  onAppStateChange(state) {
    if (!state) return
    const { cart, favorites } = state
    this.cart = cart
    this.favorites = favorites
  }
}

customElements.define('app-header', AppHeader);

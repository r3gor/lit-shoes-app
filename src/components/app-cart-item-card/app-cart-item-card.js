
import { html, LitElement } from 'lit-element';
import { CompBase } from '/src/core/component-base.decorator.js';

import styles from './app-cart-item-card.styles.js';
import { capitalizeStr } from '../../utils/operations.utils.js';
import { CURRENCY_SYMBOL } from '../../config.js';

export class AppCartItemCard extends CompBase(LitElement) {

  static styles = [ styles ];
  static properties = {
    item: { type: Object },
  }

  constructor() {
    super()
  }

  render() {
    if (!this.item) return html``

    const { item, details } = this.item;

    return html`
      <div class='top-actions'>
        <button>Delete</button>
      </div>
      <div class='priority'>
        <a><img src='${item.image}'></a>
        <div class='priority__details'>
          <div class='brand'>${item.brand}</div>
          <div class='code'>Code: ${item.id}</div>
          <div class='name'>${item.name}</div>
          <div class='by'>Sell by: ShoesApp</div>
          <div class='color-size'>
            Color: <span>${capitalizeStr(item.color)}</span>
            |
            Size: <span>${details.size}</span>
          </div>
          <div class='price'>${item.price + ' ' + CURRENCY_SYMBOL}</div>
        </div>

      </div>
    `
  }
}

customElements.define('app-cart-item-card', AppCartItemCard);

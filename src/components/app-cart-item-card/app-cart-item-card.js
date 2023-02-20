
import { html, LitElement } from 'lit-element';
import { CompBase } from '/src/core/component-base.decorator.js';

import styles from './app-cart-item-card.styles.js';
import { capitalizeStr } from '../../utils/operations.utils.js';
import { CURRENCY_SYMBOL } from '../../config.js';
import globalStyles from '../../styles/global.styles.js';
import "fa-icons"

export class AppCartItemCard extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    item: { type: Object },
    qty: { type: Number },
  }

  constructor() {
    super()
  }

  render() {
    if (!this.item) return html``

    return html`
      ${this.topActionsHtml}
      ${this.priorityAreaHtml}
      ${this.bottomActionsHtml}
    `
  }

  get topActionsHtml() {
    const { item, details } = this.item;

    return html`
      <div class='top-actions'>
        <button class='icon-btn danger-bg' @click='${() => this.deleteItem(item.id)}'>
          <fa-icon class="fas fa-trash" color="${this.color}" size='16px' ></fa-icon>
        </button>
      </div>
    `
  }

  get priorityAreaHtml() {
    const { item, details } = this.item;

    return html`
      <div class='priority'>
        <a><img src='${item.image}'></a>
        <div class='priority__details'>
          <div class='brand'>${item.brand}</div>
          <div class='code'>Code: ${item.id}</div>
          <div class='name'>${item.name}</div>
          <div class='by'>Sell by: Softtek</div>
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

  get bottomActionsHtml() {
    const { item, details } = this.item;

    return html`
      <div class='bottom-actions'>
        <div>Quantity: ${this.qty}</div>
      </div>
    `
  }

  deleteItem(id) {
    this.dispatchEvent(new CustomEvent('delete-item', { detail: {id} }))
  }
}

customElements.define('app-cart-item-card', AppCartItemCard);

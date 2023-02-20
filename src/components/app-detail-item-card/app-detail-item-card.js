
import { html, LitElement } from 'lit-element';
import { CompBase } from '/src/core/component-base.decorator.js';

import styles from './app-detail-item-card.styles.js';
import { CURRENCY_SYMBOL } from '../../config.js';
import globalStyles from '../../styles/global.styles.js';

export class AppDetailItemCard extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    item: { type: Object },
    size: { type: Number },
  }

  constructor() {
    super()
  }

  render() {
    if (this.item === undefined) return html``
    return html`
      <div class='header'>
      </div>
      <div class='main'>

        <div class='resume'>
          <div class='category'>${this.item.category}</div>
          <div class='name'>${this.item.name}</div>
          <div class='brand'>${this.item.brand}</div>
          <div class='price'>${this.item.price + ' ' + CURRENCY_SYMBOL}</div>

          <div class='details'>
            <div class='flex-row'>
              <div class='strong'>Color:</div>
              <div class='flex-row'>
                <div class='color-sample' style='background-color: ${this.item.color}'></div>
                <div class='color'>${this.item.color}</div>
              </div>
            </div>

            <div class='flex-row'>
              <div class='strong'>Season:</div>
              <div class='season'>${this.item.season}</div>
            </div>

            <div class='flex-row'>
              <label for="size" class='strong'>Size:</label>
              <select @change='${this.handleChangeSize}' name="size" id="size">
                <option>-</option>
                ${this.item.size.map(s => html`
                    <option value="${s}">${s}</option>
                  `)}
              </select>
            </div>
          </div>

          <button
          ?disabled='${this.size===undefined}'
          @click='${() => this.addToCart(this.item.id, this.size)}'>
            Add to cart
          </button>
        </div>

        <div class='imgs'>
          <img class='image-main' src='${this.item["image"]}'/>
          <div class='image-second'>
            <img src='${this.item["image-side"]}'/>
            <img src='${this.item["image-behind"]}'/>
          </div>
        </div>
      </div>

      <div class='footer'>
      </div>
    `
  }

  get selectSize() { return this.renderRoot.querySelector("#size") }

  handleChangeSize() {
    const value = this.selectSize.value
    if (value==='-') {
      this.size = undefined
      return
    }
    this.size = parseInt(value)
  }

  addToCart(id, size) {
    this.dispatchEvent(new CustomEvent('add-cart', { detail: {id, size} }))
  }

  // onAppStateChange(newState) {
  // Listen state changes here, delete if not use app state
  // }
}

customElements.define('app-detail-item-card', AppDetailItemCard);

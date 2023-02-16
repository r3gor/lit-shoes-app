
import {html, LitElement} from 'lit-element';
import styles from './app-item-card.styles.js';
import globalStyles from '../../styles/global.styles.js';
import favoritesService from '../../services/favorites-state.service.js';
import { CompBase } from '../../core/component-base.decorator.js';
import { CURRENCY_SYMBOL } from '../../config.js';
import cartService from '../../services/cart-state.service.js';

export class AppItemCard extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    isFavorite: { type: Boolean },
    isInCart: { type: Boolean },
    _item: { type: Number },
  }

  set item(val) {
    this._item = val
    this.updateIsFavorite()
    this.updateIsInCart()
  }

  constructor() {
    super()
  }

  render() {
    return html`
      ${this.favoriteButtonIconHtml}
      ${this.cartButtonIconHtml}
    <img
      class='main-img'
      src='${this._item.image}'
      @click='${() => this.emit('show-details')}'
    >
    <div class='resume'>
      <div class='brand'>${this._item.brand}</div>
      <div class='title'>${this._item.name}</div>
      <div class='subtitle'>${this._item.price + ' ' + CURRENCY_SYMBOL}</div>
    </div>
    <div class='actions show-hover'>
      ${this.actionButtonHtml}
    </div>
    `
  }

  get cartButtonIconHtml() {
    return this.isInCart
      ? html`
          <button class='show-hover button-icon button-cart'>
            <img src='https://cdn1.iconfinder.com/data/icons/shopping3/95/Untitled-26-512.png'>
          </button>
      `
      : html``

  }

  get favoriteButtonIconHtml() {
    return this.isFavorite
      ? html`
        <button class='button-fav-on button-icon show-hover' @click='${() => this.emit('del-fav')}'>
          <img src='https://www.iconpacks.net/icons/1/free-heart-icon-431-thumb.png'>
        </button>`
      : html `
        <button class='button-fav-off button-icon show-hover' @click='${() => this.emit('add-fav')}'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heart_empty_font_awesome.svg/768px-Heart_empty_font_awesome.svg.png'>
        </button>`
  }

  get actionButtonHtml() {
    return this.isInCart
      ? html`<button class='gopay-btn' @click='${() => this.emit('show-cart')}'>GO TO PAY</button>`
      : html`<button class='godetails-btn' @click='${() => this.emit('show-details')}'>ADD TO CART</button>`
  }

  emit(event) {
    this.dispatchEvent(new CustomEvent(event))
  }

  onAppStateChange(state) {
    this.updateIsFavorite()
    this.updateIsInCart()
  }

  updateIsFavorite() {
    this.isFavorite = favoritesService.isFavorite(this._item.id)
  }

  updateIsInCart() {
    this.isInCart = cartService.isInCart(this._item.id)
  }
}

customElements.define('app-item-card', AppItemCard);

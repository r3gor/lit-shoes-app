
import {html, LitElement} from 'lit-element';
import styles from './app-item-card.styles.js';
import globalStyles from '../../styles/global.styles.js';
import favoritesService from '../../services/favorites-state.service.js';
import { CompBase } from '../../core/component-base.decorator.js';

export class AppItemCard extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    imgSrc: { type: String },
    title: { type: String },
    subtitle: { type: String },
    isFavorite: { type: Boolean },
    _id: { type: Number },
  }

  set id(val) {
    this._id = val
    this.updateIsFavorite()
  }

  constructor() {
    super()
  }

  render() {
    return html`
    <img src='${this.imgSrc}'>
    <div class='title'>${this.title}</div>
    <div class='subtitle'>${this.subtitle}</div>
    <div class='actions'>
      <button @click='${() => this.emit('show-details')}'>Show details</button>
      ${
      this.isFavorite
        ? html`<button @click='${() => this.emit('del-fav')}'>Delete from favorites</button>`
        : html `<button @click='${() => this.emit('add-fav')}'>Add to favorites</button>`
      }
    </div>
    `
  }

  emit(event) {
    this.dispatchEvent(new CustomEvent(event))
  }

  onAppStateChange(state) {
    this.updateIsFavorite()
  }

  updateIsFavorite() {
    this.isFavorite = favoritesService.isFavorite(this._id)
  }
}

customElements.define('app-item-card', AppItemCard);

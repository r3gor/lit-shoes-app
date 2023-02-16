
import { html, LitElement } from 'lit-element';
import { CompBase } from '/src/core/component-base.decorator.js';

import styles from './app-gallery-items.styles.js';
import favoritesService from '../../services/favorites-state.service.js';
import { navigator } from 'lit-element-router';

import "/src/components/app-link/app-link.js"

export class AppGalleryItems extends navigator(CompBase(LitElement)) {

  static styles = [ styles ];
  static properties = {
    items: { type: Array },
  }

  constructor() {
    super()
  }

  render() {
    if (!this.items || this.items?.length === 0) return html`No items`
    return html`
      ${this.items.map(i => html`
          <app-item-card
            @show-details='${() => this.navigate('cart')}'
            @show-cart='${() => this.navigateItemDetails(i.id)}'
            @add-fav='${() => favoritesService.addItem(i.id)}'
            @del-fav='${() => favoritesService.removeItem(i.id)}'
            .item='${i}'
          ></app-item-card>
      `)}
    `
  }

  navigateItemDetails(id) {
    this.navigate(`/details/${id}`);
  }

  // onAppStateChange(newState) {
  // Listen state changes here, delete if not use app state
  // }
}

customElements.define('app-gallery-items', AppGalleryItems);

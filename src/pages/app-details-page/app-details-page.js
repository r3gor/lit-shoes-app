
import {html, LitElement} from 'lit-element';
import styles from './app-details-page.styles.js';
import { CompBase } from '../../core/component-base.decorator.js';
import { getShoesCatalog, getShoesItem } from '../../services/shoes.service.js';
import globalStyles from '../../styles/global.styles.js';
import { DEBUG } from '../../config.js';
import appState from '../../services/app-state.service.js';
import cartService from '../../services/cart-state.service.js';
import "/src/components/app-detail-item-card/app-detail-item-card.js"

export class AppDetailsPage extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    item: { type: Object },
    size: { type: Number },
  }

  constructor() {
    super()
  }

  set routeContext(context) {
    this.item = undefined
    this.size = undefined
    const { params: { id } } = context
    this.fetchItem(id)
  }

  render() {
    return html`
      ${
        this.item === undefined
          ? html`Item not found.`
          : this.getItemDetailHtml()
      }
      ${
      DEBUG
        ? html`<pre>${JSON.stringify(this.item, null, 2)}</pre>`
        : html``
      }
    `
  }

  getItemDetailHtml() {
    if (this.item === undefined) return
    return html`
      <app-detail-item-card
      .item='${this.item}'
      @add-cart='${({detail}) => this.handleAddToCart(detail)}'
      ></app-detail-item-card>
    `
  }

  handleAddToCart({id, size}) {
    cartService.addItem(id, { size })
  }

  async fetchItem(id) {
    this.addLoading()
    this.item = await getShoesItem(id)
      .catch(err => {
        alert(`Error when fetching shoes (id: ${id})`)
        return undefined
      })
      .finally(_ => {
        this.completeLoading()
      });
  }
}

customElements.define('app-details-page', AppDetailsPage);


import {html, LitElement} from 'lit-element';
import styles from './app-details-page.styles.js';
import { CompBase } from '../../core/component-base.decorator.js';
import { getShoesCatalog, getShoesItem } from '../../services/shoes.service.js';
import globalStyles from '../../styles/global.styles.js';
import { DEBUG } from '../../config.js';

export class AppDetailsPage extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    item: { type: Object },
  }

  constructor() {
    super()
  }

  set routeContext(context) {
    this.item = undefined
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
      <div class='item-detail'>
        <div class='resume'>
          <div class='subtitle'>${this.item.category}</div>
          <div class='title'>${this.item.name}</div>
          <div class='actions'>${this.item.price}</div>
        </div>
        <img class='image-main' src='${this.item["image"]}'/>
        <div class='image-second'>
          <img src='${this.item["image-side"]}'/>
          <img src='${this.item["image-behind"]}'/>
        </div>
      </div>
    `
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

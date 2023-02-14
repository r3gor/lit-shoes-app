
import {html, LitElement} from 'lit-element';
import styles from './app-cart-page.styles.js';
import { getShoesCatalog } from '../../services/shoes.service.js';
import { CompBase } from '../../core/component-base.decorator.js';

export class AppCartPage extends CompBase(LitElement) {

  static styles = [ styles ];
  static properties = {
    item: { type: Object }
  }

  set routeContext(context) {

  }

  async fetchUsers() {
    this.addLoading()
    this.items = await getShoesCatalog()
      .catch(err => {
        alert(`Error when fetching shoes catalog`)
        return []
      })
      .finally(_ => {
        this.completeLoading()
      });
  }

  constructor() {
    super()
  }

  render() {
    return html`<p>component app-cart-page works!</p>`
  }

  addLoading() {
    this.dispatchEvent(new CustomEvent('add-loading', { composed: true, bubbles: true }))
  }

  completeLoading() {
    this.dispatchEvent(new CustomEvent('complete-loading', { composed: true, bubbles: true }))
  }
}

customElements.define('app-cart-page', AppCartPage);

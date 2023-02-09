
import {html, LitElement} from 'lit-element';
import styles from './app-catalog-page.styles.js';
import { getShoesCatalog } from '../../services/shoes.service.js';

import "../../components/app-spinner/app-spinner";

export class AppCatalogPage extends LitElement {

  static styles = [ styles ];
  static properties = {
    _loading: { type: Boolean },
    items: { type: Array },
  }

  constructor() {
    super()
    this.items = []
  }

  render() {
    return html`
      <pre>${JSON.stringify(this.items, null, 2)}</pre>
    `
  }

  async firstUpdated(_) {
    await this.fetchUsers()
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

  addLoading() {
    this.dispatchEvent(new CustomEvent('add-loading'))
  }

  completeLoading() {
    this.dispatchEvent(new CustomEvent('complete-loading'))
  }
}

customElements.define('app-catalog-page', AppCatalogPage);

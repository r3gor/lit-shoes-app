
import {html, LitElement} from 'lit-element';
import styles from './app-header.styles.js';

import '../../components/app-link/app-link'

export class AppHeader extends LitElement {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html`
      <div>
        <app-link href="/">Home</app-link>
        <app-link href="/catalog">Catalog</app-link>
        <app-link href="/details/4">Details</app-link>
        <app-link href="/cart">Cart</app-link>
      </div>

      <h1>Shoes App</h1>
    `
  }
}

customElements.define('app-header', AppHeader);


import {html, LitElement} from 'lit-element';
import styles from './app-catalog-page.styles.js';

export class AppCatalogPage extends LitElement {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html`<p>component app-catalog-page works!</p>`
  }
}

customElements.define('app-catalog-page', AppCatalogPage);

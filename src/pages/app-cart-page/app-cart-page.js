
import {html, LitElement} from 'lit-element';
import styles from './app-cart-page.styles.js';

export class AppCartPage extends LitElement {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html`<p>component app-cart-page works!</p>`
  }
}

customElements.define('app-cart-page', AppCartPage);

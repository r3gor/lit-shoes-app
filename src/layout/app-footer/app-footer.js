
import {html, LitElement} from 'lit-element';
import styles from './app-footer.styles.js';

export class AppFooter extends LitElement {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html`
      <footer>Shoes App - Lit Elements App</footer>
    `
  }
}

customElements.define('app-footer', AppFooter);

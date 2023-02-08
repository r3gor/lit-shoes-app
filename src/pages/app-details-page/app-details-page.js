
import {html, LitElement} from 'lit-element';
import styles from './app-details-page.styles.js';

export class AppDetailsPage extends LitElement {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html`<p>component app-details-page works!</p>`
  }
}

customElements.define('app-details-page', AppDetailsPage);

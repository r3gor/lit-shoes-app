
import { html, LitElement } from 'lit-element';
import styles from './app-range-input.styles.js';

export class AppRangeInput extends LitElement {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html`<p>component app-range-input works!</p>`
  }
}

customElements.define('app-range-input', AppRangeInput);

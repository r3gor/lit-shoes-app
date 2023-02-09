
import {html, LitElement} from 'lit-element';
import styles from './app-spinner.styles.js';

export class AppSpinner extends LitElement {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html``
  }
}

customElements.define('app-spinner', AppSpinner);

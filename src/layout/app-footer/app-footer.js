
import {html, LitElement} from 'lit-element';
import styles from './app-footer.styles.js';
import { CompBase } from '../../core/component-base.decorator.js';

export class AppFooter extends CompBase(LitElement) {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html`
      <footer>Softtek - Shoes App</footer>
    `
  }

  onAppStateChange(newState) {
  }
}

customElements.define('app-footer', AppFooter);

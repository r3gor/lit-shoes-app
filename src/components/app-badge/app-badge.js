
import { html, LitElement } from 'lit-element';
import { CompBase } from '/src/core/component-base.decorator.js';

import globalStyles from '/src/styles/global.styles.js';
import styles from './app-badge.styles.js';

export class AppBadge extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html`<p>component app-badge works!</p>`
  }

  // onAppStateChange(newState) {
  // Listen state changes here, delete if not use app state
  // }
}

customElements.define('app-badge', AppBadge);

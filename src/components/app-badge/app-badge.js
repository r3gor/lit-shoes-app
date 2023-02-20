
import { html, LitElement } from 'lit-element';
import { CompBase } from '/src/core/component-base.decorator.js';

import globalStyles from '/src/styles/global.styles.js';
import styles from './app-badge.styles.js';

import 'fa-icons';

export class AppBadge extends CompBase(LitElement) {

  static styles = [ globalStyles, styles ];
  static properties = {
    faicon: { type: String },
    color: { type: String },
    value: { type: String },
  }

  constructor() {
    super()
    this.faicon = 'fas fa-smile'
    this.color = 'white'
  }

  render() {
    return html`
      <fa-icon class="${this.faicon}" color="${this.color}" size='24px' ></fa-icon>
      <div class='value'>${this.value}</div>
    `
  }

  // onAppStateChange(newState) {
  // Listen state changes here, delete if not use app state
  // }
}

customElements.define('app-badge', AppBadge);

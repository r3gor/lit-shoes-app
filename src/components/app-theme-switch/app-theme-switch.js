const ICONS = {
  dark: 'https://cdn-icons-png.flaticon.com/512/196/196685.png',
  light: 'https://cdn-icons-png.flaticon.com/512/169/169367.png'
}

import {html, LitElement} from 'lit-element';
import styles from './app-theme-switch.styles.js';

export class AppThemeSwitch extends LitElement {

  static styles = [ styles ];
  static properties = {
    theme: { type: String },
  }

  constructor() {
    super()
  }

  render() {
    if (!this.theme) return html``
    return html`
      <button @click='${this.handleClick}'>
        <img src='${this.getIcon()}'>
      </button>
    `
  }

  getIcon() {
    const toChange = this.theme == 'light'? 'dark' : 'light'
    return ICONS[toChange]
  }

  handleClick(_) {
    const value = this.theme == 'light'? 'dark' : 'light'
    this.dispatchEvent(new CustomEvent('switch', { detail: value}))
  }
}

customElements.define('app-theme-switch', AppThemeSwitch);

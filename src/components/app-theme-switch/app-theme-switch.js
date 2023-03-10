const ICONS = {
  dark: 'https://www.svgrepo.com/show/187683/crescent-moon-moon.svg',
  light: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75176/sun-icon-clipart-xl.png'
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
      <button class='${this.theme}' @click='${this.handleClick}'>
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

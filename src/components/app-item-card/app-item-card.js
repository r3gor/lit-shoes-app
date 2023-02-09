
import {html, LitElement} from 'lit-element';
import styles from './app-item-card.styles.js';

export class AppItemCard extends LitElement {

  static styles = [ styles ];
  static properties = {
    imgSrc: { type: String },
    title: { type: String },
    subtitle: { type: String },
  }

  constructor() {
    super()
  }

  render() {
    return html`
    <img src='${this.imgSrc}'>
    <div class='title'>${this.title}</div>
    <div class='subtitle'>${this.subtitle}</div>
    `
  }
}

customElements.define('app-item-card', AppItemCard);

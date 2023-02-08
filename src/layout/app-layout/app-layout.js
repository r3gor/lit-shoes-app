
import {html, LitElement} from 'lit-element';
import styles from './app-layout.styles.js';

export class AppLayout extends LitElement {

  static styles = [ styles ];
  static properties = { }

  constructor() {
    super()
  }

  render() {
    return html`
      <slot class='header' name='header'></slot>
      <slot class='main' name='main'></slot>
      <slot class='footer' name='footer'></slot>
<!--      <div class='header'>-->
<!--        <slot class='header' name='header'></slot>-->
<!--      </div>-->
<!--      <div class='main'>-->
<!--        <slot name='main'></slot>-->
<!--      </div>-->
<!--      <div class='footer'>-->
<!--        <slot name='footer'></slot>-->
<!--      </div>-->
    `
  }
}

customElements.define('app-layout', AppLayout);

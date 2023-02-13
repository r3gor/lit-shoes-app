import { LitElement, html } from 'lit-element';
import { outlet } from 'lit-element-router';

class Main extends outlet(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }

  setRouterContext(route, context) {
    this.getPage(route).routeContext = context
  }

  getPage(pageRoute) {
    return this.querySelector(`[route=${pageRoute}]`)
  }
}

customElements.define('app-main', Main);

import {} from "@webcomponents/webcomponentsjs/webcomponents-loader.js";

import { LitElement, html, css } from 'lit-element';
import { router } from 'lit-element-router';

import './main.js';
import './components/app-link/app-link.js';
import './pages/app-catalog-page/app-catalog-page'
import './pages/app-details-page/app-details-page'
import './pages/app-cart-page/app-cart-page'
import './layout/app-layout/app-layout'
import "./layout/app-header/app-header"
import "./layout/app-footer/app-footer"

class App extends router(LitElement)  {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object }
    };
  }

  static get routes() {
    return [{
      name: 'home',
      pattern: '',
      data: { title: 'Home' }
    }, {
      name: 'catalog',
      pattern: 'catalog'
    }, {
      name: 'details',
      pattern: 'details/:id'
    }, {
      name: 'cart',
      pattern: 'cart'
    }, {
      name: 'not-found',
      pattern: '*'
    }];
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `;

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }

  render() {
    return html`
      <app-layout>
        <app-header slot='header'></app-header>

        <app-main  slot='main' active-route=${this.route}>
          <h1 route='home'>Home</h1>
          <app-catalog-page route='catalog'></app-catalog-page>
          <app-cart-page route='cart'></app-cart-page>
          <app-details-page route='details'></app-details-page>
          <h1 route='not-found'>Not Found </h1>
        </app-main>

        <app-footer slot='footer'></app-footer>
      </app-layout>

    `;
  }
}

// <h1 route='info'>Info ${this.query.data}</h1>
// <h1 route='user'>User ${this.params.id} </h1>

customElements.define('shoes-app', App);

import {} from "@webcomponents/webcomponentsjs/webcomponents-loader.js";

import { LitElement, html, css } from 'lit-element';
import { navigator, router } from 'lit-element-router';

import './main.js';
import './components/app-link/app-link.js';
import './components/app-spinner/app-spinner';
import './components/app-theme-switch/app-theme-switch';
import './pages/app-catalog-page/app-catalog-page'
import './pages/app-details-page/app-details-page'
import './pages/app-cart-page/app-cart-page'
import './pages/app-home-page/app-home-page'
import './layout/app-layout/app-layout'
import "./layout/app-header/app-header"
import "./layout/app-footer/app-footer"
import themes from "./theme.js"
import { DEFAULT_THEME } from './config.js';
import globalStyles from './styles/global.styles.js';


class App extends router(navigator(LitElement))  {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      loading: { type: Number },
      _theme: { type: String },
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
    ${ globalStyles }

    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    app-theme-switch {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 999999999;
      margin: 10px;
    }

    .fullscreen-loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000000a1;
      z-index: 9999999999;
    }

    // Pages
    [route] {
      max-height: 100%;
      overflow: auto;
    }
  `;

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
    this.theme = DEFAULT_THEME;
    this.loading = 0;
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log({ route, params, query })
  }

  updated(changedProperties) {
    if (changedProperties && changedProperties.has('route')) {
      const pageContext = { route: this.route, params: this.params, query: this.query }
      this.mainOutlet.setRouterContext(this.route, pageContext)
    }
  }

  render() {
    return html`
      <app-theme-switch
        .theme='${this._theme}'
        @switch='${(e) => this.theme = e.detail}'
      ></app-theme-switch>

      ${
        this.loading > 0
          ? html`
            <div class='fullscreen-loader-overlay'>
              <app-spinner></app-spinner>
            </div>`
          : html``
      }

      <app-layout>
        <app-header slot='header'></app-header>

        <app-main slot='main' active-route=${this.route}>
          <app-home-page route='home'></app-home-page>
          <app-catalog-page route='catalog'></app-catalog-page>
          <app-cart-page route='cart'></app-cart-page>
          <app-details-page route='details'></app-details-page>
          <h1 route='not-found'> :( This page does not exist. </h1>
        </app-main>

        <app-footer slot='footer'></app-footer>
      </app-layout>

    `;
  }

  get mainOutlet() {
    return this.renderRoot.querySelector("app-main")
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('add-loading', this.handleAddLoading);
    this.addEventListener('complete-loading', this.handleCompleteLoading);
  }

  disconnectedCallback() {
    this.removeEventListener('add-loading', this.handleAddLoading);
    this.removeEventListener('complete-loading', this.handleCompleteLoading);
    super.disconnectedCallback();
  }

  handleAddLoading() {
    this.loading++
  }

  handleCompleteLoading() {
    this.loading--
  }

  set theme(t) {
    this._theme = t

    Object.keys(themes['common']).forEach(prop => {
      this.style[prop] = themes['common'][prop]
    })

    const themeToApply = themes[t];
    Object.keys(themeToApply).forEach(prop => {
      this.style.setProperty(prop, themeToApply[prop])
    })
  }
}

customElements.define('shoes-app', App);

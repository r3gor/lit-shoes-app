import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { getShoesCatalog } from '../../services/shoes.service.js';

import '../../components/app-item-card/app-item-card';
import '../../components/app-filter-panel/app-filter-panel';
import styles from './app-catalog-page.styles.js';
import globalStyles from '../../styles/global.styles.js';
import { makeFiltersParams } from '../../utils/filter.utils.js';
import { CompBase } from '../../core/component-base.decorator.js';
import { navigator } from 'lit-element-router';


export class AppCatalogPage extends CompBase(navigator(LitElement)) {

  static styles = [ globalStyles, styles ];
  static properties = {
    _items: { type: Array },
    filteredItems: { type: Array }
  }

  constructor() {
    super()
    this._items = [];
  }

  set items(v) {
    this._items = v;
    this.filterPanel.items = v;
  }

  set routeContext(context) {
    // Se mueve el fetchItems a este método para que se ejecute siempre que se
    // acceda a la ruta de este componente caso contrario no se hace la petición.
    // Cuando navegando se vuelva a acceder a esta ruta se volvera a lanzar la petición
    // La diferencia de llamarlo en el firstUpdated es que los datos es que en ese
    // caso la peticion se hará así yo acceda a otra ruta distinta, lo cual no es eficiente
    // y en caso navegue nunca tendre datos actualizados ya que siempre la petición solo se
    // lanza al inicio y no con un cambio de ruta
    this.fetchItems()
  }

  render() {
    return html`
      <app-filter-panel
        @change='${this.handleChangeFilters}'
      ></app-filter-panel>

      <div class='items-wrapper'>
        ${
          this.filteredItems?.length
            ? this.filteredItems.map(i => html`
            <app-item-card
              @click='${() => this.navigateItemDetails(i.id)}'
              .imgSrc="${i.image}"
              .title="${i.name}"
              .subtitle="${i.price}"
            ></app-item-card>
          `)
            : html`No items`
        }
      </div>
    `
  }

  get filterPanel() { return this.renderRoot.querySelector("app-filter-panel"); }

  navigateItemDetails(id) {
    this.navigate(`/details/${id}`);
  }

  handleChangeFilters({ detail: filteredItems }) {
    this.filteredItems = filteredItems
  }

  async fetchItems() {
    this.addLoading()
    this.items = await getShoesCatalog()
      .catch(err => {
        alert(`Error when fetching shoes catalog`)
        return []
      })
      .finally(_ => {
        this.completeLoading()
      });
  }
}

customElements.define('app-catalog-page', AppCatalogPage);

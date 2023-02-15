import appState from '../services/app-state.service.js';
import { LitElement } from 'lit-element';

/**
 * Decorador que inyecta funcionalidades comunes a los componentes:
 * -
 * @param <LitElement> litBase
 * @constructor
 */
export function CompBase(litBase) {
  return class extends litBase {

    constructor(...args) {
      super(...args);
    }

    // NOT OVERRIDE THIS FUNCTION
    __COMP_BASE_handleStateChanges ({ detail: newState}) {
      this.onAppStateChange && this.onAppStateChange(newState)
    }

    connectedCallback(...args) {
      super.connectedCallback(...args);

      // Solo si el método fue sobreescrito en la clase concreta se anade el listener
      if (this.onAppStateChange) {
        this.onAppStateChange(appState.getState())
        window.addEventListener(appState.eventKey, this.__COMP_BASE_handleStateChanges.bind(this))
      }
    }

    disconnectedCallback() {
      if (this.onAppStateChange) {
        window.removeEventListener(appState.eventKey, this.__COMP_BASE_handleStateChanges.bind(this));
      }
      super.disconnectedCallback();
    }

    // Override this method in concrete components for handle state changes
    // onAppStateChange(newState) {
    // }


    addLoading() {
      this.dispatchEvent(new CustomEvent('add-loading', { composed: true, bubbles: true }))
    }

    completeLoading() {
      this.dispatchEvent(new CustomEvent('complete-loading', { composed: true, bubbles: true }))
    }
  }
}

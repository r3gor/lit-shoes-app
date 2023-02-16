import appState from './app-state.service.js';

class CartService {

  key = "cart";

  getValue() {
    return appState.getState()?.[this.key]
  }

  setValue(cartValue) {
    appState.patchState({
      [this.key]: cartValue
    })
  }

  addItem(id, details) {
    const curr = this.getValue() || []
    this.setValue(
      [...curr, { id, details }]
    )
  }

  removeItem(id) {
    const curr = this.getValue()
    curr && this.setValue(
      curr.filter(i => i.id != id)
    )
  }

  isInCart(id) {
    const curr = this.getValue() || []
    return curr.some(i => i.id === id)
  }
}

const cartService = new CartService()
export default cartService

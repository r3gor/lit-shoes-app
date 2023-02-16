import appState from './app-state.service.js';

class CartService {

  key = "favorites";

  getValue() {
    return appState.getState()?.[this.key]
  }

  setValue(val) {
    appState.patchState({
      [this.key]: val
    })
  }

  addItem(id, details) {
    const curr = this.getValue() || []
    const alreadyExists = this.isFavorite(id)
    if (alreadyExists) return // ignore update if already exist
    this.setValue(
      [...curr, id]
    )
  }

  isFavorite(id) {
    const curr = this.getValue() || []
    return curr.some( i => i == id )
  }

  removeItem(id) {
    const curr = this.getValue()
    curr && this.setValue(
      curr.filter(i => i != id)
    )
  }
}

const favoritesService = new CartService()
export default favoritesService

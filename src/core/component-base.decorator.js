import globalStyles from '../styles/global.styles.js';

export function CompBase(litBase) {
  return class extends litBase {

    addLoading() {
      this.dispatchEvent(new CustomEvent('add-loading', { composed: true, bubbles: true }))
    }

    completeLoading() {
      this.dispatchEvent(new CustomEvent('complete-loading', { composed: true, bubbles: true }))
    }
  }
}

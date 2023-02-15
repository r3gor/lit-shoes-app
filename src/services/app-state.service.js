import { APPSTATE_EVENTKEY, APPSTATE_KEY, STATE_PREFIX } from '../config.js';

class StateService{

  constructor(key, eventKey) {
    this.key = STATE_PREFIX + '_' + key;
    this.eventKey = STATE_PREFIX + '_' + eventKey;
    let loadedState = localStorage.getItem(this.key)
    if (loadedState === null) return
    loadedState = JSON.parse(loadedState)
    this.setState(loadedState)
  }

  getState() {
    return window[this.key]
  }

  setState(state) {
    window[this.key] = state;
    window.dispatchEvent(new CustomEvent(this.eventKey, { detail: state }));
    localStorage.setItem(this.key, JSON.stringify(state))
  }

  patchState(props) {
    const newState = {
      ...window[this.key],
      ...props
    };
    this.setState(newState);
  }
}

const appState = new StateService(APPSTATE_KEY, APPSTATE_EVENTKEY);
export default appState

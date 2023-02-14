import { APPSTATE_EVENTKEY, APPSTATE_KEY, STATE_PREFIX } from '../config.js';

class StateService{

  constructor(key, eventKey) {
    this.key = STATE_PREFIX + '_' + key;
    this.eventKey = STATE_PREFIX + '_' + eventKey;
  }

  getState() {
    return window[this.key]
  }

  setState(state) {
    window[this.key] = state;
    window.dispatchEvent(new CustomEvent(this.eventKey, { detail: state }));
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

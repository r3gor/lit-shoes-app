
import {css} from 'lit-element';

export default css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  ::slotted([slot='header']) {
    height: var(--header-height);
    position: sticky;
    z-index: 9999;
    top: 0;
    left: 0;
  }

  ::slotted([slot='main']) {
    flex-grow: 1;
    height: calc(100vh - (var(--header-height) + var(--footer-height)));
    background-color: var(--bg);
    color: var(--text-primary);
    overflow: hidden;
  }

  ::slotted([slot='footer']) {
    height: var(--footer-height);
    position: sticky;
    z-index: 9999;
    bottom: 0;
    left: 0;
  }
`

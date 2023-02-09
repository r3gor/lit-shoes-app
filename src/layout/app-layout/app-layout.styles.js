
import {css} from 'lit-element';

export default css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  ::slotted([slot='header']) {
    height: 100px;
    position: sticky;
    top: 0;
    left: 0;
  }

  ::slotted([slot='main']) {
    flex-grow: 1;
    background-color: var(--bg);
    color: var(--text-primary);
  }

  ::slotted([slot='footer']) {
    height: 50px;
  }
`

import {css} from 'lit-element';
import customScrollbar from './custom-scrollbar.js';

export default css`
  * {
    box-sizing: border-box;
  }

  ${customScrollbar}

  button {
    padding: 8px;
    border-radius: 10px;
    background-color: var(--c-primary);
    color: var(--text-primary);
    border: 1px solid var(--text-primary);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--c-primary-l);
  }

  button:disabled,
  button[disabled] {
    background-color: gray;
  }
`

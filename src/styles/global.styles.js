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
    background-color: #1973B8;
    color: white;
    border: 2px solid var(--text-primary);
    cursor: pointer;
    font-family: Rubik, sans-serif;;
    padding: 8px 16px;
    border-radius: 8px;
  }

  button:hover {
    background-color: var(--c-primary-l);
  }

  button:disabled,
  button[disabled] {
    background-color: gray;
  }
`

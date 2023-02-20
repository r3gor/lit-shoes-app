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
    font-family: Rubik, sans-serif;
    padding: 12px 24px;
    border-radius: 8px;
  }

  button:hover {
    font-weight: bolder;
  }

  button:disabled,
  button[disabled] {
    background-color: gray;
  }

  input, select, option {
    padding: 8px;
    border: none;
    margin: 2px;
    border-radius: 5px;
    font-family: Rubik, sans-serif;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }

  .strong {
    font-weight: 500;
  }


`

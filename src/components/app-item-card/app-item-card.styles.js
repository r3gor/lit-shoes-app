
import {css} from 'lit-element';

export default css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-1);
    //box-shadow: 1px 4px 6px var(--c-shadow);
    border-radius: 10px;
    text-align: center;
  }

  img {
    padding: 16px;
  }

  .title {
    font-size: 20px;
  }

  .subtitle {
    font-weight: bolder;
    color: var(--c-accent);
    padding: 8px;
  }

  .actions {
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    gap: 2px;
    height: 48px;
    margin-top: auto;
  }

  :host(:hover) .actions {
    opacity: 1;
  }

  .actions button {
    flex-basis: 0;
    flex-grow: 1;
    height: 100%;
    border-radius: unset;
    border: unset;
    cursor: pointer;
  }

  .actions button:hover {
    font-weight: bolder;
  }

  :host img {
    width: 100%;
  }
`

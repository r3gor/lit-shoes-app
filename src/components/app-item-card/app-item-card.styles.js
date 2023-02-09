
import {css} from 'lit-element';

export default css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //width: 200px;
    background-color: var(--bg-1);
    padding: 16px;
    //box-shadow: 1px 4px 6px var(--c-shadow);
    border-radius: 10px;
    text-align: center;
  }

  .title {
    font-weight: bold;
  }

  :host img {
    width: 100%;
  }
`

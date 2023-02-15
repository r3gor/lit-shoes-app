
import {css} from 'lit-element';

export default css`
  :host {
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-1);
  }

  .title {
    position: sticky;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: var(--bg-1);
    z-index: 99;
    padding: 16px;
    margin: 0px;
    border-bottom: 4px solid var(--bg);
  }

  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow: auto;
  }
`

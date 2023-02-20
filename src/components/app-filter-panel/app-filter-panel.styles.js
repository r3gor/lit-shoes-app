
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title h2 {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    gap: 8px;
  }

  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow: auto;
  }
`

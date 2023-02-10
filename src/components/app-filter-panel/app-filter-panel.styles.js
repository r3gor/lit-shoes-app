
import {css} from 'lit-element';

export default css`
  :host {
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: var(--c-primary-l);
  }

  .title {
    position: sticky;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: var(--c-primary-l);
    z-index: 99;
    padding: 16px;
    margin: 0px;
    border-bottom: 1px solid var(--text-primary);
  }

  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`


import {css} from 'lit-element';

export default css`
  :host {
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: auto;
  }

  .items-wrapper {
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 36px;
    gap: 36px;
    flex-grow: 2;
  }

  .order-resume {
    padding: 36px;
    max-width: 1280px;
    flex-grow: 1;
    background-color: var(--bg-1);
    border-radius: 10px;
    margin: 36px;
    height: fit-content;
    position: sticky;
    top: 36px;
  }

  .order-resume__row {
    display: flex;
    justify-content: space-between;
  }
`

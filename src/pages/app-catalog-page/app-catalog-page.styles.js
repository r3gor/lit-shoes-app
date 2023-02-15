import { css } from 'lit-element';
export default css`
  :host {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .items-wrapper {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, auto));
    gap: 48px;
    justify-content: center;
    padding: 36px 24px;
    height: 100%;
    overflow: auto;
  }

  .filter-wrapper {
    height: 100%;
    padding: 36px 24px 0px 0px;
  }

  .filter-wrapper app-filter-panel {
    height: 100%;
    overflow: auto;
    border-radius: 0px 20px 0px 0px;
  }
`

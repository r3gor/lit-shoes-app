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
    grid-template-columns: repeat(auto-fill, minmax(206px, auto));
    gap: 48px;
    justify-content: center;
    padding: 36px 24px;
    //margin: 36px 0;
  }

  app-filter-panel, .items-wrapper {
    height: 100%;
    overflow: auto;
  }

  app-item-card {
    cursor: pointer;
  }

  app-item-card:hover {
    transform: scale(1.04);
  }
`

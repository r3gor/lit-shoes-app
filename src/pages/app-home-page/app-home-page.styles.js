
import { css } from 'lit-element';

export default css`
  :host {
    display: flex;
    flex-direction: column;
    padding: 8px 88px 64px 88px;
    overflow: auto;
    height: 100%;
  }

  app-gallery-items {
    grid-template-columns: repeat(auto-fill, minmax(220px, 324px));
    justify-content: space-between;
    margin-bottom: 56px;
    gap: 16px;
  }

  h1 {
    margin-top: 24px;
  }

  h3 {
    position: sticky;
    top: 0px;
    background-color: rgb(25, 118, 210);
    z-index: 9999;
    margin: 0px 0px 8px -90px;
    padding: 16px 16px 16px 90px;
    width: fit-content;
    border-radius: 0px 40px 40px 0px;
    color: white;
    width: 202px;
    margin-top: 24px;
    margin-bottom: 36px;
    //cursor: pointer;
    transition: all .2s ease-in-out;
  }

  h3:hover {
    font-size: 20px;
  }

  //h3:first-of-type {
  //  margin-top: 0px;
  //  margin-bottom: 16px;
  //}
`


import {css} from 'lit-element';

export default css`
  :host {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 64px;
    box-sizing: border-box;
  }

  .item-detail {
    display: flex;
    flex-direction: row;
    height: 400px;
    border: 1px solid white;
    margin: auto;
    padding: 24px;
    border-radius: 10px;
    width: min-content;
  }

  .resume {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .subtitle {
    font-size: 14px;
    font-weight: lighter;
    text-transform: uppercase;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    flex-grow: 1;
    margin-top: 24px;
  }

  .images-wrapper {
    display: flex;
  }

  img {
    object-fit: contain;
  }

  .image-main {
  }

  .image-main img {
    height: 100%;
  }

  .image-second {
    display: flex;
    flex-direction: column;
  }

  .image-second img {
    height: 50%;
  }
`

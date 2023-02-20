
import { css } from 'lit-element';

export default css`
  :host {
    //border: 1px solid white;
    display: flex;
    padding: 24px;
    flex-direction: column;
    width: 100%;
  }

  .main {
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    gap: 36px;
    width: 100%;
    justify-content: space-evenly;
  }

  .resume {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .category {
    font-size: 14px;
    font-weight: lighter;
    text-transform: uppercase;
  }

  .price {
    font-size: 24px;
  }

  .name {
    font-size: 24px;
    font-weight: bold;
    margin-top: 24px;
  }

  .color {
    text-transform: capitalize;
  }

  .color-sample {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .season {
    text-transform: capitalize;
  }

  .imgs {
    display: flex;
    width: 38%;
    //width: 306px;
  }

  img.image-main {
    width: 80%;
  }

  .image-second {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .image-second img {
    width: 100%;
  }

  img {
    object-fit: contain;
  }

  .details {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .flex-row {
    justify-content: space-between;
  }

  .actions {
    display: flex;
    justify-content: end;
    align-items: center;
  }
`

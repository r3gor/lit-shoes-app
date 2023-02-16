
import { css } from 'lit-element';

export default css`
  :host {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, auto));
    gap: 48px;
    justify-content: center;
    width: 100%;
  }
`

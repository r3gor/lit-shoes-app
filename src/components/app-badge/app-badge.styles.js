
import { css } from 'lit-element';

export default css`
  :host {
    position: relative;
    margin-right: 16px;
  }

  .value {
    padding: 4px;
    border-radius: 50%;
    position: absolute;
    aspect-ratio: 1 / 1;
    top: -20px;
    right: -14px;
    width: 20px;
    text-align: center;
    font-size: 10px;
    font-weight: 800;
    background-color: var(--c-primary);
    color: var(--text-primary);
  }
`

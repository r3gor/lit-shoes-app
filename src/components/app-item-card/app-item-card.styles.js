
import {css} from 'lit-element';

export default css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-1);
    //box-shadow: 1px 4px 6px var(--c-shadow);
    border-radius: 10px;
    text-align: center;
  }

  img.main-img {
    padding: 16px;
    border-bottom: 2px solid #80808069;
  }

  .resume {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 24px;
    text-align: left;
  }

  .brand{
    font-weight: lighter;
    color: var(--text-primary);
    text-transform: uppercase;
    line-height: 24px;
    opacity: 0.8;
  }

  .title {
    margin-top: 8px;
    font-size: 20px;
  }

  .subtitle {
    font-weight: bolder;
    color: var(--c-accent);
    line-height: 36px;
  }

  .actions {
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    gap: 2px;
    height: 48px;
    margin-top: auto;
  }

  :host(:hover) .actions {
    opacity: 1;
  }

  .actions button {
    flex-basis: 0;
    flex-grow: 1;
    height: 100%;
    border-radius: unset;
    border: unset;
    cursor: pointer;
    padding: 0px;
  }

  .actions img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 4px;
  }

  .actions button:hover {
    font-weight: bolder;
  }

  :host img {
    width: 100%;
  }
`

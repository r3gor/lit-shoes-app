
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
    position: relative;
  }

  img.main-img {
    width: 100%;
    padding: 16px;
    border-bottom: 2px solid #80808069;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }

  :host(:hover) img.main-img {
    padding: 4px;
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
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    gap: 2px;
    height: 48px;
    margin-top: auto;
  }

  .show-hover {
    opacity: 0;
  }

  :host(:hover) .show-hover {
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

  button.button-fav-off {
    filter: opacity(0.5);
  }

  button.button-fav-on,
  button.button-fav-off{
    opacity: 0;
    width: 36px;
    background-color: transparent;
    padding: 0px;
    border: none;
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 8px;
  }

  :host img {
    width: 100%;
  }
`

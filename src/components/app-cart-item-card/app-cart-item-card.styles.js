
import { css } from 'lit-element';

export default css`
  :host {
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: var(--bg-1);
    border-radius: 10px;
  }

  .top-actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
  }

  .priority {
    display: flex;
    gap: 16px;
    color: var(--text-primary);
  }

  .priority__details .brand{
    font-weight: lighter;
    color: var(--text-primary);
    text-transform: uppercase;
    line-height: 24px;
    opacity: 0.8;
  }

  .priority__details .code{
    font-weight: lighter;
    font-size: 16px;
    line-height: 18px;
    opacity: 0.8;
  }

  .priority__details .name{
    font-size: 24px;
    line-height: 40px;
  }

  .priority__details .by{
    font-weight: lighter;
    font-size: 16px;
    opacity: 0.8;
  }

  .priority__details .color-size{
    font-weight: lighter;
    font-size: 24px;
    line-height: 40px;
  }

  .priority__details .color-size span{
    font-weight: normal;
  }

  .priority__details .price{
    font-weight: lighter;
    font-size: 24px;
    line-height: 40px;
  }

  img {
    max-width: 110px;
    height: auto;
  }
`

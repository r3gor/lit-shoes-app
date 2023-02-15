
import {css} from 'lit-element';

export default css`
  button {
    width: 56px;
    height: 56px;
    border-radius: 10px;
    overflow: hidden;
    border: none;
    cursor: pointer;
    //background-color: var(--c-primary-l);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  button img {
    width: 100%;
  }

  button.dark {
    padding: 10px; // badfix para que ambas imagenes tengan un tamano similar
  }
`

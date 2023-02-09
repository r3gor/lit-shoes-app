
import {css} from 'lit-element';

// export default css`
//   :host {
//     display: block;
//     border: 16px solid #f3f3f3;
//     border-radius: 50%;
//     border-top: 16px solid #3498db;
//     width: 120px;
//     height: 120px;
//     -webkit-animation: spin 2s linear infinite; /* Safari */
//     animation: spin 2s linear infinite;
//   }
//
//   /* Safari */
//   @-webkit-keyframes spin {
//     0% {
//       -webkit-transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//     }
//   }
//
//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `

export default css`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background: black;
  }

  :host {
    --primary-color: white;

    --clock-color: var(--primary-color);
    --clock-width: 4rem;
    --clock-radius: calc(var(--clock-width) / 2);
    --clock-minute-length: calc(var(--clock-width) * 0.4);
    --clock-hour-length: calc(var(--clock-width) * 0.2);
    --clock-thickness: 0.2rem;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--clock-width);
    height: var(--clock-width);
    border: 3px solid var(--clock-color);
    border-radius: 50%;
  }

  :host::before,
  :host::after {
    position: absolute;
    content: "";
    top: calc(var(--clock-radius) * 0.25);
    width: var(--clock-thickness);
    background: var(--clock-color);
    border-radius: 10px;
    transform-origin: center calc(100% - calc(var(--clock-thickness) / 2));
    animation: spin infinite linear;
  }

  :host::before {
    height: var(--clock-minute-length);
    animation-duration: 2s;
  }

  :host::after {
    top: calc(var(--clock-radius) * 0.25 + var(--clock-hour-length));
    height: var(--clock-hour-length);
    animation-duration: 15s;
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }

`

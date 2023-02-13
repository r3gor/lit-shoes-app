import { API_SHOES, PRODUCTION } from '../config.js';

const DELAY = PRODUCTION ? 0 : 1000

export const getShoesCatalog = () => {
  const URL = `${API_SHOES}/shoes`

  return fetch(URL)
    .then(res => new Promise(resolve => setTimeout(() => resolve(res), DELAY))) // delay para testear el loading
    .then(res => {
      if (!res.ok) {
        console.error(err)
        throw new Error("Not 2xx response", {cause: res});
      } else {
        return res.json()
      }
    })
}

export const getShoesItem = (id) => {
  const URL = `${API_SHOES}/shoes/${id}`

  return fetch(URL)
    .then(res => new Promise(resolve => setTimeout(() => resolve(res), DELAY))) // delay para testear el loading
    .then(res => {
      if (!res.ok) {
        console.error(err)
        throw new Error("Not 2xx response", {cause: res});
      } else {
        return res.json()
      }
    })
}

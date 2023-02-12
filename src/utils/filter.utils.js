import { getIntersection } from './operations.utils.js';

/**
 * Construye los parametros de los filtros pasados por parametro (filterList)
 * @param {Array<{key: String, type: "choice"|"range"}>} filterList Lista de los filtros a establecer
 * @param {Array<Object>} itemList Lista de los objetos sobre los que se quiere aplicar los filtros
 * @returns {*} FiltersParams
 */
export function makeFiltersParams(filterList, itemList) {
  return filterList.map(
    ({ type, key }) => {
      const f = filterFabric[type]
      if (!f) return undefined // unsuported type
      const params = f.makeParams(itemList, key)
      return { type, key, ...params }
    }
  )
}

/**
 * Comprueba si los filtros pasados por argumento están en su estado inicial
 * @param filtersParams
 * @param filtersValue
 */
export function isFiltersZero(filtersParams, filtersValue) {
  if (filtersValue === undefined) return true
  return filtersParams.every(
    filterParams => {
      const filterValue = filtersValue[filterParams.key]
      if (filterValue === undefined) return true
      const f = filterFabric[filterParams.type]
      return f.isZero(filterParams, filterValue.value)
    }
  )
}

export function filtersApply(itemsList, filtersValue, filtersParams) {
  if (filtersValue === undefined) return itemsList
  if (isFiltersZero(filtersParams, filtersValue)) return itemsList

  const keys = Object.keys(filtersValue)
  return itemsList.filter(
    item => keys.every(key => {
      const filterValue = filtersValue[key]
      const { type, value: fvalue } = filterValue
      const filterParams = filtersParams.find(f => f.key == key)
      const f = filterFabric[type]
      if (f.isZero(filterParams, fvalue)) return true
      return f.match(fvalue, item, key)
    })
  )
}

class ChoiceFilter {
  static type = "choice"

  static makeParams(items, key) {
    const values = items
        .map(i => i[key]) // valores asociado a la key
        .flat() // aplanar la matriz: [[a,b],[c]] => [a,b,c]
    const set = new Set(values) // removemos duplicados
    const choices = Array.from(set)
    return { choices, initial: [] }
  }

  /**
   * Comprueba si el filtro está en su estado inicial
   * @param filterParams
   * @param filterValue
   * @returns {boolean}
   */
  static isZero(filterParams, filterValue) {
    return filterValue.length === 0
  }

  /**
   *
   * @param {Array} filterValue Valor del filtro
   * @param {Object} item Item a verificar
   * @param {String} key Campo a comparar
   * @returns {Boolean} true si el item hace match con los valores del filtro
   */
  static match(filterValue, item, key) {
    const itemValue = item[key]
    return itemValue instanceof Array
      ? getIntersection(itemValue, filterValue).length != 0
      : filterValue.includes(itemValue)
  }
}

class RangeFilter {
  static type = "range"

  static makeParams(items, key) {
    const values = items.map(i => i[key])
    const limitMin = Math.min(values)
    const limitMax = Math.max(values)
    return { limitMin, limitMax, initial: { min: limitMin, max: limitMax } }
  }

  /**
   * Comprueba si el filtro está en su estado inicial
   * @param filterParams
   * @param filterValue
   * @returns {boolean}
   */
  static isZero(filterParams, filterValue) {
    const { initial: { min: iniMin, max: iniMax } } = filterParams
    const { min, max } = filterValue
    return min === iniMin && max === iniMax
  }

  /**
   *
   * @param {{ min: Number, max: Number}} filterValue Valor del filtro
   * @param {Object} item Item a verificar
   * @param {String} key Campo a comparar
   * @returns {Boolean} true si el item hace match con los valores del filtro
   */
  static match(filterValue, item, key) {
    const itemValue = item[key]
    const { min, max } = filterValue
    return min <= itemValue && itemValue <= max
  }
}

export const filterFabric = {
  [ChoiceFilter.type]: ChoiceFilter,
  [RangeFilter.type]: RangeFilter,
}

/**
 * Operacion para obtener la intersección de dos conjuntos (Set o Array)
 * @param {Set | Array} s1
 * @param {Set | Array} s2
 * @returns la interseccion de ambos set o array (elementos que en los que coinciden)
 */
export const getIntersection = (s1, s2) => {
  const a1 = Array.from(new Set(s1))
  const a2 = Array.from(new Set(s2))
  const coincidences = a1.filter(e => a2.includes(e))
  return Array.from(new Set(coincidences))
}

/**
 *
 * @param {Any} o1
 * @param {Any} o2
 */
export const deepCompare = (o1, o2) => {
  return JSON.stringify()
}

export const capitalizeStr = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

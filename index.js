/**
 * Suma de dos numeros
 * @example
 * n1 = 1, n2 = 3 => result 2
 * @param {*} n1 Numero uno de la suma
 * @param {*} n2 Numbero dos de la suma
 */
const suma = (n1, n2) => n1 + n2

/**
 * Resta de dos numeros
 * @example
 * n1 = 1, n2 = 1 => result 0
 * @param {*} n1 Numero uno de la resta
 * @param {*} n2 Numbero dos de la resta
 */
const resta = (n1, n2) => n1 - n2

/**
 * Multiplicacion de dos numeros
 * @example
 * n1 = 2, n2 = 2 => result 4
 * @param {*} n1 Numero uno de la multiplicacion
 * @param {*} n2 Numbero dos de la multiplicacion
 */
const multiplicacion = (n1, n2) => n1 * n2

/**
 * Division de dos numeros
 * @example
 * n1 = 6, n2 = 3 => result 2
 * @param {*} n1 Numero uno de la division
 * @param {*} n2 Numbero dos de la division
 */
const division = (n1, n2) => n1 / n2

module.exports = {
  suma,
  resta,
  multiplicacion,
  division
}

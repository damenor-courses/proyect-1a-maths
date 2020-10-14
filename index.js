/**
 * Suma de dos numeros
 * @example
 * n1 = 1, n2 = 3 => result 2
 * @param {*} n1 Numero uno de la suma
 * @param {*} n2 Numbero dos de la suma
 */
const suma = (n1, n2) => isNumber(n1, n2) ? n1 + n2 : handleError()

/**
 * Resta de dos numeros
 * @example
 * n1 = 1, n2 = 1 => result 0
 * @param {*} n1 Numero uno de la resta
 * @param {*} n2 Numbero dos de la resta
 */
const resta = (n1, n2) => isNumber(n1, n2) ? n1 - n2 : handleError()

/**
 * Multiplicacion de dos numeros
 * @example
 * n1 = 2, n2 = 2 => result 4
 * @param {*} n1 Numero uno de la multiplicacion
 * @param {*} n2 Numbero dos de la multiplicacion
 */
const multiplicacion = (n1, n2) => isNumber(n1, n2) ? n1 * n2 : handleError()

/**
 * Division de dos numeros
 * @example
 * n1 = 6, n2 = 3 => result 2
 * @param {*} n1 Numero uno de la division
 * @param {*} n2 Numbero dos de la division
 */
const division = (n1, n2) => isNumber(n1, n2) ? n1 / n2 : handleError()

const isNumber = (n1, n2) => typeof n1 !== 'number' || typeof n2 !== 'number' ? false : true

const handleError = () => console.log('Algunos de los valores no son numéricos')

module.exports = {
  suma,
  resta,
  multiplicacion,
  division
}

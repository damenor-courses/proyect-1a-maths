# proyect-1a-maths

Modulo para realizar operaciones matemáticas simples

## Instalación

```
npm install proyect-1a-maths
```

## Uso

```js
// Importación del modulo
const math = require('proyect-1a-maths')

const n1 = 10
const n2 = 2

console.log('Numero 1:', n1)
console.log('Numero 2:', n2)

console.log('suma:', math.suma(n1, n2))
console.log('resta:', math.resta(n1, n2))
console.log('multiplicacion:', math.multiplicacion(n1, n2))
console.log('division:', math.division(n1, n2))

console.log('CONTROL DE ERRORES')

console.log('suma:', math.suma('text', n2))
console.log('resta:', math.resta(true, n2))
console.log('multiplicacion:', math.multiplicacion(false, n2))
console.log('division:', math.division('text', n2))

```


// JavaScript é fracamente tipado, logo não é necessário especificar o tipo da variável ao declará-la:

let variavelInteira = 10
console.log(typeof variavelInteira)

let variavelFloat = 1.5
console.log(typeof variavelFloat)

let variavelString = `Ronaldo`
console.log(typeof variavelString)

let variavelBoolean = true
console.log(typeof variavelBoolean)

console.log(`----------------------------------`)           // Divisória

// Javascript também é uma linguagem dinâmica, logo, é possível mudar o tipo da variável ao longo do código:

let variavelVariosTipos = true
console.log(typeof variavelVariosTipos)

variavelVariosTipos = 10
console.log(typeof variavelVariosTipos)

variavelVariosTipos = `true`
console.log(typeof variavelVariosTipos)

variavelVariosTipos = '1'
console.log(typeof variavelVariosTipos)
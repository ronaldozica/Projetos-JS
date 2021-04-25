
let valorBinario = (Math.pow(2, -5) + Math.pow(2, -6))
valorBinario += 15
console.log(valorBinario)

let diferenca = (15.06 - valorBinario).toPrecision(7)           // Coloquei 8 dígitos significativos para
//         evitar os valores imprecisos do tipo float, já que antes estava printando 0.013125000000000497
console.log(`Diferença = ` + diferenca)       

let erro = (diferenca * 100) / 15.6
console.log(`Essa diferença corresponde a um erro de ` + erro + `%.`)
erro = erro.toPrecision(3)
console.log(`Ou seja, um erro de aproximadamente ` + erro + `%.`)

/*
    Hoisting -> Quando há no código uma variável var no código, o JS "puxa" o instanciamento dela para o começo do código, permitindo o seguinte:
*/

console.log(`Existe a variável x?`, x)

{                                                       // Início do bloco
    var x = 10;                                         // Código de dentro do bloco
}                                                       // Fim do bloco

console.log(`Existe, e o valor de x =`, x)

// Esse código não funcionaria se a variável fosse let ou const, já que essas variáveis são locais ao bloco
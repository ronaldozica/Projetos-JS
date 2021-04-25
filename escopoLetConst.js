
let variavel = 1

{                                       // Início do escopo
    let variavel = 2
    variavel = 4
}                                       // Fim do escopo

console.log(variavel)                   // Saída: 1.
// Isso demonstra que essa variavel se refere a criada na linha 2, e que a criada na 5 é interna ao escopo

console.log(`--------------------------------------`)          // Divisória

let segundaVariavel = 10

{
    {
        {
            {
                {
                    segundaVariavel = 5
                }
            }
        }
    }
}

console.log(segundaVariavel)            // Agora, é interessante mencionar que se a variável foi criada em um escopo de
// ordem maior, mas seu valor foi alterado em um escopo dentro dele, o compilador "busca" a criação dessa variável nos escopos exteriores.
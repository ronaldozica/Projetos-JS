
console.log(3 == true)                          // false
console.log(3 ? `true` : `false`)               // truthy - true

// nesse caso, a saída da linha 3 foi true, já que o número 3 é classificado como truthy
// truthy conta como true para essa comparação e se enquadram: {} ; [] ; 1 ; -1; 3213 ; -Infinity ; etc
// já para o falsy: 0 ; -0 ; undefined; NaN ; etc
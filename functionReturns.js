
let total = 4

function sum(Number1, Number2){
    let total = Number1 + Number2
    return total
}

console.log(total)                          // 4
console.log(sum(8, 12))                     // 20
total = sum(5, 10)
console.log(total)                          // 15
console.log(total = sum(4, 8))              // 12
console.log(total)                          // 12
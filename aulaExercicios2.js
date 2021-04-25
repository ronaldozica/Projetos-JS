
//  Exercícios - Manipulando Arrays

//1. Adicionar um item ao fim do array
//2. Adicionar um item ao começo do array
//3. Remover um item do fim do array
//4. Remover um item do começo do array
//5. Pegar somente alguns elementos do array
//6. Remover um ou mais itens em qualquer posição do array
//7. Encontrar a posição de um elemento do array

let thingsToBuy = ["Milk", "Eggs", "Rice", "Lasagna", "Potatoes", "Tomatoes", "Tuna"]
console.log("Original: " + thingsToBuy)

//1.
thingsToBuy.push("Beans")
console.log("1: " + thingsToBuy)

//2.
thingsToBuy.unshift("Soda")
console.log("2: " + thingsToBuy)

//3.
thingsToBuy.pop()
console.log("3: " + thingsToBuy)

//4.
thingsToBuy.shift()
console.log("4: " + thingsToBuy)

//5.
thingsToBuy = thingsToBuy.slice(1,4)
console.log("5: " + thingsToBuy)

//6.
thingsToBuy.splice(2, 2)
console.log("6: " + thingsToBuy)

//7.
index = thingsToBuy.indexOf("Rice")
console.log("7: " + index)

function Person(name){
    this.name = name
    this.programming = () => {
        return `${this.name} está programando`
    }
}

const ronaldo = new Person(`Ronaldo`)
const mike = new Person(`Mike`)

console.log(ronaldo)
console.log(mike)

console.log(ronaldo.programming())
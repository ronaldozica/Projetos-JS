
// Observação: nas arrow functions não é possível fazer hoisting

const sayMyName = (name) => {
    console.log(name)
}

sayMyName(`Ronaldo`)                // Ronaldo
sayMyName(``)                       // 
sayMyName()                         // undefined
sayMyName(`Mike`)                   // Mike
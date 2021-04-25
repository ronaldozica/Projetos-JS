
function sayMyName(name){
    console.log(`Antes de executar a callback`)
    name()
    console.log(`Depois de executar a callback`)
}

sayMyName(
    () => {
        console.log(`Oi, eu sou a callback`)
    }
)
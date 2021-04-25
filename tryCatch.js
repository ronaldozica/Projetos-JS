
function sayMyName(name){
    if(name === ""){
        throw new Error("É necessário enviar um nome como parâmetro para essa função.")
    }
    else{
        console.log(name)
    }
}

try{
    sayMyName('')
}
catch(e){
    console.log(e)
}

try{
    sayMyName(`Ronaldo`)
}
catch(e){
    console.log(e)
}

console.log(`Se não tivesse sido feito o try...catch não seria possível imprimir essa mensagem.`)
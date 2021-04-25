
/*
    
    Variáveis:
        Let - local do bloco
        Var - global
        Const - constante, não pode mudar

    Obs: JS é fracamente tipada e dinâmica
    
*/
    var climaPredominanteMinasGerais = (`Tropical de altitude`)
    let climaPredominanteAmazonas = (`Equatorial úmido`)
    const climaPredominanteBahia = (`Tropical`)

    console.log(climaPredominanteMinasGerais)               // Tropical de altitude
    console.log(climaPredominanteAmazonas)                  // Equatorial úmido
    console.log(climaPredominanteBahia)                     // Tropical

    climaPredominanteAmazonas = `Não é subtropical úmido`
    console.log(climaPredominanteAmazonas)                  // Não é subtropical úmido
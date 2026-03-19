    let r1 = repete("-", 5)
    let r2 = repete("texto sem número")
    let r3 = repete("Texto número menor do que zero", -5)
    let r4 = repete("5x",5)
    let r5 = repete(5)


    function repete(texto, num){

        if(typeof texto !== "string" || texto === ""){
            return "é Obrigatório ter texto como parametro"
        }

        if(typeof num !== "number"){
            return "é obrigatório ter um número como parametro"
        }

        if(num<0){
            return "Utilizar número maior que zero como parametro"
        }
        let frase = "" 

        for (let i = 0; i < num; i++) frase += texto + " "
        

        return frase
        
    }

    console.log(r1)
    console.log(r2)
    console.log(r3)
    console.log(r4)
    console.log(r5)
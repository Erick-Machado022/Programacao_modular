// programação modular

let str = "   Programação Modular    "

 
function retiraEspaco(string){

    let str2 = ""

    for (let index = 0; index < string.length; index++) {
        if(string[index] != " "){
            str2 += string[index]    
        }
       
    }

    return str2
}


console.log(retiraEspaco(str))


function aparar(string){

    let frase = ""
    let inicio = 0
    let fim = string.length -1

    while(string[inicio] == " "){
        inicio++
    }

    while(string[fim] == " "){
        fim--
    }

   for (let i = inicio; i <= fim; i++) {
        frase += string[i]
    
   }

   return frase
    
}

console.log(aparar(str))
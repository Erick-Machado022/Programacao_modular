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



function metade (str){
    

    if(str instanceof Number){
        return str/2;
    }

    if (str instanceof Array){
        let lista = []
        for (let i = 0; i < str.length/2; i++) {
            lista.push(str[i])
        }
        return lista
    }

    let novaStr = "";

    if(str instanceof String){
        for (let i = 0; i < str.length/2; i++) {
            novaStr += str[i]
            
            
        }
        return novaStr
    }

   

    for (let i = 0; i < (str.length/2); i++) {
        novaStr += str[i]
        
    }

    return novaStr
}

console.log(metade("TADS"))
console.log(metade(new Number(4)))
let teste =  new Number("4")
console.log(typeof teste)
console.log(teste instanceof Number)
console.log(metade(new String("lalala")))
console.log(metade(new Array(2,5,8,6,9,9)))
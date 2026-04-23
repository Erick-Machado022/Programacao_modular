function substituir(txt, letraA, letraB){

    if (txt === undefined || letraA === undefined || letraB === undefined) {
        return undefined
    }  
    
    if( typeof txt != "string" || typeof letraA != "string" || typeof letraB != "string"){
        return undefined
    }
    
    if(txt === ""){
        return ""
   }

    let nova = ""
    for (let i = 0; i < txt.length; i++) {
        if(txt[i] === letraA){
            nova += letraB
        }else{
            nova+= txt[i]
        }
    }
    return nova
}

console.log(substituir("hello world", "o", "a"))
console.log(substituir("ooo", "o", "a"))
console.log(substituir("aaa", "a", "o"))


function limpar(txt){
    let nova = ""

    for (let i = 0; i < txt.length; i++) {
        
        //Verificador de letra minuscula
        if(txt[i] >= "a" && txt[i] <= "z"){
            nova += txt[i]
        }

        //Verifica letra Maiscula
        else if(txt[i] >= "A" && txt[i] <= "Z"){
            nova += txt[i]
        } 


        //Verificador de Número (numeros são permitidos)
        else if(txt[i] >= "0" && txt[i] <= "9"){
            nova += txt[i]
        }

        //Verifica se tem ascento tanto maisc quanto minusc
        else if(txt[i] >= "À" && txt[i] <= "ÿ"){
            nova += txt[i]
        }

        //se não for nenhuma das de cima (caractere especial return espaço)
        else{
            nova+= " "
        }


        

        
    }
        
    

    return nova
}

console.log(limpar("hellLoworld!"))

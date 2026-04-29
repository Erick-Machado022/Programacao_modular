
// Retirar o ultimo caractere
function chop(txt=""){
    
    if(typeof txt != "string"){
        return undefined
    }

    if(txt==""){
        return ""
    }
    
    let novo_txt = "";
    for (let i = 0; i < txt.length -1; i++) {
        novo_txt += txt[i];
    }
    return novo_txt;
}


/*
console.log(chop("teste"))
console.log(chop(2))
console.log(chop(null))
console.log(chop())
console.log(chop([]))
*/

function chomp(txt = ""){

    if(typeof txt != "string"){
        return undefined
    }

    if(txt==""){
        return ""
    }
    
    let novo_txt = "";
    let fim = txt.length -1
    while(txt[fim] == "\n" || txt[fim] == "\r"){
        fim--
    }
    
    for(let i = 0; i<= fim; i++){
        novo_txt += txt[i]
    }

    return novo_txt
    
}

console.log(chomp("IFRS\n\n"))



function squeeze(txt=""){

     if(typeof txt != "string"){
        return undefined
    }

    if(txt==""){
        return ""
    }
    

    let nova_frase = ""
    for (let i = 0; i < txt.length; i++) {
        
        if (i == 0){
            nova_frase += txt[i]
        }else if(txt[i] == txt[i-1]){
            continue
        }else{
            nova_frase += txt[i]
        }
        
    }

    return nova_frase
}

//console.log("teste")

//console.log(squeeze("IFRRRRS"))


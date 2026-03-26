let saldo = 0

export function depositar(valor){
    if(valor < 0){
        console.log("não é possivel depositar valores negativos")
    }else{
        saldo += valor;
        return saldo;
    }

    
}

export function sacar(valor){

    if(valor>saldo){
     throw "Saldo insuficiente"
    }
    if(valor < 0){
        throw "Para Sacar o valor tem que ser maior do que 0"
    }

    if(valor == null || valor == NaN){
        throw "Informe um valor para sacar"
    }
    
    if(typeof valor === "string"){
        throw "informe um valor válido."
    }

    if(arguments.length > 1){
        throw "Informe somente um argumento"
    }
    
    saldo-= valor;
    return saldo


}


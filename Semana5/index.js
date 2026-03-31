import {depositar, sacar } from "./poupanca.js";

depositar(50)


//Erro de saque maior que o saldo
try{
    console.log("Saque de 1000 reais, saldo", sacar(1000))
} catch (e){
    console.error("Saque nao efetuado, motivo: ", e)
}

console.log()

//Saque de 10 reais  ---- sucesso

try{
    console.log("Saque de 10 reais, saldo", sacar(10))
} catch (e){
    console.error("Saque nao efetuado, motivo: ", e)
}

console.log()

//Erro de tentar sacar algo menor do que 0

try{
    console.log("Saque de -5 reais, saldo", sacar(-5))
} catch (zero){
    console.error("Saque nao efetuado, motivo: ", zero)
}

console.log()

//erro de tentar sacar algo vazio

try{
    console.log("Saque de '' reais, saldo", sacar())
} catch (nulo){
    console.error("Saque nao efetuado, motivo: ", nulo)
}

console.log()

try{
    console.log("Saque de string, saldo", sacar("String"))
} catch (texto){
    console.error("Saque nao efetuado, motivo: ", texto)
}

console.log()

try{
    console.log("Saque de varios argumentos, saldo", sacar(5, 15))
} catch (erro){
    console.error("Saque nao efetuado, motivo: ", erro)
}




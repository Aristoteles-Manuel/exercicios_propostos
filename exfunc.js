/*function executar (numero,operacao){
    return operacao(numero)
}
function dobro(numero){
    return numero * 2
}
let resultado = executar(10, dobro)
console.log(resultado)


function triplo(numero){
    return numero*3
}
let s = executar(10, triplo)
console.log(s)*/


function calcular(a,b,operacao){
    return operacao(a,b)
}
function somar(a,b){
    return a+b
}
function subtrair(a,b){
    return a-b
}
function multiplicar(a,b){
    return a*b
}
function divisao(a,b){
    return a/b
}
function sinal(tipo){
    if(tipo=='+'){
        return somar
    }else if(tipo== '-'){
        return subtrair
    }else if(tipo=='*'){
        return multiplicar
    }else if (tipo== '/'){
        return divisao
    }
}
let tipo= sinal('/')
let resultado = calcular(20,5,tipo)
console.log(resultado)
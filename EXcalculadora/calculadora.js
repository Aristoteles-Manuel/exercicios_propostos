let num1 = document.querySelector('input#n1')
let num2 = document.querySelector('input#n2')
let sinal = document.querySelector('input#sinal')
let res = document.querySelector('div#resultado')
let n1 = Number(num1.value)
let n2 = Number(num2.value)

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
let tipo= sinal('+')
let resultado = calcular(51,5,tipo)
console.log(resultado)